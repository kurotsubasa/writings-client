'use strict'

const showWritingsTemplate = require('../templates/writing-listing.handlebars')

const getWritingsSuccess = (data) => {
  console.log(data)
  clearWritings()
  const showWritingsHtml = showWritingsTemplate({writings: data.writings})
  $('.content').append(showWritingsHtml)
}

const clearWritings = () => {
  $('.content').empty()
}

const updateWritingSuccess = () => {
  $('#modifyWriting').hide()
}

const createWritingSuccess = () => {
  $('#createWriting').hide()
}

const failure = () => {
  $('#message').text('maybe next time teehee')
}

module.exports = {
  getWritingsSuccess,
  failure,
  clearWritings,
  updateWritingSuccess,
  createWritingSuccess
}
