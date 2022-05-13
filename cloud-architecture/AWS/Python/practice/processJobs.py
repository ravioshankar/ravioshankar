import boto3
import json
s3_resource = boto3.resource("s3")
s3_client = boto3.client('s3')
def get_completed_jobs(bucket):
    # bucket = 'mylabelingjobbucket'
    jobs_list = []
    result = s3_client.list_objects(Bucket=bucket)
    for o in result.get('Contents'):
        data = s3_client.get_object(Bucket=bucket, Key=o.get('Key'))
        contents = data['Body'].read()
        file_content = contents.decode("utf-8")
        json_content = json.loads(file_content)
        print("json-content",json_content)
        for key, value in json_content.items():
            job_details = value
            job_worked_by = len(job_details.get('workedBy'))
            if((job_worked_by == 2 and (job_details.get('type') == 1)) or (job_worked_by == 1 and (job_details.get('type')== 2)) ):
                jobs_list.append(json_content)
    return jobs_list

def convert_to_output_manifest(input):
    output_manifest = {}
    for im in input:
        for key, value in im.items():
            print(value.get('tasks'))
            for task in value.get('tasks'):
                sentence = task.get('metadata').get('audioText')
                output_manifest[sentence] = task.get('labelerResponse')
    print("Output manifest ", output_manifest)
    return output_manifest

# publish final results to S3
def write_output_manifest_to_s3(data):
    bucket_name = 'output-manifest'
    file_name = 'output-manifest.json'
    s3_resource.Object(bucket_name, file_name).put(Body=json.dumps(data))

# data = get_completed_jobs()
# manifest = convert_to_output_manifest(data)
bucket = ['tie-breaker-jobs']
jobs_list = []
for bk in bucket:
    jobs_list += get_completed_jobs(bk)

manifest = convert_to_output_manifest(jobs_list)

print(manifest)
# write_output_manifest_to_s3(manifest)