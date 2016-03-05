var React = require('react');
var RD = require('react-dom');
var Navbar = require('./components/navbar');
var Home = require('./components/home');
var Shop = require('./components/shop');
var Cart = require('./components/cart');
var Footer = require('./components/footer');
require('./stylesheets/base.sass');

var App = React.createClass({
  getInitialState: function() {
    return {
      showing: 'home'
    }
  },
  showComponent: function() {
    switch(this.state.showing) {
      case 'home':
          return <Home/>
          break;
      case 'shop':
          return <Shop/>
          break;
      case 'cart':
          return <Cart/>
          break;
    }
  },
  toggleComponents: function(toShow) {
    this.setState({
      showing: toShow
    });
  },
  render: function() {
    return (
      <div>
        <Navbar toggleApp={this.toggleApps}/>
          {this.showComponent()}
        <Footer/>
      </div>
      )
  }
});

RD.render(<App/>, document.getElementById('app'));