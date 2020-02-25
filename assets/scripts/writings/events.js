'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')

const onGetWritings = (event) => {
  event.preventDefault()
  api.getWritings()
    .then(ui.getWritingsSuccess)
    .catch(ui.failure)
}

const onClearWritings = (event) => {
  event.preventDefault()
  ui.clearWritings()
}

const onDeleteWriting = (event) => {
  event.preventDefault()
  api.deleteWriting(event)
    .then(function () {
      ui.clearWritings()
      onGetWritings(event)
    })
    .catch(ui.failure)
}

const onGetCreateWritings = (event) => {
  event.preventDefault()
  $('#createWriting').show()
}

const onCreateWriting = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.createWriting(data)
    .then(function () {
      ui.clearWritings()
      onGetWritings(event)
      ui.createWritingSuccess()
    })
    .catch(ui.failure)
}

let updateId

const onGetUpdateWriting = (event) => {
  event.preventDefault()
  updateId = undefined
  $('#modifyWriting').show()
  const id = $(event.target).data('id')
  updateId = id
}

const onUpdateWriting = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.updateWriting(data, updateId)
    .then(function () {
      ui.clearWritings()
      onGetWritings(event)
      ui.updateWritingSuccess()
    })
    .catch(ui.failure)
}

const onCreateReading = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = {
    'reading': {
      'user_id': store.user.id,
      'writing_id': id,
      'status': 'reading'
    }
  }
  api.createReading(data)
    .then(ui.onCreateReadingSuccess)
    .catch(ui.failure)
}

const onDeleteReading = (event) => {
  event.preventDefault()
  api.deleteReading(event)
    .then(ui.deleteReadingSuccess)
    .catch(ui.failure)
}

const onGetReadings = (event) => {
  event.preventDefault()
  api.getReadings()
    .then(ui.getReadingsSuccess)
    .catch(ui.failure)
}

const onUpdateReadingDropped = (event) => {
  event.preventDefault()
  const writingId = $(event.target).data('material.id')
  const id = $(event.target).data('id')
  const data = {
    'reading': {
      'user_id': store.user.id,
      'writing_id': writingId,
      'status': 'dropped'
    }
  }
  api.updateReading(data, id)
    .then(ui.updateReadingSuccess)
    .catch(ui.failure)
}

const onUpdateReadingFinished = (event) => {
  event.preventDefault()
  const writingId = $(event.target).data('material.id')
  const id = $(event.target).data('id')
  const data = {
    'reading': {
      'user_id': store.user.id,
      'writing_id': writingId,
      'status': 'finished'
    }
  }
  api.updateReading(data, id)
    .then(ui.updateReadingSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getWritingsButton').on('click', onGetWritings)
  $('#clearWritingsButton').on('click', onClearWritings)
  $('#createWritingsButton').on('click', onGetCreateWritings)
  $('#getReadingsButton').on('click', onGetReadings)
  // $('#clearReadingsButton').on('click', onClearReadings)
  $('#createWriting').on('submit', onCreateWriting)
  $('#modifyWriting').on('submit', onUpdateWriting)
  $('#modifyWriting').hide()
  $('#createWriting').hide()
  $('.content').on('click', '.update-writing', onGetUpdateWriting)
  $('.content').on('click', '.remove-writing', onDeleteWriting)
  $('.content').on('click', '.create-reading', onCreateReading)
  $('.content').on('click', '.update-reading-dropped', onUpdateReadingDropped)
  $('.content').on('click', '.update-reading-finished', onUpdateReadingFinished)
  $('.content').on('click', '.delete-reading', onDeleteReading)
}

module.exports = {
  addHandlers
}
