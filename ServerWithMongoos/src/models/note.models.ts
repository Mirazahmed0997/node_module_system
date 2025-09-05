import { model, Schema } from "mongoose";



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

},
{
  versionKey: false,
  timestamps:true
}
)

export const Note = model("Note", noteSchema)