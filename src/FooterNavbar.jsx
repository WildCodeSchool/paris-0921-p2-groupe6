import React from 'react';
import { NavLink } from 'react-router-dom';

import './FooterNavbar.css';

function FooterNavbar() {
  return (
    <div>
      <footer>
        <span className="material-icons">
          <NavLink className="link" activeClassName="active" to="/">
            home
          </NavLink>
        </span>
        <span className="material-icons">
          <NavLink className="link" activeClassName="active" to="Favorites">
            bookmark_border
          </NavLink>
        </span>
        <span className="material-icons">
          <NavLink className="link" activeClassName="active" to="Catalog">
            menu_book
          </NavLink>
        </span>
        <span className="material-icons">
          <NavLink className="link" activeClassName="active" to="AboutUs">
            email
          </NavLink>
        </span>
      </footer>
    </div>
  );
}

export default FooterNavbar;
