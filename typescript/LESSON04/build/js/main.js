"use strict";
//type Aliases
//literal types
let myName;
let userName;
userName = 'guest';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Heloo');
logMsg(add(6, 4));
let subtract = function (a, b) {
    return a - b;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(5, 6));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + c + b;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 5, 8));
logMsg(addAll(2, 5));
logMsg(sumAll(2, 5, 8));
logMsg(sumAll(undefined, 5));
//Rest parametes
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(2, 5, 8, 7, 9, 6, 3, 4));
//never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This shloud never happen');
};
