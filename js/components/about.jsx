var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


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
      return <div>loading...</div>;
    }

    return (
      <section id="about" className="about column sm-one-half">
        <h2 className="about__title column full">{this.props.aboutPage.title.rendered}</h2>
        <div className="about__entry column full" dangerouslySetInnerHTML={this.getPageContent()} />
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
