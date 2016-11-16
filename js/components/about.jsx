var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var About = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(
      actions.fetchAboutPage()
    );
  },

  render: function() {
    <section id="about">
      <h2>{this.props.page.title.rendered}</h2>
      {this.props.page.content.rendered}
    </section>
  }
});


var mapStateToProps = function(state, props) {
  return {

  };
};


var Container = connect(mapStateToProps)(About);


module.exports = Container;
