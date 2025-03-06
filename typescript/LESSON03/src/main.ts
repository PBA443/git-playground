let strinArr = ['one','hey','Bowalls']

let guitars = ['Strat','Frankast',9875]

let mixedData = ['EVh',true,457,/\w/g]

strinArr[0] = 'lk'
strinArr.push('sellawalawe')
guitars[3] = 89

let band :boolean[] = []
let mixed:[boolean,string,null,number]=[true,'john',null,78]
band.push(false)

mixed[0]=true

console.log(mixed)

let Guitarist :object

Guitarist=[]

const exampleObj ={
  prop1:true,
  prop2:'Mangal'
}

exampleObj.prop2='Hasan'

type Guitarist = {
  name:string,
  active?:boolean,
  albums:(string | number)[]
}

let john: Guitarist = {
  name:'John Lenon',
  active:false,
  albums:[45,'supra']
}

let reaper: Guitarist = {
  name:'Thon Mist',
  //active:true,
  albums:['I','IV']
}

reaper=john