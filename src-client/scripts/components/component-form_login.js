import React from 'react'

export const LoginComponent = React.createClass({

  render: function(){

    return (

      <header>
        <h1>Chirp! Returning User Login</h1>
        <img>Insert chirp birdie img here!</img>
      </header>
      <hr/>
      <form className="form-horizontal">
        <div className="form-group">
          <label for="loginUserName" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputEmail" placeholder="Username"</input>
          </div>
        </div>
        <div className="form-group">
          <label for="loginPassword" class="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password"</input>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>

    )

  },
})
