var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Speech = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(
      actions.fetchSpeeches(this.props.speeches)
    );
    this.props.dispatch(
      actions.fetchSingleSpeech(this.props.params.id)
    );
  },

  getTitle: function() {
    return { __html: this.props.currentSpeech.title.rendered};
  },

  getContent: function() {
    return { __html: this.props.currentSpeech.content.rendered};
  },

  render: function() {
    if (!this.props.currentSpeech) {
      return <div>loading...</div>;
    }

    var { id, title, date, content, video } = this.props.currentSpeech;
    var dateFormat = new Date(date);
    var datePretty = dateFormat.toDateString();
    var speechNum  = 'speech-' + id + '';

    return (
      <article id={speechNum} className="speech speech--single">
        <header className="speech__header speech__header--single">
          <div className="container container--large">
            <h2 className="speech__title" dangerouslySetInnerHTML={this.getTitle()} />
            <p className="speech__meta speech__meta--date">Delivered on <span className="date">{datePretty}</span></p>
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
