import express, { Application, request, Request, response, Response } from 'express';
import fs from "fs"
import mongoose, { model, Schema } from 'mongoose';
import path from "path"
import { title } from 'process';
import { ObjectId } from 'mongoose';
import { Note } from './models/note.models';
import { notesRoutes } from './Controlers/note.controller';
import { userRoutes } from './Controlers/User.controller';


const app: Application = express();
app.use(express.json())
const userRouter=express.Router();


app.use('/notes',notesRoutes)
app.use('/user',userRoutes)


app.get('/',  async (req: Request, res: Response) => {


  res.send("Welcome to User App")
  

});



export default app;
