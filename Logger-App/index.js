const path = require('path')
const fs= require("fs")


const input_argument= process.argv.slice(2)

const text= input_argument.join(' ')

const timeStamp= new Date().toString()

const message= `${text} ${timeStamp}\n`

if(!message)
{
    console.log("Please Provide a message to log");
    process.exit(1)
}

const file_path= path.join(__dirname, "Log.text")

fs.appendFile(file_path,message ,{encoding: "utf-8"},()=>
{
    console.log("Log Added Successfully")
})

console.log(file_path)


