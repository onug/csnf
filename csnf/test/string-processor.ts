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

import {StringProcessor} from "../src/lib/dictionaries/processors/string";

describe('Testing StringProcessor', () => {
    const sp = new StringProcessor();

    it('testing to-lower-case', () => {
        const result = sp.process("AABBCCDD", 'to-lower-case', null);
        expect(result).to.be.equal('aabbccdd');
    });

    it('testing to-upper-case', () => {
        const result = sp.process("aabbccdd", 'to-upper-case', null);
        expect(result).to.be.equal('AABBCCDD');
    });

    it('testing split', () => {
        const result = sp.process("aazbbzcczdd", 'split', 'z');
        expect(result).to.be.eql(['aa','bb','cc','dd']);
    });

    it('testing prepend', () => {
        const result = sp.process("aaaa", 'prepend', 'bbbb');
        expect(result).to.be.eql('bbbbaaaa');
    });

    it('testing append', () => {
        const result = sp.process("aaaa", 'append', 'bbbb');
        expect(result).to.be.eql('aaaabbbb');
    });

    it('testing static', () => {
        const result = sp.process("aaaa", 'static', 'bbbb');
        expect(result).to.be.eql('bbbb');
    });

    it('testing regex', () => {
        const result = sp.process("https://a.b/c/d/e", 'regex', '^(?:[^\\/]*.){3}([^.]*)') as unknown[];
        expect(result).to.be.an('array');
        expect(result.length).to.be.greaterThan(1);
        expect(result[1]).to.be.equal('c/d/e');
    });

    it('testing concat', () => {
        const param = [
            [
                {
                    "processor": "string",
                    "command": "static",
                    "param":"part1"
                }
            ],
            [
                {
                    "processor": "string",
                    "command": "static",
                    "param": "part2"
                }
            ]
        ];
        const result = sp.process('aaaa','concat',param);
        expect(result).to.be.equal('part1part2');
    });

    it('testing unrecognized command', () => {
        const fakeStdout = sinon.fake();
        sinon.replace(process.stdout, 'write', fakeStdout);
        const result = sp.process("asd", 'foo', 'a');
        sinon.restore();

        expect(fakeStdout.calledOnce);
        expect(fakeStdout.args[0][0]).to.contain('unrecognized command');
        expect(result).to.be.null;
    });
});

