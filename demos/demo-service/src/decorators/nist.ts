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

import * as log4js from "log4js";
import {Decorator, BaseDecorator, CsnfEvent} from "onug-csnf";

const logger = log4js.getLogger('nist-decorator');
logger.level = process.env.LOG_LEVEL || 'info';

export default class NistDecorator extends BaseDecorator implements Decorator {
    constructor() {
        super('nist');
    }

    async getEventDecoration(csnfEvent: CsnfEvent) {
        logger.trace('> getEventDecoration');
        logger.trace('< getEventDecoration');
        return {
            family: {
                id: 'SI',
                name: 'SYSTEM AND INFORMATION INTEGRITY',
                url: 'https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/control?version=5.1&number=SI-4'
            },
            control: {
                id: 'SI-4',
                name: 'SYSTEM MONITORING',
                url: 'https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/control?version=5.1&number=SI-4',
                baseline: {
                    low: true,
                    moderate: true,
                    high: true
                }
            }
        };
    }
}

