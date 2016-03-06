var React = require('react');
var ManageOrders = require('./ManageOrders');
var ManageCustomers = require('./ManageCustomers');
var ManageProducts = require('./ManageProducts');
var AdminNav = require('./AdminNav');

var AdminPage = React.createClass({
  getInitialState: function() {
    return {
      adminShowing: 'orders'
    }
  },
  handleStateChange: function(i) {
    this.setState({adminShowing: i})
  },
  toggleAdminComponents: function() {
    switch(this.state.adminShowing) {
      case 'orders':
          return <ManageOrders />
          break;
      case 'products':
          return <ManageProducts/>
          break;
      case 'customers':
          return <ManageCustomers/>
          break;
    }
  },
  render: function() {
    return (
      <div>
        <AdminNav handleStateChange={this.handleStateChange}/>
        {this.toggleAdminComponents()}
      </div>
      )
  }
})

module.exports = AdminPage;