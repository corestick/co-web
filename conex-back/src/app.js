import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import environment from './config/environment';
import helper from './utilities/helper';
import dotenv from 'dotenv';
import exception from './config/exception';
import dbconn from './config/dbconn';
import cors from 'cors';
import { verifyToken } from './utilities/token';
import Response from './utilities/response';
import approuting from './modules';

const app = express();

global.CONFIG = environment;
global.HELPER = helper;

dotenv.config();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SERCRET));
/*
app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: process.env.COOKIE_SERCRET,
		cookie: {
			httpOnly: true,
			secure: false,
		},
	})
);
*/

const init = async () => {
  global.EXCEPTION = exception;

  global.MSSQLConn = await dbconn.getConn(global.CONFIG.mssql);

  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  app.use(express.json({ limit: '50mb' }));
  app.use(
    express.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000,
    })
  );

  app.use(verifyToken);

  new Response(app);

  const appmodules = new approuting(app);
  appmodules.init();
};

init();

export default app;
