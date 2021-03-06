'use strict'

const showWritingsTemplate = require('../templates/writing-listing.handlebars')
const showReadingsTemplate = require('../templates/reading-listing.handlebars')
const store = require('../store.js')

const getWritingsSuccess = (data) => {
  clearWritings()
  const userReadings = (store.readings).filter(reading => (reading.editable === true))
  console.log(userReadings)
  const showWritingsHtml = showWritingsTemplate({writings: store.writings, readings: userReadings})
  $('.content').prepend(showWritingsHtml)
}

const getReadingsSuccess = (data) => {
  clearWritings()
  const userReadings = (data.readings).filter(reading => (reading.editable === true))
  const fakeBook = { id: 0, material: { name: 'Read more', author: 'The world', genre: 'Forever' } }
  if (userReadings < 1) {
    userReadings.push(fakeBook)
  }
  const showReadingsHtml = showReadingsTemplate({readings: userReadings})
  $('.content').prepend(showReadingsHtml)
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
  $('#message').text('entry added')
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

const createReadingSuccess = () => {
  $('#message').text('Added to your list')
}

module.exports = {
  getWritingsSuccess,
  failure,
  clearWritings,
  updateWritingSuccess,
  createWritingSuccess,
  getReadingsSuccess,
  updateReadingSuccess,
  deleteReadingSuccess,
  createReadingSuccess
}
