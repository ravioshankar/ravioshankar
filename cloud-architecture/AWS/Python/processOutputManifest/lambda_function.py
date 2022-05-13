import json
import logging
import boto3
from botocore.exceptions import ClientError

finalOutput = {}
s3_resource = boto3.resource("s3")
s3_client = boto3.client('s3')


def lambda_handler(event, context):
    labeling_data = get_output_manifest()
    process_labels(labeling_data)
    return {
        'statusCode': 200,
        'body': labeling_data
    }


# To get manifest from S3 to process further
def get_output_manifest():
    bucket_name = 'output-manifest'
    objects = list_bucket_objects(bucket_name)
    output_manifest = []
    if objects is not None:
        for obj in objects:
            try:
                data = s3_client.get_object(Bucket=bucket_name, Key=obj["Key"])
                contents = data['Body'].read()
                file_content = contents.decode("utf-8")
                json_content = json.loads(file_content)
                output_manifest.append(json_content)
            except ClientError as e:
                logging.error(e)
    return output_manifest


# publish final combined output manifest to S3
def write_final_output_tos3(bucket_name, data):
    s3_resource.Object(bucket_name, 'combined-output-manifest.json').put(Body=json.dumps(data))


def final_labeling_job_result(result, labeler_selections, sentence):
    labeler_selections.append({"majorityAnswer": result[0]})
    finalOutput[sentence] = labeler_selections


# build task for tie breaking
def build_task(sentence, idx):
    task = {
        "id": idx + 1,
        "metadata": {
            "audioFileUrl": "./assets/french-fuse.mp3",
            "audioText": sentence
        },
        "labelerResponse": [

        ]
    }
    return task


# create tie breaker job and push it to S3 bucket
def create_tie_breaker_job(data):
    tie_breaker_jobs = {}

    # 2 - Tie break Task
    tie_breaker_job = {
        "id": 1,
        "type": 2,
        "tasks": [],
        "workedBy": [

        ]
    }
    tie_tasks = []
    for idx, v in enumerate(data):
        tie_tasks.append(build_task(v, idx))
    tie_breaker_job['tasks'] = tie_tasks
    tie_breaker_jobs = {'test tie breaker job': tie_breaker_job}
    return tie_breaker_jobs


def publish_tie_breaker_job_for_labeling(tie_breaker_job_data):
    bucket_name = 'tie-breaker-jobs'
    file_name = 'tie_breaker_jobs.json'
    s3_resource.Object(bucket_name, file_name).put(Body=json.dumps(tie_breaker_job_data))


def process_labels(output_manifests):
    for output_manifest in output_manifests:
        tasks_to_be_created = []
        for sentence, selections in output_manifest.items():
            results = []
            for selection in selections:
                for result in selection.values():
                    results.append(result)

            print("result ", results)
            is_same = all(element == results[0] for element in results)
            if is_same:
                final_labeling_job_result(results, selections, sentence)
            else:
                print("create tiebreaker job")
                tasks_to_be_created.append(sentence)
        print(tasks_to_be_created)
        print(finalOutput)
        if len(tasks_to_be_created) <= 0:
            write_final_output_tos3('combined-output-manifest', finalOutput)
        else:
            tie_breaker_job = create_tie_breaker_job(tasks_to_be_created)
            print(tie_breaker_job)
            publish_tie_breaker_job_for_labeling(tie_breaker_job)


def list_bucket_objects(bucket_name):
    # Retrieve the list of bucket objects
    try:
        response = s3_client.list_objects_v2(Bucket=bucket_name)
    except ClientError as e:
        logging.error(e)
        return None
    return response['Contents']
