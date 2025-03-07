import User from "./user.js";
import { SpecialPizza } from "./user.js";
import { posts } from "./posts.js";

const me = new User("test@mymail.com","Juan Paula");

console.log(me);

const mySpecialPizza = new SpecialPizza("medium");
mySpecialPizza.slice();

posts.forEach((post)=>{
  console.log(post);
});

console.clear();

const filterPosts = posts.filter((post)=>{
  return post.userId === 5;
});

console.log(filterPosts);

const mappedPosts = filterPosts.map((post)=>{
  return post.id * 10;
});

console.log(mappedPosts);

const reducedPostsValues = mappedPosts.reduce((sum,post)=>{
  return sum + post;
});

console.log(reducedPostsValues);