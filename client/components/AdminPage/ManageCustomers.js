var React = require('react');

var ManageCustomers = React.createClass({
  render: function() {
    var customer = this.props.customers.map(function(item){
      return (
            <tr>
              <td> { item.local.username } </td>
              <td> { item.local.email } </td>
              <td> { new Date().getTime() } </td>
            </tr>
        )
    });
    return (
      <div>
        <table className="table table-hover">
          <thead> <h4> Customers </h4>
            <tr>
              <th>username</th>
              <th>email</th>
              <th>recent order </th>
            </tr>
          </thead>
          <tbody>
            { customer }
          </tbody>
        </table>
      </div>
      )
  }
});

module.exports = ManageCustomers;