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

import * as log4js from 'log4js';
import * as express from 'express';

import {Csnf, CsnfEvent} from 'onug-csnf';

import {DispatcherManager, Dispatchers} from "../dispatchers";
import {Logger} from "log4js";

export default abstract class BaseReceiver {
    protected dictionaryName: string;
    protected csnf: Csnf;
    protected dispatcherManager: DispatcherManager;
    protected dispatchers: Dispatchers[] = [];
    protected logger: Logger;
    router: express.Router;

    protected constructor(csnf: Csnf, dispatcherManager: DispatcherManager, dictionaryName: string, dispatchers: Dispatchers[] = []) {
        this.logger = log4js.getLogger(dictionaryName + '-receiver');
        this.logger.level = process.env.LOG_LEVEL || 'debug';
        this.logger.trace('> constructor', dictionaryName);
        this.csnf = csnf;
        this.dispatcherManager = dispatcherManager;
        this.dictionaryName = dictionaryName;
        this.dispatchers = dispatchers;
        this.router = express.Router();
        this.router.use(this.middleware.bind(this));
        this.logger.trace('< constructor', dictionaryName);
    }

    protected async middleware(req, res, next) {
        this.logger.trace('> middleware >', req.method, req.originalUrl);
        this.logger.debug('extracting and interpreting event');
        const originalEvent = this.extractEvent(req);
        const [csnfEvent, csnfDecoration] = await this.interpretEvent(originalEvent);
        this.logger.debug('dispatching');
        this.dispatcherManager.dispatch(originalEvent, csnfEvent, csnfDecoration, this.dispatchers);
        res.status(200).send('OK');
        this.logger.trace('< middleware');
    }

    protected async interpretEvent(originalEvent: any): Promise<[CsnfEvent, any]> {
        this.logger.trace('> getEventInterpretation');
        const csnfEvent: CsnfEvent = this.csnf.getEventInterpretation(originalEvent, this.dictionaryName);
        const csnfDecoration = await this.csnf.getEventDecoration(csnfEvent);
        this.logger.trace('< getEventInterpretation');
        return [csnfEvent, csnfDecoration];
    }

    protected extractEvent(req) {
        this.logger.trace('> extractEvent');
        const originalEvent = req.body;
        this.logger.trace('< extractEvent');
        return originalEvent;
    }
}