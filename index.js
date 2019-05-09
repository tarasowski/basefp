//https://medium.com/javascript-inside/effective-data-validation-in-javascript-5c2f3e75249e
const { pluck } = require("./pluck.js")
const asyncPipe = fns => x => fns.reduce(async (v, f) => f(await v), x)
const pipe = fns => x => fns.reduce((v, f) => f(v), x)
const compose = fns => x => fns.reduceRight((v, f) => f(v), x)
const filter = f => x => Array.isArray(x) ? x.filter(f) : x
const map = f => x => 
  Array.isArray(x) 
    ? x.map(f) 
    : Object.prototype.toString.call(x) === "[object String]" 
      ? f(x)
      : Object.prototype.toString.call(x) === "[object Object]" 
        ? f(x)
        : x

const reduce = f => defaultValue => x => Array.isArray(x) ? x.reduce(f, defaultValue) : x
const log = value => console.log(value) || value

module.exports = {
  asyncPipe,
  pipe,
  compose,
  filter,
  map,
  filter,
  reduce,
  pluck
  log,
}





