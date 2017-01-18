var socket= io();

socket.on('connect',function () {
  console.log('Connected to server');

  socket.emit('createMessage',{
    to: "jenn",
    text: "Hey! This is Seba"
  });
});

socket.on('disconnect',function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log(message);
});
