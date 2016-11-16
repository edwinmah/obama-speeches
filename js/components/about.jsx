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
    console.log(this.props.aboutPage);
    return (
      <section id="about">
        <h2>{this.props.aboutPage.title.rendered}</h2>
        {this.props.aboutPage.content.rendered}
      </section>
    );
  }
});


var mapStateToProps = function(state, props) {
  return {
    aboutPage: state.aboutPage
  };
};


var Container = connect(mapStateToProps)(About);


module.exports = Container;
