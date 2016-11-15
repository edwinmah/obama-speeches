var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Header = React.createClass({
  render: function() {
    <header role="banner" className="site-header">
      <h1>The header</h1>
    </header>
  }
});


var mapStateToProps = function(state, props) {
  return {

  };
};


var Container = connect(mapStateToProps)(Header);


module.exports = Container;
