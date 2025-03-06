"use strict";
function firstFunction (param,callback){
  console.log('hello hello');
  callback();

}

//call back hell

//thats why use promises 

// 3 status :pending ,fulfilled , rejected

// const myPromise = new Promise((resolve,reject)=>{
//   const error = false;
//   if (!error){
//     resolve('Yes resolve the promise');
//   } else {
//     reject('NO reject the promise');
//   }
// });

// console.log(myPromise);

// myPromise.then(value=>{
//   return value+2;
// }).then(newValue=>{
//   console.log(newValue+1);
// }).catch(sadu=>{
//   console.log(sadu);
// });

// const myNextPromise = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve('myNextPromise resolved baby!');
//   }, 3000);
// });

// myNextPromise.then((value)=>{
//   console.log(value);
// });

// myPromise.then((value)=>{
//   console.log(value);
// });


//const users = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(users);

// users.then((response)=>{
//   //console.log(response);
//   return response.json();
// })
// .then((data)=>{
//   //console.log(data);
//   data.forEach(element => {
//     console.log(element);
//   });;
// });

// console.log('putah');

// const myUsers ={
//   userList: []
// }

// const myCoolFunction = async ()=>{
//   const response = await users;
//   const jsonUserData = await response.json();
//   return jsonUserData;
// }

// const anotherFunc = async ()=>{
//   const data = await myCoolFunction();
//   myUsers.userList = data;
//   console.log(typeof myUsers.userList[3]);
// }

// anotherFunc();


// Function to get form data
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"]
  };
  return requestObj;
};

// Function to build the request URL for the Chuck Norris API
const buildRequestUrl = (requestData) => {
  const categories = requestData.categories.join(","); // Convert array to comma-separated string
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=[${categories}]`;
};

// Function to request a joke from the API
const requestJoke = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json" // Required for APIs returning JSON
      }
    });
    const jsonResponse = await response.json();

    // Handle different API responses
    let joke;
    if (url.includes("icndb.com")) {
      joke = jsonResponse.value.joke; // Chuck Norris API
    } else {
      joke = jsonResponse.joke; // Dad Joke API
    }

    postToPage(joke);
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
};

// Function to post the joke to the page
const postToPage = (joke) => {
  console.log(joke);
};

// Function to process the request (for Dad Joke API)
const processRequest = async () => {
  const dadJokeUrl = "https://icanhazdadjoke.com/";
  await requestJoke(dadJokeUrl); // Fetch a dad joke
  console.log("finished");
};

// Call the functions
(async () => {
  await requestJoke(buildRequestUrl(getDataFromForm())); // Fetch a Chuck Norris joke
  await processRequest(); // Fetch a dad joke and log "finished"
})();