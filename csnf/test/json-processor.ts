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

import {JsonProcessor} from '../src/lib/dictionaries/processors/json'

describe('Testing JsonProcessor', () => {

    const testObj = {a: 1, b: 2, c: [1, 2, 3], d: {e: 5}};
    const jp = new JsonProcessor();

    it('testing stringify', () => {
        const result = jp.process(testObj, 'stringify');
        expect(result).to.be.equal(JSON.stringify(testObj));
    });
    it('testing parse', () => {
        const result = jp.process(JSON.stringify(testObj), 'parse');
        expect(result).to.be.eql(testObj);
    });

    it('testing unrecognized command', () => {
        const fakeStdout = sinon.fake();
        sinon.replace(process.stdout, 'write', fakeStdout);
        const result = jp.process([1, 2, 3, 4], 'foo');
        sinon.restore();

        expect(fakeStdout.calledOnce);
        expect(fakeStdout.args[0][0]).to.contain('unrecognized command');
        expect(result).to.be.null;
    });

});

