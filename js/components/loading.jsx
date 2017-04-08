import React from 'react';


export default class Loading extends React.Component {
  bounceStyle(animationDelay) {
    return (
      {
        display: 'inline-block',
        width: '1.125em',
        height: '1.125em',
        borderRadius: '100%',
        backgroundColor: '#551413',
        WebkitAnimation: 'sk-bouncedelay .8s infinite ease-in-out both',
        animation: 'sk-bouncedelay .8s infinite ease-in-out both',
        WebkitAnimationDelay: `${animationDelay}`,
        animationDelay: `${animationDelay}`
      }
    );
  }

  keyframeRule(property, animationName, scale1, scale2) {
    return (
      `@${property} ${animationName} {
        0%, 80%, 100% {
        -webkit-transform: scale(${scale1});
        transform: scale(${scale1});
        } 40% {
        -webkit-transform: scale(${scale2});
        transform: scale(${scale2});
        }
      }`
    );
  }

  render() {
    const styleSheet = document.styleSheets;

    const spinnerStyle = {
      verticalAlign: 'sub',
      margin: '0 auto',
      width: '4.375em',
      textAlign: 'center'
    }

    styleSheet[2].insertRule(
      this.keyframeRule('-webkit-keyframes', 'sk-bouncedelay', '.2', '.5'),
      styleSheet.length);

    styleSheet[2].insertRule(
      this.keyframeRule('keyframes', 'sk-bouncedelay', '.2', '.5'),
      styleSheet.length);

    return (
      <span className="spinner" style={spinnerStyle}>
        <span className="bounce1" style={this.bounceStyle('-.32s')}></span>
        <span className="bounce2" style={this.bounceStyle('-.16s')}></span>
        <span className="bounce3" style={this.bounceStyle('0s')}></span>
      </span>
    );
  }
}

