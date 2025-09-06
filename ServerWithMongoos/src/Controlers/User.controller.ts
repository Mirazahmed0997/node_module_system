import app from "../app";
import express, { Request, Response } from 'express'
import { User } from "../models/Users.model";


export const userRoutes= express.Router();

userRoutes.post('/create',async(req: Request, res: Response)=>
{
    const body= req.body;
    const user= await User.create(body);
    
    await user.save();

    res.status(200).json({
        success: true,
        message: " User Successfully Created",
        user: user
    })
})


userRoutes.get('/', async (req: Request,res:Response)=>
{
    const users= await User.find();

    res.status(201).json({
        success:true,
        message: "All users",
        users:users
    })
})


userRoutes.get('/:id', async (req: Request,res:Response)=>
{
    const id= req.params.id
    const user= await User.findById(id);

    res.status(201).json({
        success:true,
        message: "Get User",
        user:user
    })
})


userRoutes.patch('/updated/:id', async (req: Request,res:Response)=>
{
    const updatedUser= req.body
    console.log(updatedUser)
    const id= req.params.id
    const user= await User.findByIdAndUpdate(id,updatedUser, {new:true});

    res.status(201).json({
        success:true,
        message: "Update user",
        user:user
    })
})


userRoutes.delete('/delete/:id', async (req: Request,res:Response)=>
{
    const id= req.params.id
    const user= await User.findByIdAndDelete(id);

    res.status(201).json({
        success:true,
        message: "Deleted user",
        user:user
    })
})
