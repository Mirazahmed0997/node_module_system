import express, { Application, Request, Response } from 'express';
import fs from "fs"
import path from "path"
import { client } from '../../config/mongoDB';
import { ObjectId } from 'mongodb';




export const todosRouter= express.Router()



// get all todos----------


todosRouter.get('/', async (req: Request, res: Response) => {

       const db= await client.db("todosDB")
       const collection= await db.collection('todos') 
      
       const cursor= collection.find({})
       const todos= await cursor.toArray()
       res.json(todos)
});


// get single todo--------

todosRouter.get('/:id', async (req: Request, res: Response) => {

       const id=req.params.id
       
       const db= await client.db("todosDB")
       const collection= await db.collection('todos') 

       const todo= await collection.findOne({_id: new ObjectId(id)})
       res.json(todo)
});







// create todo-----



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



// update------


todosRouter.put('/update_todo/:id', async (req: Request, res: Response) => {

       const id=req.params.id
       
       const db= await client.db("todosDB")
       const collection= await db.collection('todos') 

       const {title,body}=req.body

       const  filter= {_id: new ObjectId(id)}

       const updatedTodo= await collection.updateOne(filter,{$set: {title,body}},{upsert:true})
       res.json(updatedTodo)

       console.log("update route")
});




// delete todo----------

todosRouter.delete('/delete_todo/:id', async (req: Request, res: Response) => {

       const id=req.params.id 
       
       const db= await client.db("todosDB")
       const collection= await db.collection('todos') 

       const todo= await collection.deleteOne({_id: new ObjectId(id)})
       console.log(todo)
       res.json(todo)
});
