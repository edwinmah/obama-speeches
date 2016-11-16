var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Speech = React.createClass({
  render: function() {
    var { id, title, date, content } = this.props.currenSpeech;
    return (
      <article id={id} className="speech">
        <header className="speech__heading">
          <h2>{title.rendered}</h2>
          <p>{date}</p>
        </header>
        <div className="speech__entry">
          {content.rendered}
        </div>
      </article>
    );
  }
});


var mapStateToProps = function(state, props) {
  return {
    currentSpeech: state.currentSpeech
  };
};


var Container = connect(mapStateToProps)(Speech);


module.exports = Container;
