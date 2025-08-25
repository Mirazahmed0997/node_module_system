import express, { Application, Request, Response } from 'express';
import fs from "fs"
import path from "path"



const app: Application = express();
app.use(express.json())

const file_path= path.join(__dirname, "../DB/todo.json")


// Root------

app.get('/', (req: Request, res: Response) => {
  
  res.send('Welcome to TODO App');

});


// all todos------

app.get('/todos', (req: Request, res: Response) => {

     const data= fs.readFileSync(file_path,{encoding: "utf-8"})
        res.json(data);
});



// single todo-----


app.get('/todos/:title', (req: Request, res: Response) => {
     console.log("quere",req.query)
     console.log(req.params)
    //  const data= fs.readFileSync(file_path,{encoding: "utf-8"})
    //     res.json(data);
});


// create  todo-------


app.post('/todos/create_todos', (req: Request, res: Response) => {

  const {title,body}=req.body
  console.log(title,body)
  res.send('Todo Created');
});

export default app;
