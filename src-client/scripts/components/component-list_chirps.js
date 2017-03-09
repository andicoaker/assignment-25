import React from 'react'

export const ChirpsListComponent = React.createClass({

  render: function(){

    return (

      <header>
        <img>Insert chirp birdie img here!</img>
        <h1>Welcome to Chirp! New User Sign-up!</h1>
      </header>
      <hr/>
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="Insert URL Source HERE" alt="..."</img>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Insert Username Here!</h4>
          Insert submitted chirp text here!
        </div>
      </div>
    )
  },
})
