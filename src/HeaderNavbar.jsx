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
          <NavLink className="link" activeClassName="active" to="/Favorites">
            Favorites
          </NavLink>
        </li>

        <li>
          <NavLink className="link" activeClassName="active" to="/Catalog">
            Catalog
          </NavLink>
        </li>

        <li>
          <NavLink className="link" activeClassName="active" to="/AboutUs">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
