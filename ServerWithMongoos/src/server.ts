
import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';

let server: Server

const port=5000;

async function main()
{
  try {
     await mongoose.connect('mongodb+srv://mongoDB:mongoDB@cluster0.ljhdru4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
     console.log("connected to mongoose")
     app.listen(port, async () => {
     console.log(`🚀 Server is running at http://localhost:${port}`);
  });
  } catch (error) {
    
  }
}

main();





