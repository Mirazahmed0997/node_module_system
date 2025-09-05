import { model, Schema, version } from "mongoose";
import { UserInterface } from "../Interfaces/User.interface";



const userSchema = new Schema<UserInterface>({
    firstName: {type: String, required:true,trim:true},
    lastName: {type: String, required:true,trim:true},
    email: {type: String, required:true,trim:true},
    password: {type: String, required:true,trim:true},
    role: {type: String,enum:['user','admin'] , default:'user',required:true,trim:true},
},
{
    versionKey: false,
    timestamps:true
})

export const  User = model("User", userSchema)


