import json
import requests
from activecampaign.client import Client
client = Client("https://hospihousing.api-us1.com",
                "f07bc3ffbf148c33ad7aa04b651d9dd497d558d7238869cc1a4f965c621191697b1c4f0a")


def add_contact(event):

    data = {
        "contact": {
            "email": event["emailaddress"],
            "firstName": event["firstname"],
            "lastName": event["lastname"],
            "phone": event["phone"]
        }
    }
    response = client.contacts.create_or_update_contact(data)
    print(f"Add contact response: {response}")

    url = 'https://hospihousing.api-us1.com/api/3/fieldValues'

    customfield_question = {
        "fieldValue": {
            "contact": response["contact"]["id"],
            "field": 48,
            "value": event["question"]
        }
    }
    question_response = requests.post(url, json=customfield_question, headers={
        "Api-Token": "f07bc3ffbf148c33ad7aa04b651d9dd497d558d7238869cc1a4f965c621191697b1c4f0a"})
    print(f"update CustomField response: {question_response.text}")

    customfield_foundus = {
        "fieldValue": {
            "contact": response["contact"]["id"],
            "field": 49,
            "value": event["foundus"]
        }
    }
    foundus_response = requests.post(url, json=customfield_foundus, headers={
        "Api-Token": "f07bc3ffbf148c33ad7aa04b651d9dd497d558d7238869cc1a4f965c621191697b1c4f0a"})
    print(f"update CustomField response: {foundus_response.text}")

    return response["contact"]["id"]


def update_list_status(contactid):
    """
    Add to master contact list 
    """
    data = {
        "contactList": {
            "list": 1,
            "contact": contactid,
            "status": 1
        }
    }
    response = client.contacts.update_list_status_for_a_contact(data)
    print(f"update list status response: {response}")


def add_tag(contactid):
    """
    Add tag that form was send from contact form
    """
    url = 'https://hospihousing.api-us1.com/api/3/contactTags'
    data = {
        "contactTag": {
            "contact": contactid,
            "tag": 1
        }
    }
    x = requests.post(url, json=data, headers={
                      "Api-Token": "f07bc3ffbf148c33ad7aa04b651d9dd497d558d7238869cc1a4f965c621191697b1c4f0a"})

    print(f"update tag response: {x.text}")


def lambda_handler(event, context):
    print(event)
    contactid = add_contact(event)
    update_list_status(contactid)
    add_tag(contactid)

    return {
        'statusCode': 200,
        'body': json.dumps('Upload done')
    }
