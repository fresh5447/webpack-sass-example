var React = require('react');
var Jumbotron = require('./jumbotron');
var About = require('./about');
var Products = require('./products');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Jumbotron/>
        <About/>
        <Products/>
      </div>
      )
  }
});

module.exports = Home;