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

  render() {
    const styleSheet = document.styleSheets;

    const spinnerStyle = {
      verticalAlign: 'sub',
      margin: '0 auto',
      width: '4.375em',
      textAlign: 'center'
    }

    const keyframesWebkit = `@-webkit-keyframes sk-bouncedelay {
      0%, 80%, 100% {
        -webkit-transform: scale(.2);
        transform: scale(.2);
      } 40% {
        -webkit-transform: scale(.5);
        transform: scale(.5);
      }
    }`;

    const keyframes = `@keyframes sk-bouncedelay {
      0%, 80%, 100% {
        -webkit-transform: scale(.2);
        transform: scale(.2);
      } 40% {
        -webkit-transform: scale(.5);
        transform: scale(.5);
      }
    }`;

    styleSheet[2].insertRule(keyframesWebkit, styleSheet.length);
    styleSheet[2].insertRule(keyframes, styleSheet.length);

    return (
      <span className="spinner" style={spinnerStyle}>
        <span className="bounce1" style={this.bounceStyle('-.32s')}></span>
        <span className="bounce2" style={this.bounceStyle('-.16s')}></span>
        <span className="bounce3" style={this.bounceStyle('0s')}></span>
      </span>
    );
  }
}

