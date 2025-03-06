document.addEventListener('readystatechange',(e)=>{
  if(e.target.readyState === 'complete') {
    console.log('readyState : Complete bro')
    intiApp();
  }
});

const intiApp = ()=>{
  const view = document.querySelector('div');
  const form = view.querySelector('#nameForm');
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('submit event');
  });
}

const myObj = {
  name : "Dave Jonson",
  hobbies : ['eat','drink','code'],
  logName : function(){
    console.log(this.name);
  }
}

const myArray = ['eat','drink','code'];

localStorage.setItem('mySessionStore',JSON.stringify(myObj));
//localStorage.removeItem('mySessionStore');

const key = localStorage.key(0);
const mySessionData = JSON.parse(localStorage.getItem('mySessionStore'));
console.log(sessionStorage.key(0));
