var React = require('react');
var RD = require('react-dom');
var Navbar = require('./components/Modules/Navbar');
var Home = require('./components/HomePage/Home');
var Shop = require('./components/ShoppingCart/Shop');
var Cart = require('./components/ShoppingCart/Cart');
var AdminPage = require('./components/AdminPage/AdminPage');
var Footer = require('./components/Modules/Footer');
var Signup = require('./components/UserStuff/Signup');
var Signin = require('./components/UserStuff/Signin');
require('./stylesheets/base.sass');

var App = React.createClass({
  getInitialState: function() {
    return {
      showing: 'home',
      products: []
    }
  },
  loadProductsFromServer: function() {
    console.log("trying to load products from server");
    var self = this;
    $.ajax({
      url: this.props.url,
      method: 'GET'
    }).done(function(d){
      console.log("got products - about to update state");
      self.setState({products: d})
    })
  },
  componentDidMount: function() {
    console.log("component did mount executed");
    this.loadProductsFromServer()
  },
  showComponent: function() {
    switch(this.state.showing) {
      case 'home':
          return <Home products={this.state.products}/>
          break;
      case 'shop':
          return <Shop/>
          break;
      case 'admin':
          return <AdminPage/>
          break;
      case 'cart':
          return <Cart/>
          break;
      case 'signup':
          return <Signup/>
          break;
      case 'signin':
          return <Signin/>
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
        <Navbar toggleComponents={this.toggleComponents}/>
          {this.showComponent()}
        <Footer/>
      </div>
      )
  }
});

RD.render(<App url="/api/products"/>, document.getElementById('app'));