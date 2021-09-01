/* eslint-disable react/prop-types */
import React from 'react';

const Search = ({ handleSearch }) => (
  <div className="SearchSelect">
    <input type="text" name="search" onChange={(e) => handleSearch(e)} />
  </div>
);

export default Search;
