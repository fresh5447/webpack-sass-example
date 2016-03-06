var React = require('react');

var tabsArray = ['orders', 'customers', 'products'];

var AdminNav = React.createClass({
  handleClick: function(i) {
    this.props.handleStateChange(i)
  },
  render: function() {
    var self = this;
    var links = tabsArray.map(function(i){
      return <li className="" onClick={self.handleClick.bind(this,i)} >{ i }</li>
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

module.exports = AdminNav;