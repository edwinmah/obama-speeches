var React   = require('react');
var Search  = require('./search');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link    = router.Link;


var SpeechList = React.createClass({
  fetchData: function(locationQuery) {
    if (locationQuery) {
      this.props.dispatch(actions.fetchSearch(locationQuery));
    } else {
      this.props.dispatch(actions.fetchSpeeches(this.props.speeches));
    }
  },

  componentWillMount: function() {
    this.fetchData(this.props.location.query['filter[s]']);
  },

  componentWillReceiveProps: function(nextProps) {
    var locationQuery     = nextProps.location.query['filter[s]'];
    var prevLocationQuery = this.props.location.query['filter[s]'];

    if (locationQuery === prevLocationQuery) {
      return;
    }

    this.fetchData(locationQuery);
  },

  getTitle: function(speechId) {
    return { __html: this.props.speeches[speechId].title.rendered};
  },

  getExcerpt: function(speechId) {
    return { __html: this.props.speeches[speechId].excerpt.rendered};
  },

  eachSpeech: function(speechId, i) {
    var dateFormat = new Date(this.props.speeches[speechId].date);
    var datePretty = dateFormat.toDateString();

    return (
      <li key={i}>
        <Link to={'/' + speechId} dangerouslySetInnerHTML={this.getTitle(speechId)} />
        <p>Delivered on {datePretty}</p>
        <div className="excerpt" dangerouslySetInnerHTML={this.getExcerpt(speechId)} />
      </li>
    );
  },

  render: function() {
    if (!this.props.speeches) {
      return <div>loading...</div>;
    }
    if (Object.keys(this.props.speeches).length === 0) {
      return (
        <div>
          <Search />
          <p>No search results for <strong>{this.props.searchString}</strong>.</p>
        </div>
      );
    }
    return (
      <div>
        <Search />
        <ul className="speech-list">
          {Object.keys(this.props.speeches).map(this.eachSpeech)}
        </ul>
      </div>
    );
  }
});


var mapStateToProps = function(state, props) {
  return {
    speeches: state.speeches,
    searchString: state.searchString
  };
};


var Container = connect(mapStateToProps)(SpeechList);


module.exports = Container;
