import app from "./app";

const port = 5000

let server;

const bootStrap =async ()=>
{
    server= app.listen(5000, () => {
    console.log(`Example app listening on ${port}`)
})

}
