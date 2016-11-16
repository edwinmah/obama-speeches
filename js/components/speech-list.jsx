var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link    = router.Link;


var SpeechList = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(
      actions.fetchSpeeches()
    );
  },

  viewSingleSpeech: function() {
    this.props.dispatch(
      actions.fetchSingleSpeech(this.props.speech.id)
    );
  },

  render: function() {
    var speeches = this.props.speeches.map(
      function(speech, i) {
        return (
          <li key={i}>
            <Link to={'/' + speech.slug} onClick={this.viewSingleSpeech}>
              {speech.title.rendered}
            </Link>
          </li>
        );
      }
    );

    return (
      <ul className="speech-list">
        {speeches}
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
