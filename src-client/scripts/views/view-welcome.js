import React from 'react'
import {Navbar} from '../components/component-navbar.js'
import {HeroComponent} from '../components/component-welcome.js'

export const WelcomeView = React.createClass({

  render: function(){
		// console.log('from <HomeView/>', this.props.shoutOutsListData)
		return (

			<div className="container">
					<WelcomeComponent/>

			</div>
		)
	}
})
