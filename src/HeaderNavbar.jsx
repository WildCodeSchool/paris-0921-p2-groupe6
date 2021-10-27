import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderNavbar.css';

function HeaderNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="link" activeClassName="active" to="/HomePage">
            HomePage
          </NavLink>
        </li>

        <li>
          <NavLink className="link" activeClassName="active" to="/Favoris">
            Favoris
          </NavLink>
        </li>

        <li>
          <NavLink className="link" activeClassName="active" to="/Catalogue">
            Catalogue
          </NavLink>
        </li>

        <li>
          <NavLink className="link" activeClassName="active" to="/Apropos">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
