import React from 'react';
import { NavLink } from 'react-router-dom';

import './FooterNavbar.css';

function FooterNavbar() {
  return (
    <div>
      <footer>
        <span className="material-icons">
          <NavLink className="link" activeClassName="active" to="HomePage">
            home
          </NavLink>
        </span>
        <span className="material-icons">
          <NavLink className="link" activeClassName="active" to="Favoris">
            bookmark_border
          </NavLink>
        </span>
        <span className="material-icons">
          <NavLink className="link" activeClassName="active" to="Catalogue">
            menu_book
          </NavLink>
        </span>
        <span className="material-icons">
          <NavLink className="link" activeClassName="active" to="Apropos">
            email
          </NavLink>
        </span>
      </footer>
    </div>
  );
}

export default FooterNavbar;
