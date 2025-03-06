band = {
  vocals : 'Jean Cloud',
  drumer : 'San Pedro',
  mixer : 'Pedro Cappo',
  bassGuitar : 'Luis Fonsy'
}
/*
//console.log(band.vocals)
console.log(Object.keys(band))
console.log(Object.values(band))

for (job in band) {
  console.log(`On ${job} it's ${band[job]}!`)
}

const {vocals,drumer,mixer,bassGuitar} = band

console.log(vocals)

*/

const singer = ({vocals})=>{return `Its ${vocals} singing!`}
console.log(singer(band))


"use strict";
const makeErr=()=>{
  try {
    throw new Error("This is an error");
  } catch (error) {
    console.error(error.name);
  }
}

makeErr();