var React = require('react');

var Jumbotron = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>Hello, world!</h1>
          <p>Contents ...</p>
          <p>
            <a className="btn btn-primary btn-lg">Learn more</a>
          </p>
        </div>
      </div>
      )
  }
});

module.exports = Jumbotron;
