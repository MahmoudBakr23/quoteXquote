import { CHANGE_SEARCH, FILTER_CHARACTER } from '../Actions/search';

const initialSearch = {
  name: '',
};

const searchReducer = (state = initialSearch, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return { name: action.title };
    case FILTER_CHARACTER:
      return { name: action.character };
    default:
      return state;
  }
};

export default searchReducer;
