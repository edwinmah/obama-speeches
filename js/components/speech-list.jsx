import React from 'react';
import { fetchSearch, fetchSpeeches } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Loading from './loading';


class SpeechList extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchData(locationQuery) {
    if (locationQuery) {
      this.props.dispatch(fetchSearch(locationQuery));
    } else {
      this.props.dispatch(fetchSpeeches(this.props.speeches));
    }
  }

  componentWillMount() {
    this.fetchData(this.props.location.query.search);
  }

  componentWillReceiveProps(nextProps) {
    const locationQuery     = nextProps.location.query.search;
    const prevLocationQuery = this.props.location.query.search;

    if (locationQuery === prevLocationQuery) {
      return;
    }

    this.fetchData(locationQuery);
  }

  renderSpeech(speechId) {
    const { title, slug, date, excerpt } = this.props.speeches[speechId];
    const datePretty = new Date(date).toDateString();

    return (
      <article key={speechId} id={`speech-${speechId}`} className="speech speech--archive column sm-one-half md-one-third">
        <header className="speech__header speech__header--archive">
          <h3 className="speech__title">
            <Link to={`/${speechId}/${slug}`} dangerouslySetInnerHTML={{ __html: title.rendered }} />
          </h3>
          <p className="speech__meta speech__meta--date">Delivered on <time dateTime={date} className="date">{datePretty}</time></p>
        </header>
        <div className="speech__excerpt" dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
        <Link to={`/${speechId}/${slug}`}>Read more &raquo;</Link>
      </article>
    );
  }

  renderSpeeches() {
    const isSearchComplete = this.props.location.query.search === this.props.searchString;
    const speechesCount    = Object.keys(this.props.speeches).length;

    if (speechesCount === 0 && this.props.searchString) {
      return <p className="search__status--no-results column">No search results for &ldquo;{this.props.searchString}&rdquo;.</p>;
    } else if (speechesCount === 0 || this.props.location.query.search !== undefined && !isSearchComplete) {
      return <p className="status--loading column">Loading speeches<Loading /></p>;
    } else {
      return (
        <div className="speeches__container cf">
          {Object.keys(this.props.speeches).map((speechId) => this.renderSpeech(speechId))}
        </div>
      );
    }
  }

  render() {
    return (
      <section className="section speeches">
        <div className="container container--max">
          <h2 className="speeches__title column">The Speeches</h2>
          {this.renderSpeeches()}
        </div>
      </section>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    speeches: state.speeches,
    searchString: state.searchString
  };
};


export default connect(mapStateToProps)(SpeechList);
