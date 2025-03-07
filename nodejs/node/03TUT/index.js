const logEvents = require('./logEvents');

const eventEmmitter = require('events');

class MyEmmitter extends eventEmmitter {};

//initialize object
const myEmmitter = new MyEmmitter();

//add listener for the log event
myEmmitter.on('log',(msg)=>logEvents(msg));

setTimeout(() => {
  //Emit event
  myEmmitter.emit('log','Log event emitted!');
}, 2000);