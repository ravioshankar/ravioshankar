import json
import boto3
s3_client = boto3.client('s3')
def lambda_handler(event, context):
    # TODO implement

    bucket = ['mylabelingjobbucket','tie-breaker-jobs']
    jobs_list = []
    for bk in bucket:
        jobs_list += get_jobs(bk)
        
    return {
        'statusCode': 200,
        'body': jobs_list
    }

def get_jobs(bucket):
  
    jobs_list = []
    result = s3_client.list_objects(Bucket=bucket)
    if(result.get('Contents')):
        for o in result.get('Contents'):
            data = s3_client.get_object(Bucket=bucket, Key=o.get('Key'))
            contents = data['Body'].read()
            file_content = contents.decode("utf-8")
            json_content = json.loads(file_content)
            for key, value in json_content.items():
                job_details = value
                job_worked_by = len(job_details.get('workedBy'))
                if(job_worked_by == 0 or (job_details.get('type')== 1 and job_worked_by <= 1) ):
                    jobs_list.append(json_content)
    return jobs_list