'use strict'

const config = require('../config')
const store = require('../store')

const getWritings = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/writings'
  })
}

const getWriting = (id) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/writings/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: id
  })
}

const updateWriting = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/writings/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const createWriting = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const deleteWriting = function (id) {
  return $.ajax({
    url: config.apiUrl + '/books/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  getWritings,
  getWriting,
  updateWriting,
  createWriting,
  deleteWriting
}
