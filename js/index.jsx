import 'normalize.css/normalize.css';
import '../css/index.css';
import '../assets/images/8475945531_008ecf0cc4_o--medium.jpg';
import '../assets/images/8475945531_008ecf0cc4_o--large.jpg';
import '../assets/images/8475945531_008ecf0cc4_o--x-large.jpg';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { store } from './store';
import App from './components/App';
import Speech from './components/speech';
import SpeechList from './components/speech-list';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="" component={App}>
          <Route path="/" component={SpeechList} />
          <Route path="/:id/:slug" component={Speech} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app'));
});
