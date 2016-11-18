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

    var { id, title, date, content } = this.props.currentSpeech;
    var dateFormat = new Date(date);
    var datePretty = dateFormat.toDateString();

    return (
      <article id={id} className="speech">
        <header className="speech__heading">
          <h2 dangerouslySetInnerHTML={this.getTitle()} />
          <p>Delivered on {datePretty}</p>
        </header>
        <div className="speech__entry" dangerouslySetInnerHTML={this.getContent()} />
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
