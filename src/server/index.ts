import 'dotenv/config';

import express, { Application } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import routes from './routes';

const app : Application = express();
const port : number = Number(process.env.PORT) || 3000;
const databaseUrl : string = process.env.DB_URL || '';

mongoose.connect(databaseUrl);

app.use(bodyParser.urlencoded( { extended:true }) );
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, '../../build/client/'), { index: false }));

app.get('/', routes.frontend);

app.listen(port, () =>
{
    console.log('server running on port ' + port);
});
