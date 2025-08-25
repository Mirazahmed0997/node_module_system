import express, { Application, Request, Response } from 'express';
import fs from "fs"
import path from "path"
import { todosRouter } from './app/Todos/Todos.Route';



const app: Application = express();
app.use(express.json())
const userRouter=express.Router();

// Root------

app.get('/', (req: Request, res: Response) => {
  
  res.send('Welcome to TODO App');

});




app.use('/todos',todosRouter)
app.use('/users',userRouter)











// single todo-----
app.get('/todos/:title', (req: Request, res: Response) => {
     console.log("quere",req.query)
     console.log(req.params)
 
});


export default app;
