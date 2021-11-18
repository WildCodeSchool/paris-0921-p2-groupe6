import React from 'react';
import { NavLink } from 'react-router-dom';
import SmallLogo from './SmallLogo.png';

import './HeaderNavbar.css';

function HeaderNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="link" activeClassName="active" to="/">
            <img src={SmallLogo} alt="Lazy Nights Small Logo" className="smallLogo" />
          </NavLink>
        </li>

        <li>
          <NavLink className="link" activeClassName="active" to="/Basket">
            My Lazy Night
          </NavLink>
        </li>

        <li>
          <NavLink className="link" activeClassName="active" to="/Favorites">
            Favorites
          </NavLink>
        </li>

        <li>
          <NavLink className="link" activeClassName="active" to="/Catalog">
            A la carte
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
