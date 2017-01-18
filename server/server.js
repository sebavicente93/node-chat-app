const express= require('express');
const http= require('http');
const path= require('path');
const socketIO= require('socket.io');

const {generateMessage}= require('./utils/message');
const publicPath= path.join(__dirname,'../public');
const port= process.env.PORT || 3000;
var app= express();
var server= http.createServer(app);
var io= socketIO(server);

app.use(express.static(publicPath));

io.on('connect',(socket) => {
  console.log('New User connected');

  socket.emit('newMessage',generateMessage('admin','Welcome to the chat app'));

  socket.broadcast.emit('newMessage',generateMessage('admin', 'A new user has join in'));

  socket.on('createMessage',(message) => {
    console.log('createMessage',message);
    io.emit('newMessage',generateMessage(message.from,message.text));
    // socket.broadcast.emit('newMessage',{
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });

  });

  socket.on('disconnect',() => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log('Server is up on port',port);
});
