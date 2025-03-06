console.log("hello my dear")

const os = require('os')
const path = require('path')
const {add,substract,multiply,divide} = require('./math')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))

console.log(substract(8,9))
console.log(add(8,9))
console.log(divide(8,9))
console.log(multiply(8,9))