import React from 'react';
import actions from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';


var Header = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(
      actions.fetchSiteInfo()
    );
  },

  render: function() {
    return (
      <header role="banner" className="site-header intrinsic intrinsic--16x9">
        <div className="container container--max">
          <div className="branding">
            <h1 className="site-header__title"><Link to={'/'}>{this.props.name}</Link></h1>
            <p className="site-header__tagline">{this.props.description}</p>
          </div>
        </div>
      </header>
    );
  }
});


var mapStateToProps = function(state, props) {
  return {
    name: state.name,
    description: state.description,
    speeches: state.speeches
  };
};


var Container = connect(mapStateToProps)(Header);


module.exports = Container;
