/**
 * (C) Copyright IBM Corp. 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as express from 'express';
import * as log4js from 'log4js';
import {Csnf} from 'onug-csnf';

import DockerhubDecorator from "./decorators/dockerhub";
import DispatcherManager from "./dispatchers";
import {
    SysdigSecureReceiver,
    AquasecReceiver,
    IBMCloudSecurityAndComplianceCenterReceiver,
    AzureDefenderReceiver,
    OracleCloudGuardReceiver
} from "./receivers";

const logger = log4js.getLogger('server');
logger.level = process.env.LOG_LEVEL || 'info';

class ServerApp {
    async start() {
        logger.trace('> start');

        // Create app server
        const server = express();
        server.use(express.json());

        // Initialize CSNF SDK
        const csnf = new Csnf();

        // Register a set of dictionaries
        csnf.registerDictionary('./dictionaries/sysdig-secure.json');
        csnf.registerDictionary('./dictionaries/aquasec.json');
        csnf.registerDictionary('./dictionaries/ibm-scc.json');
        csnf.registerDictionary('./dictionaries/azure-defender.json');
        csnf.registerDictionary('./dictionaries/oracle-cloud-guard.json');

        // Register a set of decorators
        // csnf.registerDecorator(new DockerhubDecorator());

        // Add receivers
        const dispatcherManager = new DispatcherManager();
        server.use('/receivers/sysdig-secure', new SysdigSecureReceiver(csnf, dispatcherManager).router);
        server.use('/receivers/aquasec', new AquasecReceiver(csnf, dispatcherManager).router);
        server.use('/receivers/ibm-scc', new IBMCloudSecurityAndComplianceCenterReceiver(csnf, dispatcherManager).router);
        server.use('/receivers/azure-defender', new AzureDefenderReceiver(csnf, dispatcherManager).router);
        server.use('/receivers/oracle-cloud-guard', new OracleCloudGuardReceiver(csnf, dispatcherManager).router);

        server.use((req, res) => {
            res.status(404).send('not found');
        });

        const protocol = process.env.SERVER_PROTOCOL || 'http';
        const domain = process.env.SERVER_DOMAIN || 'localhost';
        const port = process.env.SERVER_PORT || 3000;

        server.listen(port, () => {
            logger.info(`listening on ${protocol}://${domain}:${port}`);
        });
        logger.trace('< start');
    }
}

new ServerApp().start();
