var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link    = router.Link;


var SpeechList = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(
      actions.fetchSpeeches(this.props.speeches)
    );
  },

  getTitle: function(speechId) {
    return { __html: this.props.speeches[speechId].title.rendered};
  },

  getExcerpt: function(speechId) {
    return { __html: this.props.speeches[speechId].excerpt.rendered};
  },

  eachSpeech: function(speechId, i) {
    return (
      <li key={i}>
        <Link to={'/' + speechId} dangerouslySetInnerHTML={this.getTitle(speechId)} />
        <div className="excerpt" dangerouslySetInnerHTML={this.getExcerpt(speechId)} />
      </li>
    );
  },

  render: function() {
    if (!this.props.speeches) {
      return <div>loading...</div>;
    }

    return (
      <ul className="speech-list">
        {Object.keys(this.props.speeches).map(this.eachSpeech)}
      </ul>
    );
  }
});


var mapStateToProps = function(state, props) {
  return {
    speeches: state.speeches
  };
};


var Container = connect(mapStateToProps)(SpeechList);


module.exports = Container;
