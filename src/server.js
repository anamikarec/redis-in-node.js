const express = require('express');
const userController = require('../src/controllers/user.controller')

const app = express();

const connect = require('./config/db');

app.use(express.json());

// app.use("/",(req,res)=>{
//     res.send("hi")
// });
app.use('/user',userController);
const port = 5000;
const start = async()=>{
    await connect();
    app.listen(port,()=>{
        console.log(`server running on ${port}`)
    })
}

module.exports = start;