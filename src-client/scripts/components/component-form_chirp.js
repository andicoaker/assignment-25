import React from 'react'

export const NewChirpComponent = React.createClass({

  render: function(){

    return (

      <header>
        <img>Insert chirp birdie img here!</img>
        <h1>Check out the Chirps!</h1>
      </header>
      <hr/>
      <form>
        <div className="form-group">
          <label for="newChirp" class="col-sm-2 control-label">Your Chirp!</label>
          <div className="col-sm-10">
            <textarea class="form-control" rows="3" placeholder="Share Your Chirp! with the world!"></textarea>
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
