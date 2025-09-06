import { model, Schema } from "mongoose";
import { NoteInterface } from "../Interfaces/noteInterface";
import { Types } from 'mongoose';




const noteSchema= new Schema<NoteInterface>({
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
  },
user: {
  type:Schema.Types.ObjectId,
  ref: "User",
  required:true
}
},
{
  versionKey: false,
  timestamps:true
}
)

export const Note = model("Note", noteSchema)