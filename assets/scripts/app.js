'use strict'

const writingEvents = require('./writings/events.js')
const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#signOut').hide()
  $('#change-password').hide()

  // $('#change-password').hide()
  // $('#sign-out').hide()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#signUp').on('click', authEvents.onSignUpButton)
  // $('#signIn').on('click', authEvents.onSignInButton)
  // $('#changePassword').on('click', authEvents.onChangeButton)
  // $('#signOut').on('click', authEvents.onSignOut)
  // $('#signOut').hide()
  // $('#changePassword').hide()
  writingEvents.addHandlers()
})
