const fc = require('fast-check')

const identity = fc.property(fc.integer(), fc.constant(1), (a, b) => a * b === a)

console.log(fc.check(identity))

const commutative = fc.property(fc.integer(), fc.integer(), (a, b, c) => a * b === b * a)

fc.check(commutative)

const associative = fc.property(
  fc.integer(),
  fc.integer(),
  fc.integer(),
  (a, b, c) => (a * b) * c === a * (b * c)
)

console.log(fc.check(associative))

const distributive = fc.property(
  fc.integer(),
  fc.integer(),
  fc.integer(),
  (a, b, c) => (a + b) * c === (a * c) + (b * c) 
)

console.log(fc.check(distributive))