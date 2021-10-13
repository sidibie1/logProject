const express = require('express');
const io = require("socket.io-client");
const fs = require('fs');

fileOne = '../filesTwo/cmots.log';
fileTwo = '../filesTwo/orderForm.log';
fileThree = '../filesTwo/orderReport.log';
fileFour = '../filesTwo/stockInfo.log';
app = express();
let reverseOrder = '';

socket = io('http://localhost:3000');

socket.on('connect',function(){
  setInterval(() => {  
   
    fs.watch(fileOne,(event,filename)=>{
     
      if(event==='change'){
        readFile1(fs,socket);   
      }
    });
    
    fs.watch(fileTwo ,(event)=>{
     
      if(event==='change'){
        readFile2(fs,socket);
      }
    });

    fs.watch(fileThree ,(event)=>{
     
      if(event==='change'){
        readFile3(fs,socket);
      }
    });
    fs.watch(fileFour ,(event)=>{
     
      if(event==='change'){
        readFile4(fs,socket);
      }
    });
  }, 1000);

  readFile1(fs,socket);
  readFile2(fs,socket);    
  readFile3(fs,socket);
  readFile4(fs,socket);
});

//FILE READ FUNCTIONS
function readFile1(fs,socket){

  fs.readFile(fileOne,'utf8',(err,data)=>{
    modLines(data);
    socket.emit('WW',reverseOrder);
    reverseOrder = '';
  })
}
function readFile2(fs,socket){

  fs.readFile(fileTwo,'utf8',(err,data)=>{
    modLines(data);
    socket.emit('XX',reverseOrder);
    reverseOrder = '';
  })
}
function readFile3(fs,socket){

  fs.readFile(fileThree,'utf8',(err,data)=>{
    modLines(data);
    socket.emit('YY',reverseOrder);
    reverseOrder = '';
  })
}

function readFile4(fs,socket){

  fs.readFile(fileFour,'utf8',(err,data)=>{
    modLines(data);
    socket.emit('ZZ',reverseOrder);
    reverseOrder = '';
  })
}

function modLines(data){
    
  let lines = data.split("\n")
  trimData = lines.slice(lines.length -5);
  for(let i=0; i<trimData.length; i++)
    reverseOrder = trimData[i] + "\n" + reverseOrder;
  
}

console.log('API 2 Running');