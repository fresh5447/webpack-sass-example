var React = require('react');

var links = ['home', 'shop', 'admin', 'materialapp','map'];

var Navbar = React.createClass({

  handleClick: function(i) {
    this.props.toggleComponents(i)
  },
  showUser: function() {
    var self = this;
    var u = "no user" || "please sign in"
    if(this.props.user.local.email){
         return (
          <ul id="dropdown1" className="dropdown-content">
              <li><a href="#!">my account</a></li>
              <li><a href="/signout">signout</a></li>
            </ul>);
          
    } else {
        return (
          <ul id="dropdown1" className="dropdown-content">
              <li><a onClick={self.handleClick.bind(this, 'signin')} >signin</a></li>
              <li><a onClick={self.handleClick.bind(this, 'signup')} >signup</a></li>
            </ul>
          )
 
    }
  },
  render: function() {
    console.log(this.props.user)
    var me = "no" || "sign in"
    var self = this;
    var basNum = this.props.basNum;
    var tabs = links.map(function(i){
      return <li><a onClick={self.handleClick.bind(this, i)} >{ i }</a></li>
    });
    return (
      <div className="navbar-fixed">
       <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Wanets</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="side-nav" id="mobile-demo">

              { tabs }
              <li><a onClick={self.handleClick.bind(this, 'cart')}>cart <span className="items badge">{ basNum }</span></a></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              { tabs }
              <li><a onClick={self.handleClick.bind(this, 'cart')}>cart <span className="items badge">{ basNum }</span></a></li>
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1">{ me }<i className="material-icons right"></i></a></li>
            </ul>

            
            

          </div>
        </nav>
      </div>
        
      )
  }
});

module.exports = Navbar;






