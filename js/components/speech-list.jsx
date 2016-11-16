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

  viewSingleSpeech: function() {
    this.props.dispatch(
      actions.fetchSingleSpeech(this.props.speech.id)
    );
  },

  eachSpeech: function(speech, i) {
    return (
      <li key={i}>
        <Link to={'/' + speech.slug} onClick={this.viewSingleSpeech}>
          {speech.title.rendered}
        </Link>
      </li>
    );
  },

  render: function() {
    return (
      <ul className="speech-list">
        {this.props.speeches.map(this.eachSpeech)}
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
