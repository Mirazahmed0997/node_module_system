// const express= require('express')
import express, { Application, Request, Response } from 'express'


const app : Application = express()


app.get('/', (req : Request, res: Response) => {
  res.send('Hello World!')
})
app.get('/todos', (req : Request, res: Response) => {
  res.send('Hello World!')
})
app.post('/todos/create-todo', (req : Request, res: Response) => {
  res.send('Hello World!')
})



export default app;
