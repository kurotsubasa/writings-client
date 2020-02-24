'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')

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

const addHandlers = () => {
  $('#getWritingsButton').on('click', onGetWritings)
  $('#clearWritingsButton').on('click', onClearWritings)
  $('#createWritingsButton').on('click', onGetCreateWritings)
  $('#createWriting').on('submit', onCreateWriting)
  $('#modifyWriting').on('submit', onUpdateWriting)
  $('#modifyWriting').hide()
  $('#createWriting').hide()
  $('.content').on('click', '.update-writing', onGetUpdateWriting)
  $('.content').on('click', '.remove-writing', onDeleteWriting)
}

module.exports = {
  addHandlers
}
