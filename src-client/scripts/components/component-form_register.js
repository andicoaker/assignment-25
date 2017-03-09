import React from 'react'

export const RegisterComponent = React.createClass({

  render: function(){

    return (

      <header>
        <img>Insert chirp birdie img here!</img>
        <h1>Welcome to Chirp! New User Sign-up!</h1>
      </header>
      <hr/>
      <form className="form-horizontal">
        <div className="form-group">
          <label for="newUsername" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputUsername" placeholder="Username"</input>
          </div>
        </div>
        <div className="form-group">
          <label for="newPersonalName" className="col-sm-2 control-label">Personal Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPersonalName" placeholder="Personal Name"</input>
          </div>
        </div>
        <div className="form-group">
          <label for="loginPassword" class="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword" placeholder="Password"</input>
          </div>
        </div>
        <div className="form-group">
          <label for="avatarPic" class="col-sm-2 control-label">Upload Avatar Photo</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputAvatarURL" placeholder="Avatar Picture URL"</input>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
      </form>

    )

  },
})
