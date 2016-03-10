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
var Map = require('./GoogleMap');
require('./stylesheets/base.sass');

var MaterialApp = require('./material-app');

var myArrOfState = [];
var counter = 0;

var App = React.createClass({
  getInitialState: function() {
    return {
      showing: 'home',
      customers: [],
      allOrders: [],
      products: [],
      basket: [],
      user: {_id: "56db8b20dbf0214e27499185", __v: 0, local: Object}
    }
  },
  getUser: function() {
    var self = this;
    $.ajax({
      url: '/api/user',
      method: 'GET'
    }).done(function(data){
      self.setState({user: data})
    })
  },
  getOrders: function() {
    var self = this;
    $.ajax({
      url: '/api/orders',
      method: 'GET'
    }).done(function(data){
      self.setState({allOrders: data})
    })
  },
  getCustomers: function() {
    var self = this;
    $.ajax({
      url: '/api/customers',
      method: 'GET'
    }).done(function(data){
      self.setState({customers: data});
    })
  },
  loadProductsFromServer: function() {
    var self = this;
    $.ajax({
      url: this.props.url,
      method: 'GET'
    }).done(function(d){
      self.setState({products: d})
    })
  },
  componentDidMount: function() {
    this.loadProductsFromServer();
    this.getCustomers();
    this.getOrders();
    this.getUser();
  },
  addProduct: function(b) {
    myArrOfState.push(b);
    this.finalizeBasket();
    this.incrementCounter();
  },
  incrementCounter: function() {
    counter++
  },
  finalizeBasket: function(){
    this.setState({
      basket: myArrOfState
    })
  },
  showComponent: function() {
    switch(this.state.showing) {
      case 'home':
          return <Home products={this.state.products} addProduct={this.addProduct}/>
          break;
      case 'shop':
          return <Shop/>
          break;
      case 'admin':
          return <AdminPage orders={ this.state.allOrders } products={this.state.products} customers={this.state.customers}/>
          break;
      case 'cart':
          return <Cart user={ this.state.user } items={this.state.basket} />
          break;
      case 'signup':
          return <Signup/>
          break;
      case 'signin':
          return <Signin/>
          break;
      case 'materialapp':
          return <MaterialApp/>
          break;
      case 'map':
          return <GoogleMap/>
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
        <Navbar user={ this.state.user } toggleComponents={this.toggleComponents} basNum={counter}/>
          {this.showComponent()}
        <Footer/>
      </div>
      )
  }
});

RD.render(<App url="/api/products"/>, document.getElementById('app'));