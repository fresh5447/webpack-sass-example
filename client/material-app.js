var React = require('react');
var ReactDOM = require('react-dom');

var RaisedButton = require('material-ui/lib/raised-button');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1> Hi from material app </h1>
        <RaisedButton label="Default" />
      </div>
      )
  }
});

module.exports = App;