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

import {ArrayProcessor} from '../src/lib/dictionaries/processors/array';

describe('Testing ArrayProcessor', () => {
    const ap = new ArrayProcessor();

    it('testing element-at-index', () => {
        const result = ap.process([1, 2, 3, 4], 'element-at-index', 2);
        expect(result).to.be.equal(3);
    });

    it('testing join', () => {
        const result = ap.process([1, 2, 3, 4], 'join', 'a');
        expect(result).to.be.equal('1a2a3a4');
    });

    it('testing unrecognized command', () => {
        const fakeStdout = sinon.fake();
        sinon.replace(process.stdout,'write', fakeStdout);
        const result = ap.process([1, 2, 3, 4], 'foo', 'a');
        sinon.restore();

        expect(fakeStdout.calledOnce);
        expect(fakeStdout.args[0][0]).to.contain('unrecognized command');
        expect(result).to.be.null;
    });
});

