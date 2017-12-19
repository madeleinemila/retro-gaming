

const SerialPort = require('serialport');

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//  *****************************************************************
// get serial data from ARDUINO -> NODE SERVER -> emitted via a socket
// CLI: node server.js


const serialport = new SerialPort("/dev/cu.usbmodem1411");  // maddi's LHS USB port
serialport.on('open', function(){
  console.log('Serial Port Opened');
  serialport.on('data', function(data){
      console.log(data[0]); // logging to terminal
      io.emit('raw', { raw: data[0] });
  });
});

// needed to serve back up socket.io
http.listen(3000, function(){
  console.log('listening on *:3000');
});















//**
