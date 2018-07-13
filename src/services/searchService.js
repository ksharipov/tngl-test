import fetchJsonp from 'fetch-jsonp';
import Axios from 'axios';


export const wikiSearch = (searchText) => {
    const link = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    return fetchJsonp(link + searchText);
};

export const googleSearch = (searchText) => {
    const link = 'http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=';
    return Axios.get(link + searchText, { crossdomain: true });
};