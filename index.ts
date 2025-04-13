import 'dotenv/config';
import express from 'express';
import { appLoader, databaseLoader, } from './src/loaders';
import router from './src/routes';
import { logMessage, } from './src/services/common';


process.on('uncaughtException', (err,) => {

  logMessage(' UNCAUGHT EXCEPTION ',);

  // eslint-disable-next-line no-constant-binary-expression
  logMessage(`[Inside "uncaughtException" event] ${  err.stack}` || err.message,);
},);
process.on('unhandledRejection', (reason, promise,) => {

  logMessage(' UNHANDLED REJECTION ',);

  logMessage(`Unhandled Rejection at: , ${ promise } , REASON: , ${ reason }`,);

},);

const app = express();

databaseLoader()
  .then(() => appLoader(app, router,),)
  .catch((error,) => {
    throw new Error(error,);
  },);
