const express=require('express')
const app=express();
const tasks=require('./routes/tasks')
const connectDb=require('./db/connect')
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/errorhandler')
require('dotenv').config()

//Middleware
app.use(express.json())
app.use(express.static('./public'))

//Routes

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const port=process.env.PORT || 5500
const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on Port ${port} ...`))
    }catch(error){
        console.log(error);
    }
}

start()
