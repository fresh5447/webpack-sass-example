var axios = require('axios');
var itemsInCart = ["56dba3d56bb89af736cfff42", "56dba3d56bb89af736cfff42", "56dba3d56bb89af736cfff42", "56dba3e16bb89af736cfff43", "56dba3ec6bb89af736cfff44"];

var React = require('react');

var Cart = React.createClass({
  getArrOfProducts: function(item) {
    return axios.get('/api/products/' + item);
  },
  getInitialState: function() {
    return {
      order: {}
      }
  },
  getEm: function() {
    axios.all([ itemsInCart.map(this.getArrOfProducts) ])
      .then(axios.spread(function (data) {
        console.log(data)
    }));
  },
  createOrder: function(){
    var order = {
      items: this.props.items
    };
    console.log(this.props.items);
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
    this.getEm()
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
