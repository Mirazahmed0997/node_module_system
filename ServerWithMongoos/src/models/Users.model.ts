import { model, Schema, version } from "mongoose";
import { UserInterface } from "../Interfaces/User.interface";
import validator from 'validator'



const userSchema = new Schema<UserInterface>({
    firstName: {type: String, required:true,trim:true, minlength:4,maxlength:10},
    lastName: {type: String, required:true,trim:true,minlength:[4, 'Must be at least 4 character, got {VALUE}'],maxlength:10},
    age: {type: Number, required:true,trim:true, min:[18, 'Must be at least 6, got {VALUE}'],max:[60, 'Must be at most 60, got {VALUE}']},
    email: {
        type: String,
        required:true,
        trim:true,
        lowercase:true,
        unique:[true, "Already have this email"],
        // validate:{
        //     validator:function(value){
        //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        //     },
        //     message:function(props){
        //         return `Email ${props.value} is not valid email`
        //     }
        // }

        validate:[validator.isEmail,"Invalid Email {VALUE}"]
    },
    password: {type: String, required:true,trim:true},
    role: {type: String,enum: {values:['USER','ADMIN','SUPER ADMIN'], message:"Role is not Found"} , default:'USER',required:true,trim:true,uppercase:true},
},
{
    versionKey: false,
    timestamps:true
})

export const  User = model("User", userSchema)






