require('babel-polyfill');
var React       = require('react');
var ReactDOM    = require('react-dom');
var router      = require('react-router');
var Provider    = require('react-redux').Provider;
var store       = require('./store');
var App         = require('./components/App');
var Speech      = require('./components/speech');
var SpeechList  = require('./components/speech-list');
var Router      = router.Router;
var Route       = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute  = router.IndexRoute;


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="" component={App}>
          <Route path="/" component={SpeechList} />
          <Route path="/:id" component={Speech} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app'));
});
