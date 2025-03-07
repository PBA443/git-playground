const myObj = {
  name : "Dave Jonson",
  logName : function(){
    console.log(this.name);
  }
}

const myArray = ['eat','drink','code'];

sessionStorage.setItem('mySessionStore',myObj);
const mySessionData = sessionStorage.getItem('mySessionStore');
console.log(mySessionData);