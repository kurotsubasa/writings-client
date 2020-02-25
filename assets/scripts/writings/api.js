'use strict'

const config = require('../config')
const store = require('../store')

const getWritings = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/writings',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getWriting = (event) => {
  const id = $(event.target).data('id')
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/writings/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWriting = (data, id) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/writings/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const createWriting = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/writings',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteWriting = function (event) {
  const id = $(event.target).data('id')
  return $.ajax({
    url: `${config.apiUrl}/writings/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createReading = function (data) {
  return $.ajax({
    url: config.apiUrl + '/readings',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateReading = function (data, id) {
  return $.ajax({
    url: `${config.apiUrl}/readings/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getReadings = () => {
  return $.ajax({
    url: config.apiUrl + '/readings',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteReading = function (event) {
  const id = $(event.target).data('id')
  return $.ajax({
    url: `${config.apiUrl}/readings/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getWritings,
  getWriting,
  updateWriting,
  createWriting,
  deleteWriting,
  createReading,
  updateReading,
  getReadings,
  deleteReading
}
