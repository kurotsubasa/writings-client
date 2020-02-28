'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')

const onGetWritings = (event) => {
  event.preventDefault()
  api.getWritings()
    .then(function (data) {
      store.writings = data.writings
    })
    .then(api.getReadings)
    .then(function (data) {
      store.readings = data.readings
    })
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

const onCreateWriting = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

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
    .then(function () {
      ui.clearWritings()
      ui.createReadingSuccess()

    })
    .catch(ui.failure)
}

const onDeleteReading = (event) => {
  event.preventDefault()
  api.deleteReading(event)
    .then(function () {
      ui.deleteReadingSuccess()
      ui.clearWritings()
      onGetReadings(event)
    })
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
    .then(function () {
      ui.updateReadingSuccess()
      ui.clearWritings()
      onGetReadings(event)
    })
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
    .then(function () {
      ui.updateReadingSuccess()
      ui.clearWritings()
      onGetReadings(event)
    })
    .catch(ui.failure)
}

const onUpdateReadingReading = (event) => {
  event.preventDefault()
  const writingId = $(event.target).data('material.id')
  const id = $(event.target).data('id')
  const data = {
    'reading': {
      'user_id': store.user.id,
      'writing_id': writingId,
      'status': 'reading'
    }
  }
  api.updateReading(data, id)
    .then(function () {
      ui.updateReadingSuccess()
      ui.clearWritings()
      onGetReadings(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getWritingsButton').on('click', onGetWritings)
  $('#clearWritingsButton').on('click', onClearWritings)
  $('#getReadingsButton').on('click', onGetReadings)
  // $('#clearReadingsButton').on('click', onClearReadings)
  $('#createWriting').on('submit', onCreateWriting)
  $('#modifyWriting').on('submit', onUpdateWriting)
  $('#changePasswordBtn').hide()
  $('#createWritingBtn').hide()
  $('#navbar').hide()
  // $('#modifyWriting').hide()
  // $('#createWriting').hide()
  $('.content').on('click', '.update-writing', onGetUpdateWriting)
  $('.content').on('click', '.remove-writing', onDeleteWriting)
  $('.content').on('click', '.create-reading', onCreateReading)
  $('.content').on('click', '.update-reading-dropped', onUpdateReadingDropped)
  $('.content').on('click', '.update-reading-finished', onUpdateReadingFinished)
  $('.content').on('click', '.update-reading-reading', onUpdateReadingReading)
  $('.content').on('click', '.delete-reading', onDeleteReading)
}

module.exports = {
  addHandlers
}
