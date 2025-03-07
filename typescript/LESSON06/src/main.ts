class Coder {

  secondLang!: string
  
  constructor(
    public readonly name:string,
    public music:string,
    private age:number,
    protected lang:string = 'Typescript'
  ){
    this.name = name
    this.music = music
    this.age = age 
    this.lang = lang
  }
  public getAge(){
    return `Hello, I'm ${this.age}`
  }
}

const Bega = new Coder('Dave','Rock',56)
console.log(Bega.getAge())
//console.log(Bega.lang)

class WebDev extends Coder {
  constructor(
    public computer:string,
    name:string,
    music:string,
    age:number
  ){
    super(name,music,age)
    this.computer = computer
  }
  public getLanguage(){
    return `I write ${this.lang}`
  }
}

const Sara = new WebDev('MacBook Pro','Sara','Jazz',26)
console.log(Sara.getLanguage())
//console.log(Sara.age)
//console.log(Sara.lang)

///////---------------------------------/////////////////


interface Musician {
  name:string,
  instrument:string,
  play(action:string):string
}

class Guitarist implements Musician {
  name:string
  instrument: string

  constructor(name:string,instrument:string){
    this.name = name
    this.instrument = instrument
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page= new Guitarist('Jimmy','guitar')

console.log(Page.play('pluck'))

///////////////--------------------//////////////////////

class Peeps {
  static count:number = 0

  static getCount(): number {
    return Peeps.count
  }
  public id:number
  constructor(public name:string){
    this.name = name
    this.id = ++Peeps.count
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Conny')

console.log(Peeps.count)

///////////////-----------------------////////////////////

class Bands {
  private dataState: string[]

  constructor(){
    this.dataState = []
  }
  public get data():string[] {
    return this.dataState
  }

  public set data(value:string[]){
    if(Array.isArray(value)&& value.every(el=>typeof el ==='string')){
      this.dataState = value
      return
    }else throw new Error ('Param is not an array of string')
  }
}

const MyBand = new Bands()
MyBand.data = ['Forn Youl','Led Cnm']
console.log(MyBand.data)
MyBand.data = [...MyBand.data,'Top Lil']
console.log(MyBand.data)