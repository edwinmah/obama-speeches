require('babel-polyfill');
var React     = require('react');
var ReactDOM  = require('react-dom');
//var Provider  = require('react-redux').Provider;
//var store     = require('./store');
//var Game      = require('./components/game');


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <h1>
      hello world
    </h1>,
    document.getElementById('app'));
});
