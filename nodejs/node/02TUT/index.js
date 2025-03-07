// const fs = require('fs');
// const path = require('path');
// //read file
// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf-8',(err,data)=>{
//   if(err) throw err;
//   console.log(data);
// })

// console.log('hello...');

// //exit on uncaugt errors
// process.on('uncaughtException',err=>{
//   console.error(`There was an uncaught error: ${err}`);
//   process.exit(1);
// })

// //write file
// fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you praveen',(err,data)=>{
//   if(err) throw err;
//   console.log('Write to reply.txt is Complete');

//   fs.appendFile(path.join(__dirname,'files','reply.txt'),'\nGet the hell out praveen',(err,data)=>{
//     if(err) throw err;
//     console.log('Update to reply.txt is Complete');

//     fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newReply.txt'),(err,data)=>{
//       if(err) throw err;
//       console.log('Rename to newReply.txt is Complete');
//     })
//   })
// })

//Avoiding callback hell with promises


const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async ()=>{
  try {
    const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf-8');
    console.log(data);
    await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
    await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data);
    await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\nNice to meet you Praveen');
    await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseUpdate.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseUpdate.txt'),'utf-8');
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
}

fileOps();