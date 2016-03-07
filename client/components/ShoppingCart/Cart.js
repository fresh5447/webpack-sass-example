var axios = require('axios');
var React = require('react');

var Cart = React.createClass({
  getInitialState: function() {
    return {
      openOrder: []
      }
  },
  populateCart: function() {
    var myArr = this.props.items.map(function(item){
      return axios.get('/api/products/' + item);
    });
    var self = this;
    axios.all(myArr)
      .then(function (data) {
        var finalArr = data.map(function(d){
          return d.data
        });
        self.setState({openOrder: finalArr})
    });  
  },
  createOrder: function(){
  },
  componentDidMount: function() {
    this.populateCart();
  },
  render: function() {
    console.log(this.state.openOrder);
    var fullCart = this.state.openOrder.map(function(item){
      return (
        <div>
          <h3> your cart </h3>
          { item }
        </div>
        )
    });
    var cartDisplay = this.state.openOrder.length > 0 ? fullCart : "No Items In Cart";
    return (
      <div>
        { cartDisplay }
      </div>
      )
  }
});

module.exports = Cart;
