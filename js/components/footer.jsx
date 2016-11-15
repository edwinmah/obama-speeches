var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Footer = React.createClass({
  render: function() {
    <footer role="contentinfo" className="site-footer">
      <p>The footer</p>
    </footer>
  }
});


var mapStateToProps = function(state, props) {
  return {

  };
};


var Container = connect(mapStateToProps)(Footer);


module.exports = Container;
