var React = require('react');
var Jumbotron = require('../Modules/Jumbotron');
var About = require('./About');
var Products = require('./Products');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1>Janets Sauce</h1>
              <p> Sauce so damn good, itll make you wanna slap yo mama </p>
            </div>
          </div>
        </div>
          <div className="parallax-container">
            <div className="parallax"><img src="http://www.lancefarrow.ca/wp-content/uploads/2014/06/triangle-background-17.png" /></div>
          </div>
          <div className="section white">
            <div className="row container">
              <h4 className="header">About</h4>
              <p className="grey-text text-darken-3 lighten-3 col s6"><img src="./images/janet.jpg" className="j"/></p>
              <p className="grey-text text-darken-3 lighten-3 col s6">Lorem Ipsum about how the sauce is homemade with care in good ol montana. It is made fresh from scratch every week. Andddd it is super duper good.</p>
            </div>
          </div>
          <div className="parallax-container">
            <div className="parallax"><img src="http://www.lancefarrow.ca/wp-content/uploads/2014/06/triangle-background-17.png"/></div>
          </div>
          <h4 className="header"> Products </h4> 
          <Products products={ this.props.products } addProduct={this.props.addProduct}/>

]
      </div>
      )
  }
});

module.exports = Home;