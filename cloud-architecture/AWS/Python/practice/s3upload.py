import boto3

s3_client = boto3.client("s3")
BUCKET_NAME = 'combined-output-manifest'
PREFIX = 'sub-folder/'
s3_resource = boto3.resource("s3")
s3_resource.Object(BUCKET_NAME, PREFIX + 'combined-manifest').put(Body="this is test")


def write_final_output_tos3(bucket_name, prefix, data):
    s3_resource.Object(bucket_name, prefix + 'combined-output-manifest').put(Body=data)

write_final_output_tos3(BUCKET_NAME, 'job-2/', '{"test": "Hello World"}')