var React = require('react');

var links = ['home', 'cart', 'shop', 'admin', 'signup', 'signin'];

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
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              { tabs }
              <li><button className="btn btn-primary pull-right" type="button">
                      cart <span Name="badge">{ basNum }</span>
                  </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )
  }
});

module.exports = Navbar;






