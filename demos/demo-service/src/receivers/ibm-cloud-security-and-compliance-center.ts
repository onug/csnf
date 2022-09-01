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

import * as jwt from 'jsonwebtoken';
import BaseReceiver from "./base-receiver";
import {Csnf} from "onug-csnf";
import {DispatcherManager, Dispatchers} from "../dispatchers";

const DICTIONARY_NAME = 'ibm-cloud-security-and-compliance-center';
const DISPATCHERS = [Dispatchers.DEBUG, Dispatchers.AZURE_SENTINEL, Dispatchers.AZURE_MONITOR, Dispatchers.SPLUNK, Dispatchers.QRADAR, Dispatchers.KAFKA];

export default class IBMSecurityAndComplianceCenterReceiver extends BaseReceiver {
    constructor(csnf: Csnf, dispatcherManager: DispatcherManager) {
        super(csnf, dispatcherManager, DICTIONARY_NAME, DISPATCHERS);
    }

    protected extractEvent(req): any {
        this.logger.trace('> extractEvent');
        const encodedOriginalEvent = super.extractEvent(req);
        const decodedOriginalEvent = jwt.decode(encodedOriginalEvent.data);
        this.logger.trace('< extractEvent');
        return decodedOriginalEvent;
    }
}

