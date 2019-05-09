# simplefp
## Function composition without hassle!
Inpsired by https://medium.com/javascript-inside/effective-data-validation-in-javascript-5c2f3e75249e



### API

```js
module.exports = {
  asyncPipe,
  pipe,
  compose,
  map,
  filter,
  reduce,
  apply,
  debug,
  recover,
}
```

### Example

```js
const user = {
  name: "Dimitri",
  cities: ["Berlin", "Stuttgart"]
}

const pipeline = pipe([
   // apply :: DefaultValue -> (a -> b) -> DefaultValue || b
      apply ("San Francisco") (x => x.cities[5]),
   // map :: (a -> b) -> a -> b
      map (x => x.toUpperCase()),
      apply ("B") (str => str.charAt(0)),
   // recover :: DefaultValue -> a -> DefaultValue || a
      recover ("Nothing")
    ]) (user),

console.log(pipeline)
// "S"
```
