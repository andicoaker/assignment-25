import React from 'react'

export const LoginComponent = React.createClass({

  render: function(){

    return (

      <header>
        <img>Insert chirp birdie img here!</img>
        <h1>Welcome to Chirp!</h1>
      </header>
      <hr/>
      <div className="col-md-6 col-md-offset-3">
        <div className="row">
          <div>New User</div>
          <div>
            <button className="btn btn-default" type="submit">Register Here</button>
          </div>
        </div>
        <div className="row">
          <div>Returning User</div>
          <div>
            <button className="btn btn-default" type="submit">Login Here</button>
          </div>
        </div>
      </div>

    )

  },
})
