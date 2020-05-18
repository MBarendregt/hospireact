import json
import requests
import datetime
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
    return response["contact"]["id"]


def check_gender(gendervalue):
    if gendervalue.capitalize() == "Male":
        gender = "Man"
    elif gendervalue.capitalize() == "Female":
        gender = "Vrouw"
    else:
        gender = " Zeg ik liever niet"
    return gender


def create_customfield_payload(event, contact_id):
    url = 'https://hospihousing.api-us1.com/api/3/fieldValues'
    customfield_dict = {
        "dateofbirth": 1,
        "dateofarrival": 2,
        "dateofdeparture": 3,
        "countryofbirth": 5,
        "study": 51,
        "languages": 52,
        "maxbudget": 53,
        "description": 54,
        "whichcity": 50,
        "gender": 7
    }

    for customfield in event["custom_fields"]:
        for key in customfield.copy():
            for customdict_key, customdict_value in customfield_dict.items():
                if customdict_key == key:

                    if "date" in key:
                        customfield[key] = datetime.datetime.strptime(
                            customfield[key], "%Y-%m-%d").strftime("%d/%m/%Y")

                    if "gender" in key:
                        if customfield[key] == "male":
                            customfield[key] = "Man"
                        elif customfield[key] == "female":
                            customfield[key] = "Vrouw"
                        else:
                            customfield[key] = "Zeg ik liever niet"

                    customfield["fieldvalue"] = customdict_value
                    payload = {
                        "fieldValue": {
                            "contact": contact_id,
                            "field": customdict_value,
                            "value": customfield[key]
                        }
                    }
                    print(payload)

                    try:
                        y = requests.post(url, json=payload, headers={
                            "Api-Token": "f07bc3ffbf148c33ad7aa04b651d9dd497d558d7238869cc1a4f965c621191697b1c4f0a"})
                        print(f"update CustomField response: {y.text}")
                    except Exception as e:
                        print(e)


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
            "tag": 3
        }
    }
    x = requests.post(url, json=data, headers={
                      "Api-Token": "f07bc3ffbf148c33ad7aa04b651d9dd497d558d7238869cc1a4f965c621191697b1c4f0a"})

    print(f"update tag response: {x.text}")


def lambda_handler(event, context):
    # TODO implement
    print(type(event))
    print(event)
    contactid = add_contact(event)
    create_customfield_payload(event, contactid)

    update_list_status(contactid)
    add_tag(contactid)

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
