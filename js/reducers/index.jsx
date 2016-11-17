var actions = require('../actions/index');


var initialState = {
  name: '',
  description: '',
  aboutPage: {},
  speeches: {},
  currentSpeech: {},
  searchString: ''
};


var appReducer = function(state, action) {
  state = state || initialState;

  switch (action.type) {
    case actions.FETCH_SPEECHES_SUCCESS :
      var newSpeeches = {};
      action.speeches.forEach(function(speech) {
        newSpeeches[speech.id] = speech;
      });
      return Object.assign({}, state, {
        speeches: newSpeeches,
        searchString: initialState.searchString
      });
      break;

    case actions.FETCH_SINGLE_SPEECH_SUCCESS :
      var newSpeeches = Object.assign({}, state.speeches, {
        [actions.currentSpeech.id]: actions.currentSpeech
      });
      return Object.assign({}, state, { speeches: newSpeeches });
      break;

    case actions.FETCH_ABOUT_PAGE_SUCCESS :
      return Object.assign({}, state, { aboutPage: action.page });
      break;

    case actions.FETCH_SITE_INFO_SUCCESS :
      return Object.assign({}, state, {
        name: action.name,
        description: action.description
      });
      break;

    case actions.FETCH_SEARCH_SUCCESS :
      var newSpeeches = {};
      action.speeches.forEach(function(speech) {
        newSpeeches[speech.id] = speech;
      });
      return Object.assign({}, state, {
        speeches: newSpeeches,
        searchString: action.searchString
      });
      break;
  }

  return state;
};


exports.appReducer = appReducer;
