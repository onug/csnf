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

import {JsonpathProcessor} from '../src/lib/dictionaries/processors/jsonpath'

describe('Testing JsonPathProcessor', () => {

    const testObj = {a: 1, b: 2, c: [1, 2, 3], d: {e: 5}};
    const jp = new JsonpathProcessor();

    it('testing jsonpath', () => {
        const result1 = jp.process(testObj, '$.a');
        const result2 = jp.process(testObj, '$.c');
        const result3 = jp.process(testObj, '$.c[1]');
        const result4 = jp.process(testObj, '$.d.e');

        expect(result1).to.be.equal(1);
        expect(result2).to.be.eql([1,2,3]);
        expect(result3).to.be.equal(2);
        expect(result4).to.be.equal(5);
    });
});

