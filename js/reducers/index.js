var actions = require('../actions/index');


var initialState = {
  name: '',
  description: '',
  aboutPage: {},
  speeches: [],
  currentSpeech: {}
};


var appReducer = function(state, action) {
  state = state || initialState;

  switch (action.type) {
    case actions.FETCH_SPEECHES_SUCCESS :
      var newSpeeches = state.speeches.concat(action.speeches);
      return Object.assign({}, state, { speeches: newSpeeches });
      break;

    case actions.FETCH_SINGLE_SPEECH_SUCCESS :
      return Object.assign({}, state, { currentSpeech: action.currentSpeech });
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
  }

  return state;
};


exports.appReducer = appReducer;
