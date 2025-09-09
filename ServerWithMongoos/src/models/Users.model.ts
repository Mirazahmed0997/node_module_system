import { Model, model, Schema, version } from "mongoose";
import { Address, UserInterface, userInterfaceMethod, userStaticMethod } from "../Interfaces/User.interface";
import validator from 'validator'
import { required } from "zod/mini";
import  bcrypt  from 'bcryptjs';


const addressSchema= new Schema<Address>({
    city:{type: String,  required: true},
        street: {type:String,required: true},
         zip:{type: Number,required: true}
},{
    _id:false,
    versionKey: false
}
)

const userSchema = new Schema<UserInterface, userStaticMethod ,userInterfaceMethod>({
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
    address: { type: addressSchema},
},
{
    versionKey: false,
    timestamps:true
})

userSchema.method("hashPassword", async function(rawPassword:string){
        const password= await bcrypt.hash(rawPassword,10)
        return password
})

userSchema.static("hashPassword", async function(rawPassword:string){
        const password= await bcrypt.hash(rawPassword,10)
        return password
})


userSchema.pre("save",async function(){
    this.password=await bcrypt.hash(this.password,10)
})

userSchema.post("save",async function(doc){
    console.log("Post hook",doc._id)
})


export const  User = model<UserInterface, userStaticMethod>("User", userSchema)






