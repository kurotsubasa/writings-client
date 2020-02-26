'use strict'

const ifeq = function (arg1, arg2, options) {
  if (arg1 === arg2) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
}

module.exports = ifeq
