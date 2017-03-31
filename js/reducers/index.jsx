import * as actions from '../actions';


const initialState = {
  name: '',
  description: '',
  aboutPage: {},
  speeches: {},
  currentSpeech: {},
  searchString: ''
};


export const appReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case actions.FETCH_SPEECHES_SUCCESS :
      let newSpeeches = {};
      action.speeches.forEach(function(speech) {
        newSpeeches[speech.id] = speech;
      });
      return Object.assign({}, state, {
        speeches: newSpeeches,
        searchString: initialState.searchString
      });
      break;

    case actions.FETCH_SINGLE_SPEECH_SUCCESS :
      const newSpeech = Object.assign({}, state.speeches, {
        [action.currentSpeech.id]: action.currentSpeech
      });
      return Object.assign({}, state, { speeches: newSpeech });
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
      let newSearch = {};
      action.speeches.forEach(function(speech) {
        newSearch[speech.id] = speech;
      });
      return Object.assign({}, state, {
        speeches: newSearch,
        searchString: action.searchString
      });
      break;
  }

  return state;
};
