const check = (fn, errorMsg, type) => data => ({
    cata: branch => fn(data) ? branch.right(fn(data), type) : branch.left(errorMsg, type),
    type
})

const getValue = check(a => {
  try {
    return a()
  } catch (e) {
    return false
  }
});

const pluck = defaultValue => fn => data => {
  return getValue(() => fn(data)).cata({
    left: () => defaultValue,
    right: a => a
  })
}

module.exports = {pluck}
