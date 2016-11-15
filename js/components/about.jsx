var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var About = React.createClass({
  render: function() {
    <section id="about">
      <h2>About this site</h2>
      <p>Sed posuere consectetur est at lobortis. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    </section>
  }
});


var mapStateToProps = function(state, props) {
  return {

  };
};


var Container = connect(mapStateToProps)(About);


module.exports = Container;
