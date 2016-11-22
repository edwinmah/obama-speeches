var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link    = router.Link;


var Search = React.createClass({
  submitSearch: function(event) {
    event.preventDefault();
    if (this.refs.searchString.value !== '') {
      this.context.router.push({
        pathname: '/',
        query: {'search': this.refs.searchString.value}
      });
    }
    this.refs.searchString.value = '';
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function() {
    var condition1 = this.context.router.location.query.search && !this.props.searchString;
    var condition2 = this.context.router.location.query.search === this.props.searchString;

    var style      = (this.context.router.location.search) ? {display: 'block'} : {display: 'none'};

    var statusMsg  = (condition1) ? 'Searching...' : (condition2) ? 'Search term: ' + this.props.searchString : '';

    return (
      <div className="search">
        <div className="container container--small">
          <form className="search__form" onSubmit={this.submitSearch}>
            <label className="search__label"><span className="search__label--hidden visuallyhidden focusable">Search speeches</span>
              <input className="search__input" type="text" ref="searchString" placeholder="Search the speeches..." />
            </label>
            <button type="submit" className="search__button visuallyhidden focusable">Search</button>
          </form>
          <p className="search__status" style={style}>{statusMsg}</p>
        </div>
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
