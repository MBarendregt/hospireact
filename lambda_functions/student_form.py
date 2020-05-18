import boto3
import json
from botocore.exceptions import ClientError

dynamodbclient = boto3.client("dynamodb", region_name="eu-west-1")
lambda_client = boto3.client("lambda", region_name="eu-west-1")


def invoke_AC_lambda(payload):
    try:
        lambda_client.invoke(
            FunctionName='arn:aws:lambda:eu-west-1:727560996235:function:post_student_AC',
            InvocationType='Event',
            Payload=payload
        )
    except ClientError as e:
        print(e)


def check_gender(gendervalue):
    if gendervalue.capitalize() == "Male":
        gender = "Man"
    elif gendervalue.capitalize() == "Female":
        gender = "Vrouw"
    else:
        gender = " Zeg ik liever niet"
    return gender


def lambda_handler(event, context):
    # TODO implement
    print(event)
    body = json.loads(event["body"])

    updateexpression = """set firstname = :fn, lastname = :ln, tel = :tel,
                        gender = :gender, dateofbirth = :dateofbirth, dateofarrival = :dateofarrival,
                        dateofdeparture = :dateofdeparture, study = :study, languages = :languages,
                        maxbudget = :maxbudget, countryofbirth = :countryofbirth, filename = :filename, whichcity = :whichcity, description = :description"""

    if body["description"] == "":
        body["description"] = "no description given"

    expressionattributevalue = {":fn": {"S": body["firstname"].capitalize()},
                                ":ln": {"S": body["lastname"].capitalize()},
                                ":tel": {"S": body["tel"]},
                                ":gender": {"S": body["gender"]},
                                ":dateofbirth": {"S": body["dateofbirth"]},
                                ":dateofarrival": {"S": body["dateofarrival"]},
                                ":dateofdeparture": {"S": body["dateofdeparture"]},
                                ":study": {"S": body["study"].capitalize()},
                                ":languages": {"S": body["languages"]},
                                ":maxbudget": {"S": body["maxbudget"]},
                                ":countryofbirth": {"S": body["countryofbirth"]},
                                ":filename": {"S": body["filename"]},
                                ":whichcity": {"S": body["whichcity"]},
                                ":description": {"S": body["description"]}}
    try:
        dynamodbclient.update_item(TableName="student_form",
                                   Key={"email_address": {
                                       "S": body["email"].lower()}},
                                   UpdateExpression=updateexpression,
                                   ExpressionAttributeValues=expressionattributevalue
                                   )
    except ClientError as e:
        print(f"update failed, error: {e}, event: {body}")

    gendervalue = check_gender(body["gender"])
    payload_to_ac = json.dumps({
        "emailaddress": body["email"].lower(),
        "firstname": body["firstname"].capitalize(),
        "lastname": body["lastname"].capitalize(),
        "phone": body["tel"],
        "custom_fields": [
            {"gender": gendervalue},
            {"dateofbirth": body["dateofbirth"]},
            {"dateofarrival": body["dateofarrival"]},
            {"dateofdeparture": body["dateofdeparture"]},
            {"study": body["study"].capitalize()},
            {"languages": body["languages"]},
            {"maxbudget": body["maxbudget"]},
            {"whichcity": body["whichcity"].capitalize()},
            {"countryofbirth": body["countryofbirth"].capitalize()},
            {"description": body["description"]}
        ]
    })
    invoke_AC_lambda(payload_to_ac)

    response = {
        "statusCode": 200,
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        "body": "hello"
    }

    return response
