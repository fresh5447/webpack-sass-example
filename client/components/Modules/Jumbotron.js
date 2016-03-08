var React = require('react');

var Jumbotron = React.createClass({
  render: function() {
    return (
        <div className="container">
          <div className="row">
            <div className="col s6">
              <h1>Janets Sauce</h1>
              <p> Sauce so damn good, itll make you wanna slap yo mama </p>
            </div>
            <div className="col s6">
              <p>
                <img src="http://www.outside-oslo.com/wp-content/uploads/2013/07/Danish-Blue-Cheese-Salad-Horizontal.jpg"/>
              </p>
            </div>
          </div>
        </div>
      )
  }
});

module.exports = Jumbotron;
