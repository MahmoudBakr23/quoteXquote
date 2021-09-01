import { SAVE_ANIME } from '../Actions/saveAnime';

const initialState = [];

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ANIME:
      return action.payload;
    default:
      return state;
  }
};

export default animeReducer;
