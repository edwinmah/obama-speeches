import React from 'react';


export default class Loading extends React.Component {
  bounceStyle(animationName, animationDelay) {
    const properties = {
      duration: '.8s',
      timing: 'ease-in-out',
      fillMode: 'both',
      iterationCount: 'infinite'
    };

    return (
      {
        display: 'inline-block',
        width: '1.125em',
        height: '1.125em',
        borderRadius: '100%',
        backgroundColor: '#551413',
        WebkitAnimation: `${animationName} ${properties.duration} ${properties.iterationCount} ${properties.timing} ${properties.fillMode}`,
        animation: `${animationName} ${properties.duration} ${properties.iterationCount} ${properties.timing} ${properties.fillMode}`,
        WebkitAnimationDelay: `${animationDelay}`,
        animationDelay: `${animationDelay}`
      }
    );
  }

  transformDeclarations(vendorPrefix, scaleValue) {
    return (
      `${vendorPrefix}transform: scale(${scaleValue});
        transform: scale(${scaleValue});`
    );
  }

  keyframeRule(vendorPrefix, animationName) {
    return (
      `@${vendorPrefix}keyframes ${animationName} {
        0%, 80%, 100% {
          ${this.transformDeclarations('-webkit-', '.2')}
        } 40% {
          ${this.transformDeclarations('-webkit-', '.5')}
        }
      }`
    );
  }

  render() {
    const styleSheet    = document.styleSheets;
    const animationName = 'sk-bouncedelay';

    const spinnerStyle = {
      verticalAlign: 'sub',
      margin: '0 auto',
      width: '4.375em',
      textAlign: 'center'
    };

    styleSheet[0].insertRule(this.keyframeRule('-webkit-', `${animationName}`), styleSheet.length);
    styleSheet[0].insertRule(this.keyframeRule('', `${animationName}`), styleSheet.length);

    return (
      <span style={spinnerStyle}>
        <span style={this.bounceStyle(`${animationName}`, '-.32s')}></span>
        <span style={this.bounceStyle(`${animationName}`, '-.16s')}></span>
        <span style={this.bounceStyle(`${animationName}`, '0s')}></span>
      </span>
    );
  }
}

