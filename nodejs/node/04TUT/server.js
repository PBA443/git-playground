const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const eventEmmitter = require('events');
class Emmitter extends eventEmmitter {};
//initialize object
const myEmmitter = new Emmitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  
});

server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
//add listener for the log event
// myEmmitter.on('log',(msg)=>logEvents(msg));
// setTimeout(() => {
//   //Emit event
//   myEmmitter.emit('log','Log event emitted!');
// }, 2000);