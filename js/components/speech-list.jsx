var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var SpeechList = React.createClass({
  render: function() {

  }
});


var mapStateToProps = function(state, props) {
  return {

  };
};


var Container = connect(mapStateToProps)(SpeechList);


module.exports = Container;
