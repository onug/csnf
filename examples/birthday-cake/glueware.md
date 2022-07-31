# Gluware README

**Use cases for Autonomic Security Response**:



**Case 1 - High Value Asset with Autonomic Response authorized**

Perform network reconfiguration. No approval necessary.

**Case 2 - High Value Asset with Autonomic Response not authorized without business approval (not part of demo)**

Perform network configuration. Requires business  approval.

**Case 3 - Not a High Value Asset,  Autonomic Response unnecessary.**

Network configuration not required since this is not a high value asset.



**Specification**



**Gluware Headers**

gluware-autonomic response = 1 (True) or 0 (False)

gluware-asset-guid = GUID reference to asset

**CSNF Body**

```
[
  {Sentinel Incident ID},
  {Enterprise Application Name},
  {Impact},
  {Risk},
  {AssetOwner},
  {allowAutonomicResponse},
  {hostid}
]
```

**Case 1** Example HTTP POST to Gluware (perform action with Gluware)



```
Custom Headers:

gluware-autonomic-response	1
gluware-asset-guid	b60b95e8-e229-4398-b3bf-25d1fe51b4f0

Body:

[{102},{Customer Facing Reimbursement Application},{HIGH},{High},{Enterprise},{1},{b60b95e8-e229-4398-b3bf-25d1fe51b4f0}]
```



**Case 2:** Not needed for Demo

**Case 3** Example HTTP POST to Gluware (no response required)



```
Custom Headers:

gluware-autonomic-response	0
gluware-asset-guid	13bd0cd2-76b8-4a7d-8034-2dbd3e82130a

Body:

[{101},{Facilities SaaS Application Space Planning},{MEDIUM},{Medium},{Corporate Services},{0},{13bd0cd2-76b8-4a7d-8034-2dbd3e82130a}]
```

