const http= require("http")
const { json } = require("stream/consumers")
const path= require("path")
const fs= require("fs")

const PORT=5000

const file_path= path.join(__dirname, "./Db/todo.json")







const server= http.createServer((req,res)=>
{
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname= url.pathname

    // get all todos
    if(pathname ==='/todos' && req.method==='GET')
    {
        const data= fs.readFileSync(file_path,{encoding: "utf-8"})
        res.writeHead(200,{
            "content-type": "application/json",
        })

        res.end(data)
    }

    // post todo

    else if(pathname ==='/todos/create_todos' && req.method==='POST'){
        let data= ""
        req.on("data",(chunk)=>
        {
            data=data+chunk;
        })


        req.on("end",()=>
        {
            const {title,body}= JSON.parse(data)
            const created_at = new Date().toLocaleString();
            const allTodos= fs.readFileSync(file_path,{encoding:"utf-8"})
            const parseTodos=JSON.parse(allTodos)
            parseTodos.push({title,body,created_at})
            fs.writeFileSync(file_path,JSON.stringify(parseTodos,null,2),{encoding:"utf-8"})
            res.end(JSON.stringify({title,body,created_at},null,2))
        })

        
    }

    else  if(pathname ==='/todo' && req.method==='GET')
    {
        const title= url.searchParams.get('title')
        const data= fs.readFileSync(file_path,{encoding: "utf-8"})
        const parseData= JSON.parse(data)

        const todo=parseData.find((todo)=>todo.title===title)
        const stringifyTodo= JSON.stringify(todo)
        // res.writeHead(200,{
        //     "content-type": "application/json",
        // })

        res.end(stringifyTodo)
    }




        // update todo---------------------------------------

     else if(pathname ==='/todos/update_todo' && req.method==='PATCH'){

        const title= url.searchParams.get('title')
        let data= ""
        req.on("data",(chunk)=>
        {
            data=data+chunk;
        })


        req.on("end",()=>
        {
            const {body}= JSON.parse(data)
            const allTodos= fs.readFileSync(file_path,{encoding:"utf-8"})

            const parseTodos=JSON.parse(allTodos)

            const indexTodo= parseTodos.findIndex((todo)=>todo.title===title)

            parseTodos[indexTodo].body=body;

            fs.writeFileSync(file_path,JSON.stringify(parseTodos,null,2),{encoding:"utf-8"})

            res.end(JSON.stringify({title,body,created_at:parseTodos[indexTodo].created_at},null,2))
        })        
    }


    
        
    
    // delete todo---------------------------------------

     else if(pathname ==='/todos/delete_todo' && req.method==='DELETE'){

        const title= url.searchParams.get('title')
        const allTodos = JSON.parse(fs.readFileSync(file_path, { encoding: "utf-8" }))

        const deletedTodo = allTodos.filter(todo => todo.title !== title)

         fs.writeFileSync(file_path,JSON.stringify(deletedTodo,null,2),{encoding:"utf-8"})

        console.log(deletedTodo)
    }





    else{
        res.end('Route Not Found')
    }
})

server.listen(PORT,'127.0.0.1',()=>
{
    console.log(`Server Running on port ${PORT}`)
})