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
    var items = this.state.openOrder.map(function(item){
      total += Number(item.price)
      return (
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={item.img} className=""/>
              <span className="card-title">{ item.name }}</span>
            </div>
            <div className="card-content">
              <p>{ item.price }</p>
            </div>
            <div className="card-action">
              <button className="btn btn-primary btn-lg">Remove Item</button>
            </div>
          </div>
        </div>
        )
    })
    return (
      <div className="row">
        <h3> Checkout your cart </h3>
          TOTAL: <h3> { total } </h3>
      </div>
      )
  }
});

module.exports = Cart;