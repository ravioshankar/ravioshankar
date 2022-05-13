import boto3

s3_client = boto3.client('s3')
# Example using resource
# s3 = boto3.resource('s3')
# bucket = s3.Bucket('output-manifest')

# for obj in bucket.objects.all():
#     key = obj.key
#     body = obj.get()['Body'].read()
#     print("Key - ", body)

# using client

bucket = 'output-manifest'
result = s3_client.list_objects(Bucket=bucket)

for o in result.get('Contents'):
    data = s3_client.get_object(Bucket=bucket, Key=o.get('Key'))
    contents = data['Body'].read()
    print(o.get('Key'), contents.decode("utf-8"))


