import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NavBar Component - Renders a Nav Bar with two links
 */
const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
