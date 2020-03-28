require('dotenv').config();
import express, { Request, Response } from 'express';

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (request: Request, response: Response) => {
	response.status(200).send('Hey kitty girl, its your world');
});

app.listen(port, () => {
	console.log('listening in your favorite port');
});

module.exports = app;
