const express= require('express');
const http= require('http');
const path= require('path');
const socketIO= require('socket.io');

const publicPath= path.join(__dirname,'../public');
const port= process.env.PORT || 3000;
var app= express();
var server= http.createServer(app);
var io= socketIO(server);

app.use(express.static(publicPath));

io.on('connect',(socket) => {
  console.log('New User connected');

  socket.emit('newMessage',{
    from:"Admin",
    text:"Welcome to the chat",
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage',{
    from: "Admin",
    text: "A new user has join in",
    createdAt: new Date().getTime()
  });

  socket.on('createMessage',(message) => {
    console.log('createMessage',message);
    io.emit('newMessage',{
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
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
