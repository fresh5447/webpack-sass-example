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

var myArrOfState = [];
var counter = 0;

var App = React.createClass({
  getInitialState: function() {
    return {
      showing: 'home',
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
      console.log(data)
      self.setState({user: data})
    })
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
    this.loadProductsFromServer();
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
          return <AdminPage/>
          break;
      case 'cart':
          return <Cart user={ this.state.user } />
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
        <Navbar toggleComponents={this.toggleComponents} basNum={counter}/>
          {this.showComponent()}
          <button onClick={this.finalizeBasket}> Finalize State </button>
        <Footer/>
      </div>
      )
  }
});

RD.render(<App url="/api/products"/>, document.getElementById('app'));