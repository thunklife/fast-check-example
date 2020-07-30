const Joi = require('@hapi/joi')

const defaultOptions = {
  foo: false,
  bar: false,
  baz: false,
  qux: false
}

const optionsSchema = Joi.object({
  foo: Joi.boolean().default(false),
  bar: Joi.boolean().default(false),
  baz: Joi.boolean().default(false),
  qux: Joi.boolean().default(false)
}).default(defaultOptions)

module.exports = optionsSchema