import boto3
import json
from botocore.exceptions import ClientError

dynamodbclient = boto3.client("dynamodb", region_name="eu-west-1")
lambda_client = boto3.client("lambda", region_name="eu-west-1")


def invoke_AC_lambda(payload):
    try:
        lambda_client.invoke(
            FunctionName='arn:aws:lambda:eu-west-1:727560996235:function:post_hospita_AC',
            InvocationType='Event',
            Payload=payload
        )
    except ClientError as e:
        print(e)


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
                                   Key={"email_address": {
                                       "S": body["email"].lower()}},
                                   UpdateExpression=updateexpression,
                                   ExpressionAttributeValues=expressionattributevalue
                                   )
    except ClientError as e:
        print(f"update failed, error: {e}, event: {body}")

    payload_to_ac = json.dumps({
        "emailaddress": body["email"].lower(),
        "firstname": body["firstname"].capitalize(),
        "lastname": body["lastname"].capitalize(),
        "phone": body["tel"],
        "foundus": body["foundus"].capitalize(),
        "description": body["description"]
    })
    invoke_AC_lambda(payload_to_ac)

    response = {
        "statusCode": 200,
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://hospihousing.nl'
        },
        "body": "hello"
    }
    return response
