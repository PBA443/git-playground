"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; //less specific type
let c = a; //more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let muVal = addOrConcat(2, 2, 'concat');
//Be careful TS sees no problem - but a string is returned
let nextVal = addOrConcat(4, 4, 'concat');
10;
//The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
img.src;
myImg.src;
