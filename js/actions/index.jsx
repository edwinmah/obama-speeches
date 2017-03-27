import 'isomorphic-fetch';


const FETCH_SPEECHES_SUCCESS = 'FETCH_SPEECHES_SUCCESS';
const fetchSpeechesSuccess = (speeches) => {
  return {
    type: FETCH_SPEECHES_SUCCESS,
    speeches: speeches
  };
};


const FETCH_SPEECHES_ERROR = 'FETCH_SPEECHES_ERROR';
const fetchSpeechesError = (speeches, error) => {
  return {
    type: FETCH_SPEECHES_ERROR,
    speeches: speeches,
    error: error
  };
};


const fetchSpeeches = (speeches) => {
  return (dispatch) => {
    var init = { method: 'GET' };
    var url  = 'https://www.edwinmah.com/r/wp-json/wp/v2/speeches?per_page=12';

    return fetch(url, init).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const speeches = data;
      return dispatch(fetchSpeechesSuccess(speeches));
    })
    .catch((error) => {
      return dispatch(fetchSpeechesError(speeches, error));
    });
  }
};


const FETCH_SINGLE_SPEECH_SUCCESS = 'FETCH_SINGLE_SPEECH_SUCCESS';
const fetchSingleSpeechSuccess = (speech) => {
  return {
    type: FETCH_SINGLE_SPEECH_SUCCESS,
    currentSpeech: speech
  };
};


const FETCH_SINGLE_SPEECH_ERROR = 'FETCH_SINGLE_SPEECH_ERROR';
const fetchSingleSpeechError = (speech, error) => {
  return {
    type: FETCH_SINGLE_SPEECH_ERROR,
    currentSpeech: speech,
    error: error
  };
};


const fetchSingleSpeech = (speechId) => {
  return (dispatch) => {
    const init = { method: 'GET' };
    const url  = `https://www.edwinmah.com/r/wp-json/wp/v2/speeches/${speechId}`;

    return fetch(url, init).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const speech = data;
      return dispatch(fetchSingleSpeechSuccess(speech));
    })
    .catch((speech, error) => {
      return dispatch(fetchSingleSpeechError(speech, error));
    });
  }
};


const FETCH_ABOUT_PAGE_SUCCESS = 'FETCH_ABOUT_PAGE_SUCCESS';
const fetchAboutPageSuccess = (page) => {
  return {
    type: FETCH_ABOUT_PAGE_SUCCESS,
    page: page
  };
};


const FETCH_ABOUT_PAGE_ERROR = 'FETCH_ABOUT_PAGE_ERROR';
const fetchAboutPageError = (page, error) => {
  return {
    type: FETCH_ABOUT_PAGE_ERROR,
    page: page,
    error: error
  };
};


const fetchAboutPage = () => {
  return (dispatch) => {
    const init = { method: 'GET' };
    const url  = 'https://www.edwinmah.com/r/wp-json/wp/v2/pages/2';

    return fetch(url, init).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const page = data;
      return dispatch(fetchAboutPageSuccess(page));
    })
    .catch(function(page, error) {
      return dispatch(fetchAboutPageError(page, error));
    });
  }
};


const FETCH_SITE_INFO_SUCCESS = 'FETCH_SITE_INFO_SUCCESS';
const fetchSiteInfoSuccess = (name, description) => {
  return {
    type: FETCH_SITE_INFO_SUCCESS,
    name: name,
    description: description
  };
};


const FETCH_SITE_INFO_ERROR = 'FETCH_SITE_INFO_ERROR';
const fetchSiteInfoError = (name, description, error) => {
  return {
    type: FETCH_SITE_INFO_ERROR,
    name: name,
    description: description,
    error: error
  };
};


const fetchSiteInfo = () => {
  return (dispatch) => {
    const init = { method: 'GET' };
    const url  = 'https://www.edwinmah.com/r/wp-json';

    return fetch(url, init).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const name = data.name;
      const description = data.description;
      return dispatch(fetchSiteInfoSuccess(name, description));
    })
    .catch((error) => {
      const name = data.name;
      const description = data.description;
      return dispatch(fetchSiteInfoError(name, description, error));
    });
  }
};


const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
const fetchSearchSuccess = (speeches, searchString) => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    speeches: speeches,
    searchString: searchString
  };
};


const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';
const fetchSearchError = (speeches, searchString, error) => {
  return {
    type: FETCH_SEARCH_ERROR,
    speeches: speeches,
    searchString: searchString,
    error: error
  };
};


const fetchSearch = (searchString) => {
  return (dispatch) => {
    const init = { method: 'GET' };
    const url  = `https://www.edwinmah.com/r/wp-json/wp/v2/speeches?per_page=12&search=${searchString}`;

    return fetch(url, init).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const speeches = data;
      return dispatch(fetchSearchSuccess(speeches, searchString));
    })
    .catch((speeches, error) => {
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
