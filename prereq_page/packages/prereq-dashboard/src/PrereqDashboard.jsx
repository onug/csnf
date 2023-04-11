import React, { useState, useEffect } from 'react';
import Button from '@splunk/react-ui/Button';
import Heading from '@splunk/react-ui/Heading';
import List from '@splunk/react-ui/List';
import Link from '@splunk/react-ui/Link';
import Table from '@splunk/react-ui/Table';
import ExportTable from './ExportTable.jsx';
import { defaultFetchInit, handleError, handleResponse } from '@splunk/splunk-utils/fetch';
import Markdown from '@splunk/react-ui/Markdown';

// import { defaultFetchInit, handleResponse, handleError } from '@splunk/splunk-utils/fetch';

const appsEndpoint = '/en-US/splunkd/__raw/servicesNS/nobody/system/apps/local/'; // this is the endpoint that will get us in the apps list

async function getApps() {
    // this function will fetch a list of apps from the apps endpoint

    const fetchInit = defaultFetchInit; // from splunk-utils API
    fetchInit.method = 'GET';
    const n = await fetch(`${appsEndpoint}?output_mode=json&count=100`, {
        ...fetchInit,
    }).then(handleResponse(200));

    return n;
}

async function updateAppConf() {
    // function to update app.conf is_configured property to true when password is successfully added

    const fetchInit = defaultFetchInit; // from splunk-utils API
    fetchInit.method = 'POST';
    const n = await fetch(`${appsEndpoint}/ta-csnf`, {
        ...fetchInit,
        body: 'configured=true', // update the configured property
    });

    return n;
}

const DependencyCheck = () => {
    // create state variables using state hooks
    const [appsList, setAppsList] = useState([]);
    const [dependencyApps, setDependencyApps] = useState([{'Present': 0, 'App': 'Splunk_TA_aws'}, {'Present':0, 'App': 'splunk_app_oci'}, {'Present':0, 'App': 'Splunk_TA_MS_Security'}]);

    // the app we want to check against
    let dependency = ['Splunk_TA_aws', 'splunk_app_oci', 'Splunk_TA_MS_Security']
    
    useEffect(() => {
        // get our app data from the getApps function after rendering for the first time
        getApps().then((r) => {
            const list = r.entry.map((entry) => entry.name);
            setAppsList(list);
            
        });
    }, []); // useEffect only runs once due to the empty array

    let valuesList = [];
    const checkDependency = () => {
        // this function checks whether or not our dependency is in our apps list, if so then update app.conf to complete setup and reload the app
        
        for (let appItem=0; appItem < dependency.length; appItem++){
            if (appsList.includes(dependency[appItem])) {
                
                valuesList.push({'Present':1, 'App': dependency[appItem]})
                if (appItem == dependency.length-1){
                    const present = valuesList.map(({ Present }) => Present)
                    const allPresent = present.every(item => item === 1);
                    if (allPresent){
                        console.log("successful")
                        updateAppConf().then((r) => {
                            if (r.status >= 200 && r.status <= 299) {
                                // if app.conf is successfully updated, then reload the page
                                window.location.href = '/en-US/app/ta-csnf/csnf_home';
                            }
                        })
                    } 
                    else {
                        console.log("Not setup yet")
                    }
                }

            } else {
                
                valuesList.push({'Present':0, 'App': dependency[appItem]})
                console.log('error');
            }
        }

        setDependencyApps(valuesList)
        
    };

    
    return (
        // create the UI for the Setup Page
        <>
            <div>
                <div>
                    <Heading level={1}>TA-CSNF Setup Page</Heading>
                    <ExportTable dependencyApps={dependencyApps}></ExportTable>

                    <div className="left">
                        <Heading level={2}>Summary</Heading>
                        Use the Splunk Add-on for CSNF to ingest security events normalized to the Cloud Security Notification Framework (CSNF). 
                        The Splunk CSNF Add-on offers support for multiple Cloud providers and integrates with your existing Splunk security landing zone to deliver powerful security searches, dashboards and analytics, 
                        allowing you to secure your multi-Cloud security practice in minutes.

                        
                        <Heading level={2}>Features</Heading>
                        <List>
                            <List.Item>
                                Mappings for AWS GuardDuty, Microsoft Security Center and Oracle Cloudguard security events. GCP SCC event integration is coming soon.
                            </List.Item>
                            <List.Item>
                                With a single click, implement multi-cloud security searches into Splunk Enterprise or Enterprise Security
                            </List.Item>
                            <List.Item>
                                Filter to identify all security types by threat categories, keywords, sourcetypes, or kill chain phases
                            </List.Item>
                            <List.Item>
                                CSNF advanced data model management to simplify administration
                            </List.Item>
                        </List>


                        <Heading level={2}>Installation:</Heading>
                        <Markdown
                            text={
                                "1. Download the app. \n 2. Log in to your Splunk instance. \n  3. Click the 'Manage Apps' gear icon located above your installed apps. \n 4. Click 'Install app from file'. \n 5. Click the 'Browse' button and select the CSNF App install file that you downloaded. \n 6. If you already have the CSNF App installed, check the 'Upgrade app' button. Otherwise, leave this unchecked. \n 7. Click the 'Upload' button. \n 8. You will be required to restart Splunk. Once Splunk has been restarted you may enjoy your new app!"
                            }
                        />


                        <Heading level={2}>Application Dependencies:</Heading>
                        At least one of the following are required:
                        <List>
                            <List.Item>
                            <Link to="https://splunkbase.splunk.com/app/1876">
                                Splunk Add-on for Amazon Web Services
                            </Link>
                            </List.Item>
                            <List.Item>
                            <Link to="https://splunkbase.splunk.com/app/6207">
                                Splunk Add-on for Microsoft Security
                            </Link>
                            </List.Item>
                            <List.Item>
                            <Link to="https://splunkbase.splunk.com/app/5289">
                                OCI (Oracle Cloud Infrastructure) App for Splunk
                            </Link>
                            </List.Item>
                           
                        </List>
                        
                        {/* <Markdown text={`
                                - [Splunk Add-on for Amazon Web Services](https://splunkbase.splunk.com/app/1876)
                                - [Splunk Add-on for Microsoft Azure](https://splunkbase.splunk.com/app/3757)
                                - [OCI (Oracle Cloud Infrastructure) App for Splunk](https://splunkbase.splunk.com/app/5289)
                
                            `}/> */}
                        
                        <Heading level={2}>Flow Diagram:</Heading>
                        Below Flow Diagram provides a pictorial representation of the data flow that takes place from GuardDuty to Splunk. It will help you to provide a concrete understanding during the configuration of the CSNF Splunk App.
                        <br />
                        <br />
                        <img src='/static/app/ta-csnf/images/csnf_flow_diagram.png' alt='csnf flow diagram'/>
                        <br />
                        <br />
                        <div>
                            <Button
                                type="submit"
                                label="Perform Setup Check"
                                name="setup_button"
                                onClick={checkDependency} // complete setup by running the password click function
                            />
                        </div>
                        <br />
                        
                        <div className="error output" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DependencyCheck;
