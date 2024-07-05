import json
import boto3

def lambda_handler(event, context):
    rekognition_client = boto3.client('rekognition')
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']
    
    response = rekognition_client.detect_labels(
        Image={'S3Object': {'Bucket': bucket, 'Name': key}},
        MaxLabels=10
    )
    
    labels = response['Labels']
    
    return {
        'statusCode': 200,
        'body': json.dumps(labels)
    }
