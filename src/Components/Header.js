import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/">
        Q
        <span>X</span>
        Q
      </Link>
    </div>
  </header>
);

export default Header;
