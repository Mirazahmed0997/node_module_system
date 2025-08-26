import express, { Application, NextFunction, Request, Response } from 'express';
import fs from "fs"
import path from "path"
import { todosRouter } from './app/Todos/Todos.Route';



const app: Application = express();
app.use(express.json())
const userRouter=express.Router();

app.use('/todos',todosRouter)
app.use('/users',userRouter)

// Root------

app.get('/', (req: Request, res: Response, next:NextFunction) => {
  
  try {
    res.send('Welcome to TODO App');
  } catch (error) {
   next(error);
  }

});

app.get('/error', async (req: Request, res: Response,next:NextFunction) => {
  try {
      console.log("Error")
      res.send("this is an error")

  } catch (error) {
    next(error)
  }
});


// Catch-all for unmatched routes
app.all(/.*/, (req: Request, res: Response) => {
  res.status(404).json({ message: "Route Not Found" });
});




app.use((error: any,req:Request,res:Response,next:NextFunction)=>{
  if(error)
  {
     console.log(error)
    res.status(500).json({message: "Something went wrong",error})
  }
})







export default app;
