import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'

import {WelcomeView} from './views/view-welcome.js'


const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

  routes: {
    'chirps' : 'showChirpsComponent',
    'login' : 'showLoginComponent',
    'register' : 'showRegisterComponent',
    '' : 'showWelcomePageComponent'
  },

  showChirpsComponent: function(){
    ReactDOM.render(<h1>Chirps</h1>, WelcomeView, document.querySelector('#app-container'))
  },

  showLoginComponent: function(){
    ReactDOM.render(<h1>Log In</h1>,document.querySelector('#app-container'))
  },

  showRegisterComponent: function(){
    ReactDOM.render(<h1>Register</h1>, document.querySelector('#app-container'))
  },

  showWelcomePageComponent: function(){
    ReactDOM.render(<h1>Welcome</h1>, document.querySelector('#app-container'))
  },

})

new AppRouter()

// Roadmap to Success
//
// 1) Create the Backbone Router with the major app routes  'chirps' : 'showChirpsComponent' 'login' : 'showLoginComponent' 'register' : 'showRegisterComponent' '' (root) : 'showWelcomePageComponent'

// 2)  Create React View Components for Routes. Create the simplest HTML to make them functional
//
// LoginView
// should have input fields for email and password
// SignUpView
// should have fields for username, personalName,
// ChirpsView
// HomePageView

// 3) Create your AppViewController component
//
