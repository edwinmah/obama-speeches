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
    this.fetchData(this.props.location.query.search);
  },

  componentWillReceiveProps: function(nextProps) {
    var locationQuery     = nextProps.location.query.search;
    var prevLocationQuery = this.props.location.query.search;

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
    var speechSlug = this.props.speeches[speechId].slug;
    var speechNum  = 'speech-' + speechId;

    return (
      <article key={i} id={speechNum} className="speech speech--archive column sm-one-half md-one-third">
        <header className="speech__header speech__header--archive">
          <h3 className="speech__title">
            <Link to={'/' + speechId + '/' + speechSlug} dangerouslySetInnerHTML={this.getTitle(speechId)} />
          </h3>
          <p className="speech__meta speech__meta--date">Delivered on <span className="date">{datePretty}</span></p>
        </header>
        <div className="speech__excerpt" dangerouslySetInnerHTML={this.getExcerpt(speechId)} />
        <Link to={'/' + speechId + '/' + speechSlug}>Read more &raquo;</Link>
      </article>
    );
  },

  getResponse: function() {
    if (Object.keys(this.props.speeches).length === 0 && this.props.searchString) {
      return <p className="search__status--no-results column">No search results for &ldquo;{this.props.searchString}&rdquo;.</p>;
    } else if (Object.keys(this.props.speeches).length === 0) {
      return <p className="status--loading column">Loading speeches...</p>;
    } else {
      return <div className="speeches__container">{Object.keys(this.props.speeches).map(this.eachSpeech)}</div>;
    }
  },

  render: function() {
    return (
      <section className="section speeches">
        <div className="container container--max">
          <h2 className="speeches__title column">The Speeches</h2>
          {this.getResponse()}
        </div>
      </section>
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
