import React from 'react';
import TestUtils from 'react-addons-test-utils';
const should = require('chai').should();
import actions from '../js/actions';
import { appReducer } from '../js/reducers';

// test data
var state;

var initialState = {
  name: '',
  description: '',
  aboutPage: {},
  speeches: {},
  currentSpeech: {},
  searchString: ''
};

var siteInfo = {
  'name': 'Site name',
  'description': 'Site description'
};

var speeches = [
  {
    'id': 1,
    'title': { 'rendered': 'Test title 1' },
    'content': { 'rendered': 'search-term' },
    'excerpt': { 'rendered': 'Test excerpt 1' }
  },
  {
    'id': 2,
    'title': { 'rendered': 'Test title 2' },
    'content': { 'rendered': 'Test content 2' },
    'excerpt': { 'rendered': 'Test excerpt 2' }
  }
];

var page = {
  'id': 2,
  'title': { 'rendered': 'About'},
  'content': { 'rendered': 'About page content'}
};

var searchString = 'search-term';


describe('The action', () => {
  // actions and reducer tests
  it('FETCH_SPEECHES_SUCCESS can get speeches.', () => {
    actions.fetchSpeeches(speeches);

    var action = {
      type: 'FETCH_SPEECHES_SUCCESS',
      speeches: speeches
    };

    var newState = appReducer(state, action);

    newState.speeches.should.be.an('object');
    newState.speeches['1'].id.should.equal(1);
    newState.speeches['1'].title.rendered.should.equal('Test title 1');
    newState.speeches['1'].content.rendered.should.equal('search-term');
    newState.speeches['1'].excerpt.rendered.should.equal('Test excerpt 1');
    newState.speeches['2'].id.should.equal(2);
    newState.speeches['2'].title.rendered.should.equal('Test title 2');
    newState.speeches['2'].content.rendered.should.equal('Test content 2');
    newState.speeches['2'].excerpt.rendered.should.equal('Test excerpt 2');
  });

  it('FETCH_SINGLE_SPEECH_SUCCESS can retrieve a speech.', () => {
    state = initialState;

    var speech = {
      'id': 2,
      'title': { 'rendered': 'Test title 2' },
      'content': { 'rendered': 'Test content 2' },
      'excerpt': { 'rendered': 'Test excerpt 2' }
    };
    var action = {
      type: 'FETCH_SINGLE_SPEECH_SUCCESS',
      currentSpeech: speech
    };

    var newState = appReducer(state, action);

    newState.speeches.should.be.an('object');
    newState.speeches['2'].id.should.equal(2);
    newState.speeches['2'].title.rendered.should.equal('Test title 2');
    newState.speeches['2'].content.rendered.should.equal('Test content 2');
    newState.speeches['2'].excerpt.rendered.should.equal('Test excerpt 2');
  });

  it('FETCH_ABOUT_PAGE_SUCCESS can retrieve about page information.', () => {
    var action = {
      type: 'FETCH_ABOUT_PAGE_SUCCESS',
      page: page
    };

    var newState = appReducer(state, action);

    newState.aboutPage.should.be.an('object');
    newState.aboutPage.id.should.equal(2);
    newState.aboutPage.title.rendered.should.equal('About');
    newState.aboutPage.content.rendered.should.equal('About page content');
  });

  it('FETCH_SITE_INFO_SUCCESS can retrieve site information.', () => {
    var action = {
      type: 'FETCH_SITE_INFO_SUCCESS',
      name: siteInfo.name,
      description: siteInfo.description
    };

    var newState = appReducer(state, action);

    newState.name.should.be.a('string');
    newState.name.should.equal('Site name');
    newState.description.should.be.a('string');
    newState.description.should.equal('Site description');
  });

  it('FETCH_SEARCH_SUCCESS can set searchString and speeches.', () => {
    state = initialState;
    state.speeches = {
      '1': {
        'id': 1,
        'title': { 'rendered': 'Test title 1' },
        'content': { 'rendered': 'search-term' },
        'excerpt': { 'rendered': 'Test excerpt 1' }
      },
      '2': {
        'id': 2,
        'title': { 'rendered': 'Test title 2' },
        'content': { 'rendered': 'Test content 2' },
        'excerpt': { 'rendered': 'Test excerpt 2' }
      }
    };

    var searchResults = [
      {
        'id': 1,
        'title': { 'rendered': 'Test title 1.1' },
        'content': { 'rendered': 'search-term' },
        'excerpt': { 'rendered': 'Test excerpt 1' }
      }
    ];

    var action = {
      type: 'FETCH_SEARCH_SUCCESS',
      speeches: searchResults,
      searchString: searchString
    };

    var newState = appReducer(state, action);
    var prevSpeechesLength = Object.keys(state.speeches).length;
    var newSpeechesLength  = Object.keys(newState.speeches).length;

    newState.searchString.should.be.a('string');
    newState.searchString.should.equal('search-term');
    newState.speeches.should.be.an('object');
    newState.speeches['1'].id.should.equal(1);
    newState.speeches['1'].title.rendered.should.equal('Test title 1.1');
    newState.speeches['1'].content.rendered.should.equal('search-term');
    newState.speeches['1'].excerpt.rendered.should.equal('Test excerpt 1');
    prevSpeechesLength.should.equal(2);
    newSpeechesLength.should.equal(1);
  });
});
