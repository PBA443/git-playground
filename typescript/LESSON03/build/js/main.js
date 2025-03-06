"use strict";
let strinArr = ['one', 'hey', 'Bowalls'];
let guitars = ['Strat', 'Frankast', 9875];
let mixedData = ['EVh', true, 457, /\w/g];
strinArr[0] = 'lk';
strinArr.push('sellawalawe');
guitars[3] = 89;
let band = [];
let mixed = [true, 'john', null, 78];
band.push(false);
mixed[0] = true;
console.log(mixed);
let Guitarist;
Guitarist = [];
const exampleObj = {
    prop1: true,
    prop2: 'Mangal'
};
exampleObj.prop2 = 'Hasan';
let john = {
    name: 'John Lenon',
    active: false,
    albums: [45, 'supra']
};
let reaper = {
    //name:'Thon Mist',
    active: true,
    albums: ['I', 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(john));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
