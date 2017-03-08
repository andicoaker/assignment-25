import React from 'react'

export const WelcomeComponent = React.createClass({

  render: function(){

    return (
      <header>
        <h1>Chirp!</h1>
        <img>Insert chirp birdie img here!</img>
      </header>
      <div>
        <div>New User</div>
        <div>
          <btn>Register Here</btn>
        </div>
      </div>
      <div>
        <div>Returning User</div>
        <div>
          <btn>Login Here</btn>
        </div>
      </div>

    )

  },

})
