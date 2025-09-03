import express, { Application, Request, Response } from 'express';
import fs from "fs"
import path from "path"



const app: Application = express();
app.use(express.json())
const userRouter=express.Router();



app.get('/', (req: Request, res: Response) => {
  
  res.send("welcome to Hello app");

});



export default app;
