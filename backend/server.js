const express = require("express");
const {chats}= require("./data")
const dotenv = require('dotenv');
const connectDB = require("./config/db");
require('colors');
const userRoutes = require('./Routes/userRoutes');
const chatRoutes = require('./Routes/chatRoutes');
const {notFound,errorHandler} = require("../backend/middleware/errorMiddleware")

// const cors = require('cors')

console.log(chats);


const app = express();
dotenv.config();
connectDB()

// app.use(cors())
app.use(express.json()) // to accept JSON data

app.get('/',(req,res)=>{
    res.send("APi is running!")
})


// let's make use of routess
app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes);
app.use(notFound)
app.use(errorHandler);


















// app.get('/api/chat',(req,res)=>{
    
//     res.send(chats);
// })


// app.get('/api/chat/:id',(req,res)=>{
//     // console.log(req.params.id);
//     const singleChat = chats.find(c=>c._id == req.params.id);
//     res.send(singleChat);
// })



const PORT  = process.env.PORT || 5000
app.listen(5000, console.log(`server started on PORT ${PORT}`.yellow.bold));