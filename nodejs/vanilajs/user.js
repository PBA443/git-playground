export default class User {
  constructor(email, name){
    this._id = email;
    this._name = name;
  }
  greetings(){
    return `Hi my name is ${this._name}.`
  }
}

export class Pizza {
  #size;
  #crust;
  constructor(pizzaSize){
    this.#size = pizzaSize;
    this.#crust = "original";
  }
  getCrust(){
    return this.#crust;
  }
  setCrust(pizzaCrust){
    this.#crust = pizzaCrust;
  }
}

export class SpecialPizza extends Pizza {
  constructor(pizzaSize){
    super(pizzaSize);
    this.type = "The Works";
  }
  slice(){
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
  }
}

const myPizza = new Pizza("large");
console.log(myPizza);

const fdPizza = new Pizza("medium");