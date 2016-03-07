var React = require('react');

var ManageOrders = React.createClass({
  render: function() {
    var orders = this.props.orders.map(function(item){
      var products = item.items.map(function(p){
        return (
          <p> { p.name } </p>
          )
      });
      return (
        <div className="panel panel-default">
          <div className="panel-header">
            {item._id}
          </div>
          <div className="panel-body">
            { products }
          </div>
          <div className="panel-footer">
            Customer Name { item.total } Status
          </div>
        </div>
        )
    });
    return (
      <div className="container">
      <h3> Orders </h3>
      { orders }
      </div>
      )
  }
});

module.exports = ManageOrders;