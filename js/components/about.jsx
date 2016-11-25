var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Loading = require('./loading');


var About = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(
      actions.fetchAboutPage()
    );
  },

  getPageContent: function() {
    return { __html: this.props.aboutPage.content.rendered};
  },

  render: function() {
    if (!this.props.aboutPage.title || !this.props.aboutPage.content) {
      return (
        <section id="about" className="about column sm-one-half">
          <div className="about__entry--loading column full">Loading<Loading /></div>
        </section>
      );
    }

    return (
      <section id="about" className="about column sm-one-half">
        <h2 className="about__title column">{this.props.aboutPage.title.rendered}</h2>
        <div className="about__entry column" dangerouslySetInnerHTML={this.getPageContent()} />
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
