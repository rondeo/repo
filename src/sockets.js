module.exports = function(io){
    io.on('connection', socket =>{
        console.log('Nuew Usuario!');

        //Escucho un nuevo (socket o cliente) con el comando "send message" a ver q tiene dentro...
        socket.on('send message', function(data){
        io.sockets.emit('new message', data);})
        
});


}