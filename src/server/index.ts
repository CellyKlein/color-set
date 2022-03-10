import 'dotenv/config';
import express, { Application } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import log4js from 'log4js';

import routes from './routes';

const serviceName = process.env.SERVICE_NAME || 'default';
const app : Application = express();
const port : number = Number(process.env.PORT) || 3000;
const databaseUrl : string = process.env.DB_URL || 'mongodb://localhost:27017/colorset-develop';
log4js.configure({
    appenders: { [ serviceName ]: { type: 'stdout' } },
    categories: { default: { appenders: [ serviceName ], level: 'info' } }
});
const logger = log4js.getLogger(serviceName);

mongoose.connect(databaseUrl);
const db : mongoose.Connection = mongoose.connection;

db.on('error', error =>
{
    logger.error(error);
});
db.once('open', () =>
{
    logger.info('Connection to dabatase successfull.');
});

app.use(bodyParser.urlencoded( { extended:true }) );
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, '../../build/client/'), { index: false }));

app.use('/api/user', routes.user);
app.use('/*', routes.frontend);

app.listen(port, () =>
{
    logger.info(`Server running at http://localhost:${ port }`);
});
