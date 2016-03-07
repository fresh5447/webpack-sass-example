var React = require('react');

var links = ['home', 'shop', 'admin', 'signup', 'signin'];

var Navbar = React.createClass({

  handleClick: function(i) {
    this.props.toggleComponents(i)
  },
  render: function() {
    var self = this;
    var basNum = this.props.basNum;
    var tabs = links.map(function(i){
      return <li><a onClick={self.handleClick.bind(this, i)} >{ i }</a></li>
    });
    return (
     <nav>
        <div className="navbar-fixed">
          <a href="#!" className="brand-logo">Wanets</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            { tabs }
            <li><a onClick={self.handleClick.bind(this, 'cart')}>cart <span className="items badge">{ basNum }</span></a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            { tabs }
            <li><a onClick={self.handleClick.bind(this, 'cart')}>cart <span className="items badge">{ basNum }</span></a></li>

          </ul>
        </div>
      </nav>
        
      )
  }
});

module.exports = Navbar;






