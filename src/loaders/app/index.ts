import cors from 'cors';
import express, { Express, NextFunction, Request, Response, } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { createServer, } from 'http';
import path from 'path';
import Dotenv from 'dotenv';
import { logMessage, } from '../../services/common';
Dotenv.config();

const PORT = Number(process.env.PORT,) || 3000;
const HOST = String(process.env.HOST || '0.0.0.0',);

const appLoader = (app: Express, router: express.Router,) =>
  new Promise((resolve,) => {
    const server = createServer(app,);

    // Adding Helmet to enhance Rest API's security
    app.use(helmet(),);
    app.use(
      cors({
        origin: true,
      },),
    );
    app.use(
      express.json({
        limit: '10mb',
      },),
    );
    app.use('/public', express.static(path.join(__dirname, '../assets',),),);

    app.use(function (req: Request, res: Response, next: NextFunction,) {
      res.setHeader('Access-Control-Allow-Origin', '*',);
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE',);
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type',);
      res.setHeader('Access-Control-Allow-Credentials', 'true',);
      next();
    },);

    app.use(
      express.urlencoded({
        extended: true,
      },),
    );
    app.use(morgan('dev',),);
    app.use('/api', router,);
    app.use((req, res,) => {
      res.status(404,).send({
        success: false,
        data: null,
        message: 'the resource you are looking for is not found.',
      },);
    },);
    server.listen(PORT, HOST, () => {

      logMessage('*** App is Running😀 ***',);
      resolve(true,);
    },);
  },);

export default appLoader;
