'use strict'

const ifeqs = function (arg1, arg2, options) {
  let argi = arg2.find(arg => arg.material.id === arg1.id)

  if (argi === undefined) {
    argi = {
      material: {
        id: -1
      }
    }
  }

  if (arg1.id === argi.material.id) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
}

module.exports = ifeqs
