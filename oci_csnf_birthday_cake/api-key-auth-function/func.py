import io
import json
import logging
from datetime import datetime, timedelta

from fdk import response

## to be moved 
LOGGER = logging.getLogger()
LOGGER.setLevel(level=logging.WARNING)
LOGGER.info("Inside Event Logging Function")


def get_function_config(ctx):
    config = dict(ctx.Config())
    # Getting LOG_LEVEL from function config
    try:
        log_level = getattr(logging,config["LOG_LEVEL"].upper(),None)
        if isinstance(log_level, int):
            LOGGER.setLevel(level=log_level)
        else:
            LOGGER.warning("Invalid LOG_LEVEL in function configuration.")    
    except KeyError:
        LOGGER.warning("LOG_LEVEL not defined in function configuration.")
    
    # Getting Authentication Tokens from function config
    global TOKENS
    try:
        LOGGER.info("get_function_config: Tokens are set ")
        raw_tokens = config["TOKENS"]
        TOKENS = raw_tokens.split(",")
        LOGGER.info("get_function_config: I have " + str(len(TOKENS)) + " tokens")

    except:
        LOGGER.info("get_function_config: No tokens provides")
        TOKENS = None

def handler(ctx, data: io.BytesIO = None):
    global LOGGER
    LOGGER = logging.getLogger()
    #LOGGER.setLevel(level=logging.DEBUG)
    LOGGER.info("Inside Authentication Function")
    get_function_config(ctx)

    try:
        data = json.loads(data.getvalue())
    except (Exception, ValueError) as ex:
        LOGGER.info('error parsing json payload: ' + str(ex))

    try:
        LOGGER.debug("Handler: Getting Token ")
        token = data.get("token")
        if token in TOKENS:
            LOGGER.debug("Handler: Token is valid")
            one_hour_from_now = datetime.now() + timedelta(hours=1)
            LOGGER.debug("Handler: expires at is: " + str(one_hour_from_now))

            return response.Response(
                ctx, response_data=json.dumps(
                    {
                    "active": True,
                    "principal": "Developer",
                    "scope": ["onug:decorate"],
                    "clientId": "Developer",
                    "expiresAt": str(one_hour_from_now),
                    "context": {
                        "email": "john.doe@example.com"
                        }}),
                    headers={"Content-Type": "application/json"},
                    code=200)
        else:
            LOGGER.debug("Handler: Unauthenticated Request")
            return response.Response(
                ctx, response_data=json.dumps(
                    {
                    "active": False,
                    "wwwAuthenticate": "Unauthenticated"}),
                    headers={"Content-Type": "application/json"},
                    code=501)
    except (Exception, ValueError) as ex:
        raise Exception("Message not properly formatted." + str(ex))
