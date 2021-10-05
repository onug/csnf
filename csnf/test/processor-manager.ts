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
import * as sinon from 'sinon';

import ProcessorManager from "../src/lib/dictionaries/processors/processor-manager";
import {InstructionArray} from "../src/lib/dictionaries/instruction";

describe('Testing ProcessorManager', () => {
    it('test instance creation/retrieval', () => {
        const processorManager: ProcessorManager = ProcessorManager.get();
        expect(processorManager).to.be.an('object');
        expect(processorManager instanceof ProcessorManager).to.be.true;

    });

    it('test non-existing processor', ()=>{
        const processorManager: ProcessorManager = ProcessorManager.get();
        const instructionArray: InstructionArray = [{
            "processor":"does-not-exist",
            "command":"blah"
        }];

        const fakeStdout = sinon.fake();
        sinon.replace(process.stdout, 'write', fakeStdout);
        const result = processorManager.executeInstructionArray('',instructionArray);
        sinon.restore();

        expect(fakeStdout.calledOnce);
        expect(fakeStdout.args[0][0]).to.contain('processor does-not-exist not supported');
        expect(result).to.be.null;
    })
});

