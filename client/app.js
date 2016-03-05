var React = require('react');
var RD = require('react-dom');
var Test = require('./components/test');
require('./stylesheets/base.sass');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h3> Hello from App </h3>
        <Test/>
      </div>
      )
  }
});

RD.render(<App/>, document.getElementById('app'));