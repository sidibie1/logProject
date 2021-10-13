const express = require('express');
const app = express();
const http = require('http');
const bigServer = require("socket.io");
const port = 3000;

const server = http.createServer(app);
const io =  bigServer(server);

app.use(express.static(__dirname+'/public'));

dataOne='';dataTwo='';dataThree='';dataFour='';
dataFive='';dataSix='';dataSeven='';dataEight='';

io.on('connect',(socket)=>{
  
  console.log( socket.client.conn.server.clientsCount + " users connected" );
  socket.on('AA',data=>{
    dataOne = data
  })
  socket.on('BB',data=>{
    dataTwo = data
  })
  socket.on('CC',data=>{
    dataThree = data
  })
  socket.on('DD',data=>{
    dataFour = data
  })
  socket.on('WW',data=>{
    dataFive = data
  })
  socket.on('XX',data=>{
    dataSix = data
  })
  socket.on('YY',data=>{
    dataSeven = data
  })
  socket.on('ZZ',data=>{
    dataEight = data
  })

  setInterval(() => {
    socket.emit('A',dataOne);
    socket.emit('B',dataTwo)
    socket.emit('C',dataThree);
    socket.emit('D',dataFour);
    socket.emit('W',dataFive);
    socket.emit('X',dataSix)
    socket.emit('Y',dataSeven);
    socket.emit('Z',dataEight);
  }, 1000);
});
  

server.listen(port,()=>{
    console.log('Server listening on port : '+port);
})