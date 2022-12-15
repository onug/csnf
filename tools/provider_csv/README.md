
# Provider Mapping Spreadsheet
## <a name="provider_csv"></a>Overview
A spreadsheet(CSV) is a useful tool for mapping Cloud Service Providers (CSPs) or security provider alerts to the ONUG CSF format.  To accelerate mapping activities we created the below spreadsheet template and include example mapping of OCI, Azure, and AWS alerts into the ONUG CSNF. 

- Provider CSV File: [provider.csv](./provider.csv).

## <a name="columns_descriptions"></a>Columns Meaning
- **Provider** - the name of the provider the record ex. Oracle Cloud Infrastructure, Azure, IBM, Amazon Web Services, etc. 
- **Provider Type** - the type company providing the record ex. CSP, CSPM, etc
- **Provider ID** - Provider Unique Identifier
- **Source** - the product name providing the record ex. Cloud Guard, Defender
- **Source ID** - Source Unique Identifier
- **Alert Id** - the unique identifier for a field in an alert.  
    - `__default__` is for fields that are same across alerts for a specific source. 
    - For alert specific fields you must use the unique identifier for the alert ex.  BUCKET_IS_PUBLIC 
        - *Demo code only supports OCI Cloud Guard specific alert fields*   
- **Source Regex Identifier** - regex expression to that can be used for programmatic parsing of events.  Sample code in python use 
- **CSNF Dictionary** - the CSNF conical mapping in dot notated field ex. event.guid
- **Path** - the source dot notated location of the field in an alert ex:
    - OCI Cloud Guard: `data.resourceId`
    - Azure Defender:  `properties.subscriptionId`
    - AWS GuardDuty: `AccountId`
- **Static Value** -  override for record.  Can be used for demos or obfuscating sensitive data.
- **Entity Type** - data type of the field being mapped ex. datetime, string, integer 
    - *This feature is currently not used by the demo code*


## <a name="sample_mapping"></a> Provider Mapping Example
| **Provider**                | **Provider Type** | **Provider ID** | **Source**  | **Source ID** | **Source Regex Identifier**         | **alertId**            | **CSNF Dictionary**    | **path**                                              | **staticValue** | **entityType** |
|-----------------------------|-------------------|-----------------|-------------|---------------|-------------------------------------|------------------------|------------------------|-------------------------------------------------------|-----------------|----------------|
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | provider.accountId     | data.additionalDetails.tenantId                       | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | event.guid             | data.resourceId                                       | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | event.name             | data.additionalDetails.problemName                    | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | event.shortDescription | data.additionalDetails.problemDescription             | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | event.startTime        | data.additionalDetails.firstDetected                  | datetime        |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | event.severity         | data.additionalDetails.riskLevel                      | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | event.status           | data.additionalDetails.status                         | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | resource.identifier    | data.additionalDetails.resourceId                     | orclResourceId  |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | resource.type          | data.additionalDetails.resourceType                   | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | resource.name          | data.additionalDetails.resourceName                   | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | resource.region        | data.additionalDetails.region                         | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | __default__            | resource.zone          | data.compartmentName                                  | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | BUCKET_IS_PUBLIC       | event.recommendation   | data.additionalDetails.problemRecommendation          | string          |                |
| Oracle Cloud Infrastructure | CSP               | 1               | Cloud Guard | 1             | ocid[0-9].cloudguardproblem.oc[0-9] | SUSPICIOUS_IP_ACTIVITY | event.geolocation.ipv4 | data.additionalDetails.impactedResourceId             |                 |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | provider.accountId     | properties.subscriptionId                             | string          |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | event.guid             | id                                                    | string          |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | event.name             | properties.alertName                                  | string          |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | event.shortDescription | properties.alertDisplayName                           | string          |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | event.longDescription  | properties.description                                | string          |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | event.startTime        | properties.detectedTimeUtc                            | string          |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | event.status           | properties.state                                      | string          |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | resource.identifier    | properties.associatedResource                         | string          |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | resource.type          | properties.extendedProperties.resourceType            | string          |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | event.geolocation.ipv4 | properties.extendedProperties.client IP address       |                 |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | event.actor            | properties.extendedProperties.client principal name   |                 |                |
| Azure                       | CSP               | 2               | Defender    | 1             | Microsoft.Security/                 | __default__            | event.severity         | properties.reportedSeverity                           |                 |                |
| Amazon Web Services         | CSP               | 4               | GuardDuty   | 1             | arn:aws:guardduty                   | __default__            | provider.accountId     | accountId                                             | string          |                |
| Amazon Web Services         | CSP               | 4               | GuardDuty   | 1             | arn:aws:guardduty                   | __default__            | event.guid             | Arn                                                   | string          |                |
| Amazon Web Services         | CSP               | 4               | GuardDuty   | 1             | arn:aws:guardduty                   | __default__            | provider.accountId     | AccountId                                             | string          |                |
| Amazon Web Services         | CSP               | 4               | GuardDuty   | 1             | arn:aws:guardduty                   | __default__            | event.actor            | Resource.AccessKeyDetails.GeneratedFindingUserName    | string          |                |
| Amazon Web Services         | CSP               | 4               | GuardDuty   | 1             | arn:aws:guardduty                   | __default__            | event.startTime        | CreatedAt                                             |                 |                |
| Amazon Web Services         | CSP               | 4               | GuardDuty   | 1             | arn:aws:guardduty                   | __default__            | resource.identifier    | Resource.AccessKeyDetails.GeneratedFindingPrincipalId |                 |                |
| Amazon Web Services         | CSP               | 4               | GuardDuty   | 1             | arn:aws:guardduty                   | __default__            | event.shortDescription | Description                                           |                 |                |
| Amazon Web Services         | CSP               | 4               | GuardDuty   | 1             | arn:aws:guardduty                   | __default__            | event.name             | Title                                                 |                 |                |



