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

import 'mocha';
import {expect} from 'chai';

import LogUtil from "../src/lib/utils/log-util";

describe('Testing LogUtl', () => {

    it('testing log4js api', () => {
        const logger = LogUtil.getLogger('test-logger');
        expect(logger).to.be.an('object');
        expect(logger).to.have.a.property('trace');
        expect(logger).to.have.a.property('debug');
        expect(logger).to.have.a.property('info');
        expect(logger).to.have.a.property('warn');
        expect(logger).to.have.a.property('error');
        expect(logger).to.have.a.property('fatal');
        expect(logger.trace).to.be.a('function');
        expect(logger.debug).to.be.a('function');
        expect(logger.info).to.be.a('function');
        expect(logger.warn).to.be.a('function');
        expect(logger.error).to.be.a('function');
        expect(logger.fatal).to.be.a('function');
    });


});

