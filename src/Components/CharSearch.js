/* eslint-disable react/prop-types */
import React from 'react';

const CharSearch = ({ handleSearch }) => (
  <div className="search-select">
    <input type="text" name="search" onChange={(e) => handleSearch(e)} placeholder="search..." />
    <ul className="hint">
      <li><h6>Naruto</h6></li>
      <li><h6>Hisoka</h6></li>
      <li><h6>Luffy</h6></li>
      <li><h6>Erin</h6></li>
      <li><h6>Meliodas</h6></li>
    </ul>
  </div>
);

export default CharSearch;
