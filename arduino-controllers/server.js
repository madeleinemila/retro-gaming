

const SerialPort = require('serialport');

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//  *****************************************************************
// get serial data from ARDUINO -> NODE SERVER -> emitted via a socket
// CLI: node server.js


const serialport = new SerialPort("/dev/cu.usbmodem1411");  // maddi's LHS USB port
serialport.on('open', function(){
  console.log('1411 Serial Port Opened');
  serialport.on('data', function(data){
      console.log(data[0]); // logging to terminal
      io.emit('pressed', { pressed: data[0] });
  });
});

const serialportRHS = new SerialPort("/dev/cu.usbmodem1421");  // maddi's RHS USB port
serialportRHS.on('open', function(){
  console.log('1421 Serial Port Opened');
  serialportRHS.on('data', function(data){
      console.log(data[0] + 10); // logging to terminal
      io.emit('pressed1421', { pressed1421: data[0] + 10 });
  });
});




// needed to serve back up socket.io
http.listen(3001, function(){
  console.log('listening on *:3001');
});















//**
