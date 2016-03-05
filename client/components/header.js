var React = require('react');
require('./stylesheets/modules/header');
require('./stylesheets/utilities/clearfix');

var Header = React.createClass({
  render: function() {
    return (
      <div className='header u-clearfix'>
        <h3> Header </h3>
      </div>
      )
  }
});

module.exports = Header;
