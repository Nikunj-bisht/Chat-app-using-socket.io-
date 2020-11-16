
const express = require("express");
const app = express();
const http = require('http');
const path = require("path");
const formatmessages = require("./utils/messages");
const server = http.createServer(app);
const socketio = require("socket.io");
const { query } = require("express");
const quertstring = require("querystring");
const url = require("url");
const io = socketio(server);

app.use(express.static(path.join(__dirname,'public')));
const name="new user";
io.on("connection",socket=>{
//    const {username}= quertstring.parse;

console.log("Entered");
    socket.emit("message",formatmessages("USER","welcome"));

    socket.broadcast.emit("message",formatmessages("USER","A user has joined"));

    socket.on("disconnect",()=>{

io.emit("message","A user left");

    });
    socket.on("chatMessage",message=>{        // receives from the front end 
        console.log(message);
        io.emit("message",formatmessages("USER",message)); // send to all the users in real time
        })
});



// app.get('/',(req,res)=>{
//     console.log("ran");
//     res.sendFile(path.join(__dirname,'./public','chat.html'));


// })



const PORT = 3000;



server.listen(PORT,()=>{

console.log(`listining to port ${PORT}`);

})