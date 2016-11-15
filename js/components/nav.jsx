var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Navigation = React.createClass({
  render: function() {
    <nav>
      <ul>
        <li>Speeches</li>
        <li>About</li>
      </ul>
    </nav>
  }
});


var mapStateToProps = function(state, props) {
  return {

  };
};


var Container = connect(mapStateToProps)(Navigation);


module.exports = Container;
