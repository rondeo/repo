$(function (){

    const socket = io();//esto establece una conexion de socket con el server...

    //Obtaining DOM elements from innterface..
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');


    $messageForm.submit(e=>{
        //Evita q se refresque la pagina...
        e.preventDefault();
        //Envia informacion al server...
        socket.emit('send message',$messageBox.val());
        //Limpiando el cajon de texto...
        $messageBox.val('');
    });
    //Events

    socket.on('new message', function(data){
        $chat.append(data+'<br>');
    })

})