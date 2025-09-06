import app from "../app";
import express, { Request, Response } from 'express'
import { User } from "../models/Users.model";
import z from "zod";


export const userRoutes= express.Router();


export const createUserZodSchema = z.object({
  firstName: z
    .string()
    .min(4, { message: "First name must be at least 4 characters long" })
    .max(10, { message: "First name must be at most 10 characters long" })
    .trim(),
    
  lastName: z
    .string()
    .min(4, { message: "Last name must be at least 4 characters long" })
    .max(10, { message: "Last name must be at most 10 characters long" })
    .trim(),
    
  age: z
    .number()
    .min(18, { message: "Age must be at least 18" })
    .max(80, { message: "Age must be at most 80" }),
    
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .trim()
    .toLowerCase(),
    
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .trim(),
    
  role: z.enum(["USER", "ADMIN", "SUPER ADMIN"])
       .default("USER")
       .optional(),

});


userRoutes.post('/create', async (req: Request, res: Response) => {
  try {
    // ✅ Await schema validation
    const body = await createUserZodSchema.parseAsync(req.body);

    // ✅ Create user (User.create already saves to DB)
    const user = await User.create(body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
    });

  } catch (error: any) {
    console.error(error);

    res.status(400).json({
      success: false,
      message: error.message,
      errors: error.errors || error
    });
  }
});



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
