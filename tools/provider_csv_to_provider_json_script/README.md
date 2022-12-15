
# Provider CSV to JSON Mapping Conversion Script
## <a name="overview"></a> Overview
Once the providers alerts are mapped to the CDM converting those alert mapping to a more programmatically format is helpful. To accelerate this process we created a Python script [provider-csv-to-provider-json.py](./provider-csv-to-provider-json.py) that takes a [provider CSV](../provider_csv/provider.csv) and converts it into a JSON. Here is the sample mapping in JSON. The JSON file representing the above mapping can be found here: [sample_provider_output.json](./sample_provider_output.json).


## <a name="mapping_script_usage"></a> Mapping Script Usage

1. Download the script:
    ```
    % git clone https://github.com/onug/CSNF.git
    ```
    change to directory with the script
    ```
    % cd CSNF/tools/provider-csv-to-provider-json-script/
    ```
    or 
    ```
    % wget https://github.com/onug/CSNF/tree/main/tools/provider-csv-to-provider-json-script/provider-csv-to-provider-json.py
    ```

2. Execute the script
    ```
    % python3 provider-csv-to-provider-json.py -i sample_provider_input.csv -o sample_provider_output.json
    Input file is: sample_provider_input.csv
    Output file is: sample_provider_output.json
    ```

* Options
```
% python3 provider-csv-to-provider-json.py -h                                                         
usage: provider-csv-to-provider-json.py [-h] [-i INPUT_CSV] [-o OUTPUT_JSON]

options:
  -h, --help      show this help message and exit
  -i INPUT_CSV    Input CSV File
  -o OUTPUT_JSON  JSON Output prefix
```
