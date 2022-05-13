import json
import boto3

s3_client = boto3.client('s3')

def lambda_handler(event, context):
    
    eventBody = json.dumps(event)
    json_content = json.loads(eventBody)
    bucket= json_content.get('bucket')
    data = get_object(bucket)
    return data[0]
    

def get_object(bucket):
  
    data_list = []
    result = s3_client.list_objects(Bucket=bucket)
    if(result.get('Contents')):
        for o in result.get('Contents'):
            data = s3_client.get_object(Bucket=bucket, Key=o.get('Key'))
            contents = data['Body'].read()
            file_content = contents.decode("utf-8")
            json_content = json.loads(file_content)
            data_list.append(json_content)
    return data_list