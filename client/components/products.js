var React = require('react');

var Products = React.createClass({
  render: function() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  Basic product example
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  Basic product example
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  Basic product example
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
  }
});

module.exports = Products;