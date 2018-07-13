import { wikiSearch, googleSearch } from '../services/searchService';
var convert = require('xml-js');

export const search = (searchText) => dispatch => {
  wikiSearch(searchText).then(res => {
    res.json().then(data => {
      dispatch({
        type: 'SEARCH',
        payload: data.query ? data.query.pages : []
      });
    });
  });

  googleSearch(searchText).then(res => {
    let obj = convert.xml2js(res.data);
    let suggestions = obj.elements[0].elements;
    if (suggestions) {
      let items = suggestions.map(s => {
        return s.elements[0].attributes.data;
      });
      dispatch({
        type: 'SUGGESTIONS',
        payload: items
      });
    } else {
      dispatch({
        type: 'SUGGESTIONS',
        payload: []
      });
    }
  });
};

export const searchClear = () => dispatch => {
  dispatch({
    type: 'SEARCH_CLEAR'
  });
};