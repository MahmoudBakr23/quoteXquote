import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
  <div className="search-select">
    <input type="text" name="search" onChange={(e) => handleSearch(e)} placeholder="search..." />
    <ul className="hint">
      <li><h6>Naruto</h6></li>
      <li><h6>Steins;Gate</h6></li>
      <li><h6>Kimetsu no Yaiba</h6></li>
      <li><h6>Akame ga Kill!</h6></li>
      <li><h6>Bleach</h6></li>
    </ul>
  </div>
);

export default Search;

Search.propTypes = {
  handleSearch: PropTypes.func,
};

Search.defaultProps = {
  handleSearch: null,
};
