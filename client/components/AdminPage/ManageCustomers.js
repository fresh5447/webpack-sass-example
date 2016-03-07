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
      <div className="container">
        <table className="">
          <thead> <h4> Customers </h4>
            <tr>
              <th className="data-field">username</th>
              <th className="data-field">email</th>
              <th className="data-field">recent order </th>
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