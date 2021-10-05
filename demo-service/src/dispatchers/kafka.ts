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
import {CsnfEvent} from 'onug-csnf';
import {BaseDispatcher, Dispatchers} from "./base-dispatcher";
import * as Kafka from "node-rdkafka";

const logger = log4js.getLogger('kafka-dispatcher');
logger.level = process.env.LOG_LEVEL || 'info';

export default class KafkaDispatcher extends BaseDispatcher {
    private kafkaTopic: string;
    private kafkaProducer: Kafka.Producer;

    constructor() {
        super(Dispatchers.KAFKA);

        logger.trace('> constructor');
        this.kafkaTopic = process.env.KAFKA_TOPIC;
        this.kafkaProducer = new Kafka.Producer({
            "metadata.broker.list": process.env.KAFKA_BROKERS,
            "security.protocol": "sasl_ssl",
            "sasl.mechanism": 'PLAIN',
            "sasl.username": process.env.KAFKA_USERNAME,
            "sasl.password": process.env.KAFKA_PASSWORD,
            'broker.version.fallback': '0.10.0'
        });
        this.kafkaProducer.setPollInterval(1000);

        this.kafkaProducer.connect({topic: this.kafkaTopic}, (err) => {
            if (err) {
                logger.error('connection error', err);
            } else {
                logger.info('connected');
            }
        });

        // @ts-ignore
        this.kafkaProducer.on('ready', function (log) {
            logger.info('producer ready');
        });

        this.kafkaProducer.on('event.error', function (err) {
            logger.error('producer error', err);
        });

        logger.trace('< constructor');
    }

    async dispatch(originalEvent: any, csnfEvent: CsnfEvent, csnfDecoration: any) {
        logger.trace('> dispatch');

        const payload = {
            event: csnfEvent,
            decoration: csnfDecoration
        };

        if (this.kafkaProducer.isConnected()) {
            try {
                this.kafkaProducer.produce(this.kafkaTopic, null, Buffer.from(JSON.stringify(payload)));
                logger.debug('event successfully dispatched');
            } catch (err) {
                logger.error('failed to dispatch event', err);

            }
        }

        logger.trace('< dispatch');
    }
}


