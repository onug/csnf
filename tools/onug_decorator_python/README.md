# ONUG CSNF Python3 Library
## <a name="overview"></a>ONUG CSNF Python3 Library

To help customers adopt CSNF CDM we are providing a small python3 library that can use a provider JSON as created by the mapping script to convert a provider finding into CSNF finding.

The [onug.py](./onug_decorator_python/onug.py) is a sample library which can use be used to convert a finding into a CSNF finding based on a provider input and a finding.  Below is some sample code to test:

    
1. Import required libraries
    
    ```
    import re # used for regex parsing of finding
    import logging # used for logging default is WARNING
    from onug import Onug # onug library
    ```
    
2. URL for the provider JSON file
    
    ```
    # URL for your provider JSON
    # Below is the public one
    provider_json = '' 
    ```
    
3. Create a finding.  Your own or a one in the [sample_findings/](./sample_findings/) directory:

    ```
    sample_finding = {
    "eventType" : "com.oraclecloud.cloudguard.problemdetected",
    "cloudEventsVersion" : "0.1",
    "eventTypeVersion" : "2.0",
    "source" : "CloudGuardResponderEngine",
    "eventTime" : "2021-08-28T16:37:59Z",
    "contentType" : "application/json",
    "data" : {
      "compartmentId" : "ocid1.compartment.oc1..1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e",
      "compartmentName" : "Comp-Name",
      "resourceName" : "Bucket is public",
      "resourceId" : "ocid1.cloudguardproblem.oc1.iad.1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e",
      "additionalDetails" : {
        "tenantId" : "ocid1.tenancy.oc1..1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e",
        "status" : "OPEN",
        "reason" : "New Problem detected by CloudGuard",
        "problemName" : "BUCKET_IS_PUBLIC",
        "riskLevel" : "CRITICAL",
        "problemType" : "CONFIG_CHANGE",
        "resourceName" : "Bucket",
        "resourceId" : "tenancy/Bucket",
        "resourceType" : "Bucket",
        "targetId" : "ocid1.cloudguardtarget.oc1.iad.1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e",
        "labels" : "CIS_OCI_V1.1_OBJECTSTORAGE, ObjectStorage",
        "firstDetected" : "2021-08-28T16:37:36.945Z",
        "lastDetected" : "2021-08-28T16:37:36.945Z",
        "region" : "us-phoenix-1",
        "problemDescription" : "Object Storage supports anonymous, unauthenticated access to a bucket. A public bucket that has read access enabled for anonymous users allows anyone to obtain object metadata, download bucket objects, and optionally list bucket contents.",
        "problemRecommendation" : "Ensure that the bucket is sanctioned for public access, and if not, direct the OCI administrator to restrict the bucket policy to allow only specific users access to the resources required to accomplish their job functions."
      }
    },
    "eventID" : "1642b454-eeee-aaaa-aaa-783803f83134",
    "extensions" : {
      "compartmentId" : "ocid1.compartment.oc1..1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e1q2w3e"
    }
   }
   ```

4. Create the Onug class and get the transformed finding:
   ```
   my_onug = Onug(provider_json, finding)
   my_onug.get_finding()
   ```


