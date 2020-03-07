import boto3
import json
from botocore.exceptions import ClientError

dynamodbclient = boto3.client("dynamodb", region_name="eu-west-1")


def lambda_handler(event, context):
    # TODO implement
    print(event)
    body = json.loads(event["body"])
    updateexpression = "set firstname = :fn, lastname = :ln, description = :description"

    if body["description"] == "":
        body["description"] = "no questions asked"

    expressionattributevalue = {":fn": {"S": body["firstname"].capitalize()},
                                ":ln": {"S": body["lastname"].capitalize()},
                                ":description": {"S": body["description"]}}
    try:
        dynamodbclient.update_item(TableName="contact_form",
                                   Key={"email_address": {"S": body["email"].lower()}},
                                   UpdateExpression=updateexpression,
                                   ExpressionAttributeValues=expressionattributevalue
                                   )
    except ClientError as e:
        print(f"update failed, error: {e}, event: {body}")

    response = {
        "statusCode": 200,
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Credentials': True,

        },
        "body": "hello"
    }
    return response
