import requests
import os

splunk_secret = os.environ.get("splunk_secret")
splunk_get_token_url = "https://api.splunk.com/2.0/rest/login/splunk"
splunk_validate_app_url = "https://appinspect.splunk.com/v1/app/validate"
ta_csnf = './ta-csnf.tar.gz'

basic_auth = f'Basic {splunk_secret}'
# print(auth)
# exit(0)
auth_payload = {}
auth_headers = {
  'Authorization': basic_auth
}

try:
    response_json = requests.request("GET", splunk_get_token_url, headers=auth_headers, data=auth_payload).json()
    if response_json['status_code'] == 200:
        auth_token = response_json['data']['token']
    else:
        print("Authentication Failed " + str(response_json))
        raise
except Exception as e:
    print("Failed to Authenticate to Splunk /n " + str(e) )
    raise

validate_payload = {}
token_auth = f'bearer: {auth_token}'
files=[
('app_package',('ta-csnf.tar.gz',open('./ta-csnf.tar.gz','rb'),'application/octet-stream'))]
validate_headers = {
  'Authorization': token_auth
}

try: 
    response_json = requests.request("POST", splunk_validate_app_url, headers=validate_headers, data=validate_payload, files=files, verify=False).json()
    if response_json['status_code'] == 200:
        auth_token = response_json['data']['token']

except Exception as e:
    print("Failed to Submit App for validation " + str(e) )
    raise