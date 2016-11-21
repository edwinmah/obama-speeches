var React     = require('react');
var store     = require('../js/store');
var TestUtils = require('react-addons-test-utils');
var should    = require('chai').should();

var App         = require('../js/components/App');
var Header      = require('../js/components/header');
var SpeechList  = require('../js/components/speech-list');
var Speech      = require('../js/components/speech');
var About       = require('../js/components/about');
var Footer      = require('../js/components/footer');

var actions  = require('../js/actions/index');
var reducer  = require('../js/reducers/index');

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


describe('The App', function() {
  // render tests
  it('loads.', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<App store={store} />);
    var result = renderer.getRenderOutput();

    result.type.should.equal('div');
    result.props.children.should.be.an('array');
    result.props.children.should.have.length(3);
  });

  it('Header renders and receives mapped props.',  function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Header store={store} />);
    var result = renderer.getRenderOutput();

    result.props.name.should.be.a('string');
    result.props.description.should.be.a('string');
    result.props.speeches.should.be.an('object');
    result.props.name.should.equal('');
    result.props.description.should.equal('');
  });

  it('SpeechList renders and receives mapped props.', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<SpeechList store={store} />);
    var result = renderer.getRenderOutput();

    result.props.speeches.should.be.an('object');
  });

  it('About renders and receives mapped props.', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<About store={store} />);
    var result = renderer.getRenderOutput();

    result.props.aboutPage.should.be.an('object');
  });

  it('Footer renders.', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Footer store={store} />);
    var result = renderer.getRenderOutput();
  });

  // actions and reducer tests
  it('FETCH_SPEECHES_SUCCESS can get speeches.', function() {
    actions.fetchSpeeches(speeches);

    var action = {
      type: 'FETCH_SPEECHES_SUCCESS',
      speeches: speeches
    };

    var newState = reducer.appReducer(state, action);

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

  it('FETCH_SINGLE_SPEECH_SUCCESS can retrieve a speech.', function() {
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

    var newState = reducer.appReducer(state, action);

    newState.speeches.should.be.an('object');
    newState.speeches['2'].id.should.equal(2);
    newState.speeches['2'].title.rendered.should.equal('Test title 2');
    newState.speeches['2'].content.rendered.should.equal('Test content 2');
    newState.speeches['2'].excerpt.rendered.should.equal('Test excerpt 2');
  });

  it('FETCH_ABOUT_PAGE_SUCCESS can retrieve about page information.', function() {
    var action = {
      type: 'FETCH_ABOUT_PAGE_SUCCESS',
      page: page
    };

    var newState = reducer.appReducer(state, action);

    newState.aboutPage.should.be.an('object');
    newState.aboutPage.id.should.equal(2);
    newState.aboutPage.title.rendered.should.equal('About');
    newState.aboutPage.content.rendered.should.equal('About page content');
  });

  it('FETCH_SITE_INFO_SUCCESS can retrieve site information.', function() {
    var action = {
      type: 'FETCH_SITE_INFO_SUCCESS',
      name: siteInfo.name,
      description: siteInfo.description
    };

    var newState = reducer.appReducer(state, action);

    newState.name.should.be.a('string');
    newState.name.should.equal('Site name');
    newState.description.should.be.a('string');
    newState.description.should.equal('Site description');
  });

  it('FETCH_SEARCH_SUCCESS can set searchString and speeches.', function() {
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

    var newState = reducer.appReducer(state, action);
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
