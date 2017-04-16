import 'normalize.css/normalize.css';
import '../css/index.css';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { store } from './store';
import App from './components/App';
import Speech from './components/speech';
import SpeechList from './components/speech-list';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="" component={App}>
          <Route path="/" component={SpeechList} />
          <Route path="/:id/:slug" component={Speech} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app'));
});
