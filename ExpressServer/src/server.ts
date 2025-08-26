import app from './app';


import { Collection } from './../node_modules/mongodb/src/collection';
import { client } from './config/mongoDB';

const port = 5000;





const bootStrap = async () => {
          await client.connect();
       


  app.listen(port, async () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
  });
};

bootStrap();
