const fc = require('fast-check')

const identity = fc.property(fc.integer(), fc.constant(0), (a, b) => a + b === a)

console.log(fc.check(identity))

const commutative = fc.property(fc.integer(), fc.integer(), (a, b) => a + b === b + a)

console.log(fc.check(commutative))

const associative = fc.property(
  fc.integer(),
  fc.integer(),
  fc.integer(),
  (a, b, c) => (a + b) + c === a + (b + c)
)

console.log(fc.check(associative))