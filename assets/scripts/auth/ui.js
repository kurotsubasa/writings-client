'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Welcome ' + response.user.email + ', now please sign in :p')
  $('#sign-up').trigger('reset')
  // $('#sign-up').hide()
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text('Welcome back ' + response.user.email + ' :)')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('.token').val(store.user.token)
  $('#change-password').show()
  $('#signOut').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  // $('#sign-in').hide(
  // $('#signIn').hide()
  // $('#signUp').hide()
  // $('#signOut').show()
  // $('#changePassword').show()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('successfully changed password')
  $('#change-password').trigger('reset')
  // $('#changePassword').hide()
  // $('#change-password').hide()
}

const onChangePasswordFailure = function (response) {
  $('#message').text('password change failed')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#message').text('successfully signed out')
  $('#change-password').hide()
  $('#signOut').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  // $('#change-password').hide()
  // $('#changePassword').hide()
  // $('#signOut').hide()
  // $('#signUp').show()
  // $('#signIn').show()
}

const onSignOutFailure = function (response) {
  $('#message').text('failed to sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
