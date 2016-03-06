//TODO: ASYNC GET each product in this.props.items

var React = require('react');

var Cart = React.createClass({
  getInitialState: function() {
    return {
      order: {}
      }
  },
  createOrder: function(){
    var order = {
      items: this.props.items
    };
    console.log("creating order: ", order);
    var self = this;
    $.ajax({
      url: '/api/orders',
      method: 'POST',
      data: order
    }).done(function(d){
      console.log('POSTED IT: ', d);
      self.setState({order: d});
    })
  },
  componentDidMount: function() {
    this.createOrder();
  },
  render: function() {
    return (
      <div>
        <h3> Heyyyyy I am a cart </h3>
        <button onClick={this.createOrder}> Submit </button>
      </div>
      )
  }
});

module.exports = Cart;
