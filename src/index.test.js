const {describe} = require("riteway")
const {pipe, map, filter, reduce, apply, debug, recover} = require("./index.js")

const user = {
  name: "Dimitri",
  cities: ["Berlin", "Stuttgart"]
}


describe("pipe()", async assert =>
  assert({
    given: "an object with an array of cities", 
    should: "it should not error out",
    actual: pipe([
      apply ("San Francisco") (x => x.cities[5]),
      map (x => x.toUpperCase()),
      apply ("D") (str => str.charAt(0)),
      recover ("Nothing")
    ]) (user),
    expected: "S"
  })
)
