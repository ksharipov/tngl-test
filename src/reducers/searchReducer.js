const defaultState = {
    searchResult: [],
    suggestions: []
    
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                searchResult: Object.values(action.payload)
            };
        case 'SUGGESTIONS':
            return {
                ...state,
                suggestions: action.payload
            };
        case 'SEARCH_CLEAR': 
            return defaultState;
        default:
            return state;
    }
};