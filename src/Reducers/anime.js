import { SAVE_DATA } from '../Actions/saveData';

const initialState = [];

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default animeReducer;
