var React = require('react');
var Jumbotron = require('../Modules/Jumbotron');
var About = require('./About');
var Products = require('./Products');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Jumbotron/>
        <Products products={ this.props.products } addProduct={this.props.addProduct}/>
      </div>
      )
  }
});

module.exports = Home;