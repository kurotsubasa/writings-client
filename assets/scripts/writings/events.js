'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

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

// const onGetWriting = (event) => {
//   event.preventDefault()
//   api.getWriting()
//     .then(ui.getWritingSuccess)
//     .catch(ui.getWritingFailure)
// }

const onDeleteWriting = (event) => {
  event.preventDefault()
  api.deleteWriting()
    .then(ui.deleteWritingSuccess)
    .catch(ui.deleteWritingFailure)
}
//
// const onUpdateWriting = (event) => {
//   event.preventDefault()
//   api.updateWriting()
//     .then(ui.updateWritingSuccess)
//     .catch(ui.updateWritingFailure)
// }

const addHandlers = () => {
  $('#getWritingsButton').on('click', onGetWritings)
  $('#clearWritingsButton').on('click', onClearWritings)
  // $('#updateWritingButton').on('click', onUpdateWriting)
  $('.content').on('click', '.remove-writing', onDeleteWriting)
}

module.exports = {
  addHandlers
}
