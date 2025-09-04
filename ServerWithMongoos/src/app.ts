import express, { Application, request, Request, response, Response } from 'express';
import fs from "fs"
import mongoose, { model, Schema } from 'mongoose';
import path from "path"
import { title } from 'process';



const app: Application = express();
app.use(express.json())
const userRouter=express.Router();

const noteSchema= new Schema({
  title:{type: String, required: true, trim: true},
  content: {type: String, required: true,default:" "},
  category: {
    type: String, 
    enum: ['Personal', "Professional","Student","Work"],
    default:"Personal",
  },
  
  pinned: {type:Boolean, default:false},
  tags:{
    label: {type:String,required:true},
    color: {type: String, default:'grey'}
  }

})


const Note = mongoose.model("Note", noteSchema)

app.post('/create-note',async(req: Request,res:Response)=>
{
  const myNote= new Note({
    title: "Backend",
    tags:{
      label: "Express.js"
    }
  })

  await myNote.save()

  res.status(201).json({
    success: true,
    message: "Note created Successfully Created",
    note: myNote
  })
})

app.get('/', (req: Request, res: Response) => {
  
  res.send("welcome to Hello app");

});



export default app;
