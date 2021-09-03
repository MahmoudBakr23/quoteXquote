const CHANGE_SEARCH = 'CHANGE_SEARCH';
const FILTER_CHARACTER = 'FILTER_CHARACTER';

const changeSearch = (title) => ({
  type: CHANGE_SEARCH,
  title,
});

const changeChar = (character) => ({
  type: FILTER_CHARACTER,
  character,
});

export {
  changeSearch, CHANGE_SEARCH, FILTER_CHARACTER, changeChar,
};
