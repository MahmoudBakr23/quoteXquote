import { SAVE_QUOTE } from '../Actions/saveQuote';

const initialState = [];

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_QUOTE:
      return action.payload;
    default:
      return state;
  }
};

export default quoteReducer;
