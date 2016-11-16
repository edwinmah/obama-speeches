var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link    = router.Link;


var Header = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(
      actions.fetchSiteInfo()
    );
  },

  render: function() {
    <header role="banner" className="site-header">
      <h1><Link to={'/'}>{this.props.name}</Link></h1>
      <p>{this.props.description}</p>
    </header>
  }
});


var mapStateToProps = function(state, props) {
  return {
    name: state.name,
    description: state.description
  };
};


var Container = connect(mapStateToProps)(Header);


module.exports = Container;
