const {describe} = require("riteway")
const {pipe, map, filter, reduce, encase, debug, recover} = require("./index.js")

const user = {
  name: "Dimitri",
  cities: ["Berlin", "Stuttgart"]
}


describe("pipe()", async assert =>
  assert({
    given: "an object with an array of cities", 
    should: "it should not error out and return a value",
    actual: pipe([
      encase ("San Francisco") (x => x.cities[5]),
      map (x => x.toUpperCase()),
      encase ("B") (str => str.charAt(0)),
      recover ("Nothing")
    ]) (user),
    expected: "S"
  })
)
