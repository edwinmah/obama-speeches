import React from 'react';


export default class Loading extends React.Component {
  render() {
    return (
      <span className="spinner">
        <span className="bounce1"></span>
        <span className="bounce2"></span>
        <span className="bounce3"></span>
      </span>
    );
  }
}

