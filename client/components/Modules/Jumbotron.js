var React = require('react');

var Jumbotron = React.createClass({
  render: function() {
    return (
        <div className="container">
          <div className="row">
            <div className="col s6">
              <h1>Hello, world!</h1>
              <p> it would be nice if there was a big beautiful image behind here </p>
              <p>Contents ...</p>
            </div>
            <div className="col s6">
              <p>
                <a className="btn btn-primary btn-lg">Learn more</a>
              </p>
            </div>
          </div>
        </div>
      )
  }
});

module.exports = Jumbotron;
