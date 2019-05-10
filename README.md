# basefp
## Function composition without hassle!
Inspired by https://medium.com/javascript-inside/effective-data-validation-in-javascript-5c2f3e75249e



### API

```js
module.exports = {
  asyncPipe,  // asyncPipe  :: Foldable f => f (Promise -> Promise) -> a -> Promise a Error
  pipe,       // pipe       :: Foldable f => f (Any -> Any) -> a -> b
  compose,    // compose    :: (b -> c) -> (a -> b) -> (a -> c)
  map,        // map        :: Functor f => (a -> b) -> f a -> f b
  filter,     // filter     :: Filterable f => (a -> Boolean) -> f a -> f a
  reduce,     // reduce     :: Foldable f => (b, a -> b) -> b -> f a -> b
  encase,     // encase     :: DefaultValue -> (a -> b) -> DefaultValue || b
  log,        // log        :: a -> IO a
  recover,    // recover    :: DefaultValue -> a -> DefaultValue || a
}
```

### Example

```js
const user = {
  name: "Dimitri",
  cities: ["Berlin", "Stuttgart"]
}

const pipeline = pipe([
   // encase :: DefaultValue -> (a -> b) -> DefaultValue || b
      encase ("San Francisco") (x => x.cities[5]),
   // map :: (a -> b) -> a -> b
      map (x => x.toUpperCase()),
   // encase :: DefaultValue -> (a -> b) -> DefaultValue || b
      encase ("B") (str => str.charAt(0)),
   // recover :: DefaultValue -> a -> DefaultValue || a
      recover ("Nothing")
    ]) (user),

console.log(pipeline) // "S"
```
