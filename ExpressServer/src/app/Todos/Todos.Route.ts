import express, { Application, Request, Response } from 'express';
import fs from "fs"
import path from "path"


const file_path= path.join(__dirname, "../../../DB/todo.json")


export const todosRouter= express.Router()


todosRouter.get('/', (req: Request, res: Response) => {

     const data= fs.readFileSync(file_path,{encoding: "utf-8"})
     console.log("todos router")
     
     res.json({
      message: "From todos router",
      data
     });
});



todosRouter.post('/create_todos', (req: Request, res: Response) => {

  const {title,body}=req.body
  console.log(title,body)
  res.send('Todo Created');
});
