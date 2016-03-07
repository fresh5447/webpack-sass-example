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
    var total = 0;
    var cartDisplay = this.state.openOrder[0] > 0 ? items : <div> Your Cart Is Empty </div>;
    var items = this.state.openOrder.map(function(item){
      total += Number(item.price)
      return (
          <div className="panel panel-default">
            <div className="panel-body">
              <p> Name: { item.name } </p>
              <p> Price: { item.price } </p>
              <p> <img src={ item.img }/> </p>
            </div>
          </div>
        )
    })
    return (
      <div>
        <h3> Checkout your cart </h3>
          { cartDisplay }
          TOTAL: <h3> { total } </h3>
          <button type="button" className="btn btn-default">Check Out</button>
      </div>
      )
  }
});

module.exports = Cart;