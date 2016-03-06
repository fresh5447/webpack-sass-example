var React = require('react');

var tabsArray = ['orders', 'customers', 'products'];

var ManageOrders = React.createClass({
  render: function() {
    return (
      <div>
        <h3> hello from orders </h3>
      </div>
      )
  }
});

var ManageCustomers = React.createClass({
  render: function() {
    return (
      <div>
        <h3> hello from customers </h3>
      </div>
      )
  }
});

var ManageProducts = React.createClass({
  render: function() {
    return (
      <div>
        <h3> hello from products </h3>
      </div>
      )
  }
});


var AdminNav = React.createClass({
  render: function() {
    var self = this;
    var links = tabsArray.map(function(i){
      return <li className="">{ i }</li>
    });
    return (
        <div className="container">
          <div className="row">
          <ol className="breadcrumb">
            { links }
          </ol>
          </div>
        </div>
      )
  }
});

var AdminPage = React.createClass({
  getInitialState: function() {
    showing: 'orders'
  },
  showComponent: function() {
    switch(this.state.showing) {
      case 'orders':
          return <Orders/>
          break;
      case 'customers':
          return <Customers/>
          break;
      case 'products':
          return <Products/>
          break;
    }
  },
  toggleComponents: function(toShow) {
    this.setState({
      showing: toShow
    });
  },
  render: function() {
    return (
      <div>
        <AdminNav toggleComponents={this.toggleComponents}/>
        <ManageOrders/>
        <ManageCustomers/>
        <ManageProducts/>
      </div>
      )
  }
})

module.exports = AdminPage;