var React = require('react');

var tabsArray = ['orders', 'customers', 'products'];

var AdminNav = React.createClass({
  handleClick: function(i) {
    this.props.handleStateChange(i)
  },
  render: function() {
    var self = this;
    var links = tabsArray.map(function(i){
      return <a  onClick={self.handleClick.bind(this,i)} className="breadcrumb">{ i }</a>
    });
    return (
        <nav className="container">
          <div className="nav-wrapper">
            <div className="col s12">
            { links }
            </div>
          </div>
        </nav>
      )
  }
});

module.exports = AdminNav;