var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link    = router.Link;


var Search = React.createClass({
  submitSearch: function(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/',
      query: {'filter[s]': this.refs.searchString.value}
    });
    this.refs.searchString.value = '';
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function() {
    var style = (this.props.searchString) ? { display: 'block' } : { display: 'none' };
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <label><span className="visuallyhidden focusable">Search speeches</span>
            <input type="text" ref="searchString" />
          </label>
          <button type="submit">Search</button>
        </form>
        <p style={style}>Search term: <strong>{this.props.searchString}</strong></p>
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


var Container = connect(mapStateToProps)(Search);


module.exports = Container;
