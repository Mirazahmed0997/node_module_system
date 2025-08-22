const http= require("http")

const PORT=5000

const server= http.createServer((req,res)=>
{
    // console.log(req.url,req.method)
    // res.end(" Welcome to Node server")
    if(req.url==='/todos' && req.method==='GET')
    {
        res.end('Get All Todos')
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