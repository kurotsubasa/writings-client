'use strict'

const showWritingsTemplate = require('../templates/writing-listing.handlebars')

const getWritingsSuccess = (data) => {
  console.log(data)
  const showWritingsHtml = showWritingsTemplate({writings: data.writings})
  $('.content').append(showWritingsHtml)
}

const clearWritings = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getWritingsSuccess,
  failure,
  clearWritings
}
