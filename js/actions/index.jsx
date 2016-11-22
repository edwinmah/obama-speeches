require('isomorphic-fetch');


var FETCH_SPEECHES_SUCCESS = 'FETCH_SPEECHES_SUCCESS';
var fetchSpeechesSuccess = function(speeches) {
  return {
    type: FETCH_SPEECHES_SUCCESS,
    speeches: speeches
  };
};


var FETCH_SPEECHES_ERROR = 'FETCH_SPEECHES_ERROR';
var fetchSpeechesError = function(speeches, error) {
  return {
    type: FETCH_SPEECHES_ERROR,
    speeches: speeches,
    error: error
  };
};


var fetchSpeeches = function(speeches) {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'https://www.edwinmah.com/r/wp-json/wp/v2/speeches?per_page=12';

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var speeches = data;
      return dispatch(fetchSpeechesSuccess(speeches));
    })
    .catch(function(error) {
      return dispatch(fetchSpeechesError(speeches, error));
    });
  }
};


var FETCH_SINGLE_SPEECH_SUCCESS = 'FETCH_SINGLE_SPEECH_SUCCESS';
var fetchSingleSpeechSuccess = function(speech) {
  return {
    type: FETCH_SINGLE_SPEECH_SUCCESS,
    currentSpeech: speech
  };
};


var FETCH_SINGLE_SPEECH_ERROR = 'FETCH_SINGLE_SPEECH_ERROR';
var fetchSingleSpeechError = function(speech, error) {
  return {
    type: FETCH_SINGLE_SPEECH_ERROR,
    currentSpeech: speech,
    error: error
  };
};


var fetchSingleSpeech = function(speechId) {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'https://www.edwinmah.com/r/wp-json/wp/v2/speeches/' + speechId;

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var speech = data;
      return dispatch(fetchSingleSpeechSuccess(speech));
    })
    .catch(function(speech, error) {
      return dispatch(fetchSingleSpeechError(speech, error));
    });
  }
};


var FETCH_ABOUT_PAGE_SUCCESS = 'FETCH_ABOUT_PAGE_SUCCESS';
var fetchAboutPageSuccess = function(page) {
  return {
    type: FETCH_ABOUT_PAGE_SUCCESS,
    page: page
  };
};


var FETCH_ABOUT_PAGE_ERROR = 'FETCH_ABOUT_PAGE_ERROR';
var fetchAboutPageError = function(page, error) {
  return {
    type: FETCH_ABOUT_PAGE_ERROR,
    page: page,
    error: error
  };
};


var fetchAboutPage = function() {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'https://www.edwinmah.com/r/wp-json/wp/v2/pages/2';

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var page = data;
      return dispatch(fetchAboutPageSuccess(page));
    })
    .catch(function(page, error) {
      return dispatch(fetchAboutPageError(page, error));
    });
  }
};


var FETCH_SITE_INFO_SUCCESS = 'FETCH_SITE_INFO_SUCCESS';
var fetchSiteInfoSuccess = function(name, description) {
  return {
    type: FETCH_SITE_INFO_SUCCESS,
    name: name,
    description: description
  };
};


var FETCH_SITE_INFO_ERROR = 'FETCH_SITE_INFO_ERROR';
var fetchSiteInfoError = function(name, description, error) {
  return {
    type: FETCH_SITE_INFO_ERROR,
    name: name,
    description: description,
    error: error
  };
};


var fetchSiteInfo = function() {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'https://www.edwinmah.com/r/wp-json';

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var name = data.name;
      var description = data.description;
      return dispatch(fetchSiteInfoSuccess(name, description));
    })
    .catch(function(error) {
      var name = data.name;
      var description = data.description;
      return dispatch(fetchSiteInfoError(name, description, error));
    });
  }
};


var FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
var fetchSearchSuccess = function(speeches, searchString) {
  return {
    type: FETCH_SEARCH_SUCCESS,
    speeches: speeches,
    searchString: searchString
  };
};


var FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';
var fetchSearchError = function(speeches, searchString, error) {
  return {
    type: FETCH_SEARCH_ERROR,
    speeches: speeches,
    searchString: searchString,
    error: error
  };
};


var fetchSearch = function(searchString) {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'https://www.edwinmah.com/r/wp-json/wp/v2/speeches?per_page=12&search=' + searchString;

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var speeches = data;
      return dispatch(fetchSearchSuccess(speeches, searchString));
    })
    .catch(function(error) {
      return dispatch(fetchSearchError(speeches, searchString, error));
    });
  }
};


exports.FETCH_SPEECHES_SUCCESS  = FETCH_SPEECHES_SUCCESS;
exports.fetchSpeechesSuccess    = fetchSpeechesSuccess;

exports.FETCH_SPEECHES_ERROR  = FETCH_SPEECHES_ERROR;
exports.fetchSpeechesError    = fetchSpeechesError;

exports.fetchSpeeches  = fetchSpeeches;

exports.FETCH_SINGLE_SPEECH_SUCCESS = FETCH_SINGLE_SPEECH_SUCCESS;
exports.fetchSingleSpeechSuccess    = fetchSingleSpeechSuccess;

exports.FETCH_SINGLE_SPEECH_ERROR = FETCH_SINGLE_SPEECH_ERROR;
exports.fetchSingleSpeechError    = fetchSingleSpeechError;

exports.fetchSingleSpeech  = fetchSingleSpeech;

exports.FETCH_ABOUT_PAGE_SUCCESS = FETCH_ABOUT_PAGE_SUCCESS;
exports.fetchAboutPageSuccess    = fetchAboutPageSuccess;

exports.FETCH_ABOUT_PAGE_ERROR = FETCH_ABOUT_PAGE_ERROR;
exports.fetchAboutPageError    = fetchAboutPageError;

exports.fetchAboutPage = fetchAboutPage;

exports.FETCH_SITE_INFO_SUCCESS = FETCH_SITE_INFO_SUCCESS;
exports.fetchSiteInfoSuccess    = fetchSiteInfoSuccess;

exports.FETCH_SITE_INFO_ERROR = FETCH_SITE_INFO_ERROR;
exports.fetchSiteInfoError    = fetchSiteInfoError;

exports.fetchSiteInfo = fetchSiteInfo;

exports.FETCH_SEARCH_SUCCESS  = FETCH_SEARCH_SUCCESS;
exports.fetchSearchSuccess    = fetchSearchSuccess;

exports.FETCH_SEARCH_ERROR  = FETCH_SEARCH_ERROR;
exports.fetchSearchError    = fetchSearchError;

exports.fetchSearch  = fetchSearch;
