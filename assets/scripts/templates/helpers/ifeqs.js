'use strict'

const ifeqs = function (arg1, arg2, options) {
  let arg3
  for (let i = 0; i < arg2.length; i++) {
    arg3 = arg2[0]
    if (arg1 === arg2[i]) {
      arg3 = arg2[i]
      return arg3
    } else {
      arg3 = arg2[0]
    }
  }

  if (arg1 === arg3) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
}

module.exports = ifeqs
