import json
import logging
import boto3
from botocore.exceptions import ClientError

s3_client = boto3.client('s3')

def lambda_handler(event, context):
    buckets = ['mylabelingjobbucket', 'combined-output-manifest', 'output-manifest', 'tie-breaker-jobs']
    
    for bucket_name in buckets:
        objects = list_bucket_objects(bucket_name)
        if objects is not None:
            # List the object names
            logging.info(f'Objects in {bucket_name}')
            count = len(objects)
            
            for obj in objects:
                print(f'delete: {obj["Key"]}')
                try:
                    s3_client.delete_object(Bucket=bucket_name, Key=obj["Key"])
                except ClientError as e:
                    logging.error(e)
    return {
        'statusCode': 200
    }

def list_bucket_objects(bucket_name):
    # Retrieve the list of bucket objects
    print(' ---- bucket ---- ', bucket_name)
    try:
        response = s3_client.list_objects_v2(Bucket=bucket_name)
    except ClientError as e:
        print('bucket ', bucket_name)
        logging.error(e)
        return None
    return response['Contents']