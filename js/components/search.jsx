import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Loading from './loading';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSearchPending: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.refs.searchString.value !== '') {
      this.context.router.push({
        pathname: '/',
        query: {'search': this.refs.searchString.value}
      });
      this.setState({ isSearchPending: true });
    }
    this.refs.searchString.value = '';
  }

  componentWillReceiveProps(nextProps, nextContext) {
    var query = nextContext.router.location.query.search;
    if (!query) {
      return;
    }
    if (this.props.searchString !== nextProps.searchString) {
      this.setState({ isSearchPending: false });
    }
  }

  render() {
    var isSearchUrl      = this.context.router.location.query.search && !this.props.searchString;
    var isSearchComplete = this.context.router.location.query.search === this.props.searchString;

    var style = (this.context.router.location.search) ? { display: 'inline-block', float: 'right' } : { display: 'none' };
    var statusMsg, loadingDisplay;

    if (isSearchUrl || this.state.isSearchPending) {
      statusMsg = 'Searching';
      loadingDisplay = <Loading />;
    } else if (isSearchComplete && !this.state.isSearchPending) {
      statusMsg = 'Search term: ' + this.props.searchString;
      loadingDisplay = '';
    } else {
      statusMsg = '';
    }

    return (
      <div className="search">
        <div className="container container--small">
          <form className="search__form" onSubmit={this.handleSubmit}>
            <label className="search__label"><span className="search__label--hidden visuallyhidden focusable">Search speeches</span>
              <input className="search__input" type="text" ref="searchString" placeholder="Search the speeches..." />
            </label>
            <button type="submit" className="search__button">Search</button>
          </form>
          <p className="search__status">{statusMsg}{loadingDisplay} <span style={style}><Link to={'/'}>&laquo; Return to all speeches</Link></span></p>
        </div>
      </div>
    );
  }
}


Search.contextTypes = {
  router: React.PropTypes.object.isRequired
}


const mapStateToProps = (state, props) => {
  return {
    speeches: state.speeches,
    searchString: state.searchString
  };
};


export default connect(mapStateToProps)(Search);
