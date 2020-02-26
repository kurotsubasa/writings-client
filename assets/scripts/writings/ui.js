'use strict'

const showWritingsTemplate = require('../templates/writing-listing.handlebars')
const showReadingsTemplate = require('../templates/reading-listing.handlebars')

const getWritingsSuccess = (data) => {
  console.log(data)
  clearWritings()
  const showWritingsHtml = showWritingsTemplate({writings: data.writings})
  $('.content').append(showWritingsHtml)
}

const getReadingsSuccess = (data) => {
  clearWritings()
  const showReadingsHtml = showReadingsTemplate({readings: data.readings})
  $('.content').append(showReadingsHtml)
}

const clearWritings = () => {
  $('.content').empty()
}

const updateWritingSuccess = () => {
  $('.closeBtn').trigger('click')
}

const createWritingSuccess = () => {
  $('.closeBtn').trigger('click')
  $('#createWriting').trigger('reset')
}

const failure = () => {
  $('#message').text('maybe next time teehee')
}

const updateReadingSuccess = () => {
  $('#message').text('list updated')
  $('#modifyWriting').trigger('reset')
}

const deleteReadingSuccess = () => {
  $('#message').text('entry deleted')
}

module.exports = {
  getWritingsSuccess,
  failure,
  clearWritings,
  updateWritingSuccess,
  createWritingSuccess,
  getReadingsSuccess,
  updateReadingSuccess,
  deleteReadingSuccess
}
