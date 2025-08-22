const http= require("http")
const { json } = require("stream/consumers")

const PORT=5000

const data= [
  {
    "title": "First Post",
    "body": "This is the body of the first post.",
    "created_at": "2025-08-23T02:30:00Z"
  },
  {
    "title": "Second Post",
    "body": "Here is some more content in the second post.",
    "created_at": "2025-08-22T18:45:00Z"
  },
  {
    "title": "Third Post",
    "body": "Another entry with details about a new update.",
    "created_at": "2025-08-21T12:10:00Z"
  }
]



const server= http.createServer((req,res)=>
{
    // console.log(req.url,req.method)
    // res.end(" Welcome to Node server")
    if(req.url==='/todos' && req.method==='GET')
    {
        res.writeHead(200,{
            "content-type": "application/json",
        })

        // another way to set header

        // res.setHeader("content-type", "text/plain")
        // res.setHeader("email", "istypartho@gmail.com")
        // res.statusCode=201
        res.end(JSON.stringify(data))
    }
    else if(req.url==='/todos/create_todos' && req.method==='POST'){
        res.end('Create Todos')
    }
    else{
        res.end('Route Not Found')
    }
})

server.listen(PORT,'127.0.0.1',()=>
{
    console.log(`Server Running on port ${PORT}`)
})