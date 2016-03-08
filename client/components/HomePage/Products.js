var React = require('react');

var Products = React.createClass({
  handleProduct: function(id) {
    this.props.addProduct(id)
  },
  render: function() {
    var self = this;
    var product = this.props.products.map(function(p){
      return (
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={p.img} className=""/>
              <span className="card-title">{p.name}</span>
            </div>
            <div className="card-content">
              <p>This is a description of the card that heas yet to be created</p>
            </div>
            <div className="card-action">
              <button className="btn btn-primary btn-lg" onClick={self.handleProduct.bind(this, p._id)}>Add To Cart</button>
            </div>
          </div>
        </div>
        )
    });
    return (
          <div className="row">
            { product }
          </div>
      )
  }
});

module.exports = Products;







