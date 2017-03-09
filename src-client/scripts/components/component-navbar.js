import React from 'react'

export const NavbarComponent = React.createClass({

  render: function(){

    return (

      <header>
        <img>Insert chirp birdie img here!</img>
        <h1>Welcome to Chirp!</h1>
      </header>
      <div className="navbar">
        <div class="btn-group btn-group-justified" role="group" aria-label="...">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default">Left</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default">Middle</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default">Right</button>
          </div>
        </div>
      </div>

    )

  },
})
