//type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string|number)[]

type userId = stringOrNumber

type Guitarist = {
  name?:string,
  active:true,
  albums:stringOrNumberArray

}

//literal types

let myName:"Bega"

let userName: 'admin'|'user'|'guest'

userName='guest'

//functions

const add=(a:number,b:number):number => {
  return a+b
}

const logMsg = (message:any):void=>{
  console.log(message)
}

logMsg('Heloo')
logMsg(add(6,4))

let subtract = function (a:number,b:number):number{
  return a-b
}

//type mathFunction = (a:number,b:number)=>number
interface mathFunction {
  (a:number,b:number):number
}

let multiply:mathFunction = function(c,d){
  return c*d
}

logMsg(multiply(5,6))
 
//optional parameters

const addAll = (a:number,b:number,c?:number):number=>{
  if(typeof c !== 'undefined'){
    return a+c+b
  }
  return a+b
}
//default param value
const sumAll = (a:number=10,b:number,c:number=2):number=>{
  return a+b+c
}

logMsg(addAll(2,5,8))
logMsg(addAll(2,5))
logMsg(sumAll(2,5,8))
logMsg(sumAll(undefined,5))

//Rest parametes

const total = (...nums:number[]):number=>{
  return nums.reduce((prev,curr)=>prev+curr)
}

logMsg(total(2,5,8,7,9,6,3,4))

//never type

const createError = (errMsg:string):never=>{
  throw new Error(errMsg)
}

const infinite = ()=>{
  let i:number = 1
  while(true){
    i++
    if(i>100) break
  }
}

const isNumber = (value:any):boolean=>{
  return typeof value === 'number'
    ? true : false
}

const numberOrString = (value:number | string):string=>{
  if(typeof value === 'string') return 'string'
  if(isNumber(value)) return 'number'
  return createError('This shloud never happen')
}