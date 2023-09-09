const express=require('express')
const app=express();
const tasks=require('./routes/tasks')
const connectDb=require('./db/connect')
require('dotenv').config()

//Middleware
app.use(express.json())
app.use(express.static('./public'))

//Routes

app.use('/api/v1/tasks',tasks)


const port=5500
const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on Port ${port} ...`))
    }catch(error){
        console.log(error);
    }
}

start()
