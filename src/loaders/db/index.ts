import mongoose from 'mongoose';
// import { migrateAdmin } from '../../controller/auth/migration';
import { logMessage, } from '../../services/common';

mongoose.set('debug', false,);
const databaseLoader = () =>
  new Promise((resolve, reject,) => {
    mongoose
      .connect(String(process.env.DB_STRING,),)
      .then((db,) => {
        // if (process.argv[2] && process.argv[2] === 'admin-migration') {
        //   migrateAdmin();
        // }
        logMessage('***  DB Connected😀  ***',);
        resolve(db,);
      },)
      .catch(reject,);
  },);

export default databaseLoader;
