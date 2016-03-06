var React = require('react');

var Signin = React.createClass({
  render: function() {
    return (
      <div>
        <form action="/login" method="POST" role="form">
          <legend>signin</legend>
          
          <div className="form-group">
            <label htmlFor="">email</label>
            <input name="email" type="email" className="form-control" id=""/>
          </div>
        
          <div className="form-group">
            <label htmlFor="">password</label>
            <input name="password" type="password" className="form-control" id=""/>
          </div>
          
        
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      )
  }
});

module.exports = Signin;