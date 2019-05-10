const { encase } = require("./encase.js")
const asyncPipe = fns => x => fns.reduce(async (v, f) => f(await v), x)
const pipe = fns => x => fns.reduce((v, f) => f(v), x)
const compose = f => g => x => f(g(x))
const filter = f => x => x === undefined || x === null ? x : Array.isArray(x) ? x.filter(f) : x
const map = f => x => 
  x === undefined || x === null
   ? x
    : Array.isArray(x)
      ? x.map(f)
        : x

const reduce = f => defaultValue => x => 
  x === undefined || x === null 
    ? x
    : Array.isArray(x) 
    ? x.reduce(f, defaultValue) 
    : x

const log = value => console.log(value) || value
const recover = defaultValue => v => v === undefined || v === null ? defaultValue : v

module.exports = {
  asyncPipe,
  pipe,
  compose,
  map,
  filter,
  reduce,
  encase,
  log,
  recover,
}





