var React = require('react');

var ProductForm = React.createClass({
  render: function() {
    return (
      <form action="/api/products" method="POST" role="form">
        <legend>Add Product</legend>
      
        <div className="form-group">
          <label htmlFor="">name</label>
          <input name="name" type="text" className="form-control" id=""/>
        </div>
        
        <div className="form-group">
          <label htmlFor="">price</label>
          <input name="price" type="text" className="form-control" id=""/>
        </div>

        <div className="form-group">
          <label htmlFor="">img</label>
          <input name="img" type="text" className="form-control" id=""/>
        </div>
        
        <div className="form-group">
          <label htmlFor="">quantity</label>
          <input name="quantity" type="number" className="form-control" id=""/>
        </div>
        
      
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      )
  }
})

var Inventory = React.createClass({
  render: function() {
    var items = this.props.products.map(function(p){
      return (
            <tr>
              <td>{ p.name }</td>
              <td>{ p.price }</td>
              <td>{ p.quantity }</td>
              <td> 77 </td>
            </tr>
        )
    })
    return (
      <div>
        <table className="table table-hover">
          <thead><h4> Inventory </h4>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Recently Sold </th>
            </tr>
          </thead>
          <tbody>
            { items }
          </tbody>
        </table>
      </div>
      )
  }
});


var ManageProducts = React.createClass({
  render: function() {
    return (
      <div>
        <Inventory products={this.props.products}/>
        <ProductForm />
      </div>
      )
  }
});

module.exports = ManageProducts;