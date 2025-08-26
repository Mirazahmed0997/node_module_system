import express, { Application, Request, Response } from 'express';
import fs from "fs"
import path from "path"
import { client } from '../../config/mongoDB';


const file_path= path.join(__dirname, "../../../DB/todo.json")


export const todosRouter= express.Router()


todosRouter.get('/', async (req: Request, res: Response) => {

       const db= await client.db("todosDB")
       const collection= await db.collection('todos') 
      
       const cursor= collection.find({})
       const todos= await cursor.toArray()
       res.json(todos)
});



todosRouter.post('/create_todos',async (req: Request, res: Response) => {

       const {title,body}= req.body;

       const db= await client.db("todosDB")
       const collection= await db.collection('todos') 
       await collection.insertOne({
            title:title,
            body:body
          })

          const cursor= collection.find({})
          const todos= await cursor.toArray()

          res.json(todos);
});
