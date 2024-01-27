const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server)
const cors = require("cors")
const port = 2000
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello from the server ")
})

io.on("connection",(socket)=>{
    console.log("a user connected")
})

server.listen(port,()=>{
console.log(`server is listening on ${port}`)
})

// http://localhost:2000