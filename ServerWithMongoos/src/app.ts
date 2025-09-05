import express, { Application, request, Request, response, Response } from 'express';
import fs from "fs"
import mongoose, { model, Schema } from 'mongoose';
import path from "path"
import { title } from 'process';
import { ObjectId } from 'mongoose';
import { ObjectId } from 'mongodb';


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




app.get('/',  async (req: Request, res: Response) => {


  res.send("Welcome to Note App")
  

});



app.post('/note/create-note',async(req: Request,res:Response)=>
{

  const body =req.body;

  const myNote= await Note.create(body)

  await myNote.save()

  res.status(201).json({
    success: true,
    message: "Note created Successfully Created",
    note: myNote
  })
})

app.get('/notes',  async (req: Request, res: Response) => {


  const myNotes= await Note.find()


  res.status(201).json({
    success: true,
    message: "Note created Successfully Created",
    notes: myNotes
  })
});
app.get('/notes/:id',  async (req: Request, res: Response) => {

  const param =req.params.id
  // const myNotes = await Note.findById(param);
  const myNotes = await Note.findOne({_id: param});


  res.status(201).json({
    success: true,
    message: "Note created Successfully Created",
    notes: myNotes
  })
});


app.patch('/updateNote/:id',  async (req: Request, res: Response) => {

  const param =req.params.id
  const updatedBody= req.body;
  // const upadatedNote = await Note.findByIdAndUpdate(param,updatedBody,{new:true});
  const upadatedNote = await Note.updateOne({_id:param},updatedBody,{new:true});


  res.status(201).json({
    success: true,
    message: "Note updated Successfully Created",
    upadatedNote
  })
});



export default app;
