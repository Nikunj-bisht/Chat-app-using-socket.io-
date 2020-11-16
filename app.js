
const express = require("express");
const app = express();
const http = require('http');
const path = require("path");

const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

app.use(express.static(path.join(__dirname,'public')));

io.on("connection",socket=>{
    console.log("New connection");
})

// app.get('/',(req,res)=>{
//     console.log("ran");
//     res.sendFile(path.join(__dirname,'./public','chat.html'));


// })

module.exports=server;