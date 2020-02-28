'use strict'

const ifeqs = function (arg1, arg2, options) {
  console.table(arg2)
  const argh = arg2.find(arg => arg.material.id === arg1.id)

  if (arg1 === argh) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
}

module.exports = ifeqs
