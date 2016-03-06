var React = require('react');

var Products = React.createClass({
  handleProduct: function(id) {
    this.props.addProduct(id)
  },
  render: function() {
    var self = this;
    var product = this.props.products.map(function(p){
      return (
        <div className="panel panel-default col-xs-4">
          <div className= "panel-header">
            {p.name}
          </div>
          <div className="panel-body">
            <img src={p.img} className="dressing-img" />
          </div>
          <div className="panel-footer">
            ${p.price} {' '}
            <button onClick={self.handleProduct.bind(this, p._id)}>Add To Cart</button>
          </div>
        </div>
        )
    });
    return (
      <section>
        <div className="container">
          <div className="row">
            { product }
          </div>
        </div>
      </section>
      )
  }
});

module.exports = Products;