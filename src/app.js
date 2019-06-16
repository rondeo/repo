const http = require('http');

const express = require('express');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

io.on('connection', socket =>{
    console.log('New Usuario!');
})

app.use(express.static('src/public'));

server.listen(3000, () => {
    console.log('Server on Port 3000');
});