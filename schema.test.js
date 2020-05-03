const fc = require('fast-check')
const optionsSchema = require('./schema')

describe('schema tests', () => {

  const booleanOptions = fc.record({
    foo: fc.boolean(),
    bar: fc.boolean(),
    baz: fc.boolean(),
    qux: fc.boolean()
  }, {withDeletedKeys: true})
  
  const valid = options => {
    const {error} = optionsSchema.validate(options)
    return error == null
  }

  const mixedOptions = fc.record({
    foo: fc.oneof(fc.integer(), fc.date(), fc.string(), fc.constant(null)),
    bar: fc.oneof(fc.integer(), fc.date(), fc.string(), fc.constant(null)),
    baz: fc.oneof(fc.integer(), fc.date(), fc.string(), fc.constant(null)),
    qux: fc.oneof(fc.integer(), fc.date(), fc.string(), fc.constant(null))
  })

  const invalid = options => {
    const {error} = optionsSchema.validate(options)
    return error != null
  }
  
  it('should validate', () => {
    fc.assert(fc.property(booleanOptions, valid)) 
  })

  it('should not validate', () => {
    fc.assert(fc.property(mixedOptions, invalid)) 
  })
})