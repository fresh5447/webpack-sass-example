var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
            PICTURE
            </div>
            <div className="col-xs-6">
            ABOUT CONTENT
            </div>
          </div>
        </div>
      </section>
      )
  }
});

module.exports = About;