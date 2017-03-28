import React from 'react';
import { fetchSpeeches, fetchSingleSpeech } from '../actions';
import { connect } from 'react-redux';
import Loading from './loading';


class Speech extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchSpeeches(this.props.speeches));
    this.props.dispatch(fetchSingleSpeech(this.props.params.id));
  }

  render() {
    if (!this.props.currentSpeech) {
      return (
        <article className="speech speech--loading">
          <div className="container container--large">
            <p className="speech__status">Loading speech<Loading /></p>
          </div>
        </article>
      );
    }

    const { id, date, video, title, content } = this.props.currentSpeech;
    const datePretty = new Date(date).toDateString();

    return (
      <article id={`speech-${id}`} className="speech speech--single">
        <header className="speech__header speech__header--single">
          <div className="container container--large">
            <h2 className="speech__title" dangerouslySetInnerHTML={{ __html: title.rendered }} />
            <p className="speech__meta speech__meta--date">Delivered on <time dateTime={date} className="date">{datePretty}</time></p>
          </div>
        </header>
        <div className="container container--max">
          <div className="intrinsic intrinsic--16x9 speech__media">
            <iframe src={video} className="intrinsic__item"></iframe>
          </div>
        </div>
        <div className="container container--medium">
          <div className="speech__entry" dangerouslySetInnerHTML={{ __html: content.rendered }} />
        </div>
      </article>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    speeches: state.speeches,
    currentSpeech: state.speeches[props.params.id]
  };
};


export default connect(mapStateToProps)(Speech);
