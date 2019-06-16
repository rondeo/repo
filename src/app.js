const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

require('./sockets')(io);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () => {
    console.log('Server on Port 3000');
});