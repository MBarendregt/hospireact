import boto3
import json
from botocore.exceptions import ClientError

dynamodbclient = boto3.client("dynamodb", region_name="eu-west-1")


def lambda_handler(event, context):
    # TODO implement
    print(event)
    body = json.loads(event["body"])
    updateexpression = "set firstname = :fn, lastname = :ln, tel = :tel, foundus = :foundus, description = :description"

    if body["description"] == "":
        body["description"] = "no questions asked"

    if body["foundus"] == "":
        body["foundus"] = "Nothing filled in"

    expressionattributevalue = {":fn": {"S": body["firstname"].capitalize()},
                                ":ln": {"S": body["lastname"].capitalize()},
                                ":tel": {"S": body["tel"]},
                                ":foundus": {"S": body["foundus"]},
                                ":description": {"S": body["description"]}}
    try:
        dynamodbclient.update_item(TableName="hospita_form",
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
            'Access-Control-Allow-Origin': '*'
        },
        "body": "hello"
    }
    return response
