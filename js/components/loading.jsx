import React from 'react';


var Loading = React.createClass({
  render: function() {
    return (
      <span className="spinner" style={this.props.display}>
        <span className="bounce1"></span>
        <span className="bounce2"></span>
        <span className="bounce3"></span>
      </span>
    );
  }
});


module.exports = Loading;
