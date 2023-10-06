"use strict";

import * as Splunk from './splunk_helpers.js'
import * as Config from './setup_configuration.js'

export async function perform(splunk_js_sdk, setup_options) {
    var app_name = "TA_CSNF";

    var application_name_space = {
        owner: "nobody",
        app: app_name,
        sharing: "app",
    };

    try {
        const service = Config.create_splunk_js_sdk_service(
            splunk_js_sdk,
            application_name_space,
            )
        ;

        let { password, ...properties } = setup_options;

        var storagePasswords = service.storagePasswords();
 
        storagePasswords.create({
            name: "admin", 
            realm: "csnf_realm", 
            password: password}, 
            function(err, storagePassword) {
                if (err) 
                    {console.warn(err);}
                else {
                 console.log(storagePassword.properties());
                 }
           });
      
        
        await Config.complete_setup(service);

        await Config.reload_splunk_app(service, app_name);

        Config.redirect_to_splunk_app_homepage(app_name);
        } catch (error) {

        console.log('Error:', error);
        alert('Error:' + error);
    }
}
