import React from 'react';
import { fetchSpeeches, fetchSingleSpeech } from '../actions';
import { connect } from 'react-redux';


var Speech = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(fetchSpeeches(this.props.speeches));
    this.props.dispatch(fetchSingleSpeech(this.props.params.id));
  },

  getTitle: function() {
    return { __html: this.props.currentSpeech.title.rendered};
  },

  getContent: function() {
    return { __html: this.props.currentSpeech.content.rendered};
  },

  render: function() {
    if (!this.props.currentSpeech) {
      return (
        <article className="speech speech--loading">
          <div className="container container--large">
            <p className="speech__status">Loading speech...</p>
          </div>
        </article>
      );
    }

    var { id, date, video } = this.props.currentSpeech;
    var dateFormat = new Date(date);
    var datePretty = dateFormat.toDateString();
    var speechNum  = 'speech-' + id + '';

    return (
      <article id={speechNum} className="speech speech--single">
        <header className="speech__header speech__header--single">
          <div className="container container--large">
            <h2 className="speech__title" dangerouslySetInnerHTML={this.getTitle()} />
            <p className="speech__meta speech__meta--date">Delivered on <time dateTime={date} className="date">{datePretty}</time></p>
          </div>
        </header>
        <div className="container container--max">
          <div className="intrinsic intrinsic--16x9 speech__media">
            <iframe src={video} className="intrinsic__item"></iframe>
          </div>
        </div>
        <div className="container container--medium">
          <div className="speech__entry" dangerouslySetInnerHTML={this.getContent()} />
        </div>
      </article>
    );
  }
});


var mapStateToProps = function(state, props) {
  return {
    speeches: state.speeches,
    currentSpeech: state.speeches[props.params.id]
  };
};


var Container = connect(mapStateToProps)(Speech);


module.exports = Container;
