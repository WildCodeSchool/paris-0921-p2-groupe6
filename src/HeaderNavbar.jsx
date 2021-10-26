import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import Apropos from './Apropos';
import Catalogue from './Catalogue';
import Favoris from './Favoris';
import HomePage from './Homepage';

import './HeaderNavbar.css';

function HeaderNavbar() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/HomePage">HomePage</NavLink>
          </li>

          <li>
            <NavLink to="/Favoris">Favoris</NavLink>
          </li>

          <li>
            <NavLink to="/Catalogue">Catalogue</NavLink>
          </li>

          <li>
            <NavLink to="/Apropos">About Us</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/HomePage">
          <HomePage />
        </Route>
        <Route exact path="/Catalogue">
          <Catalogue />
        </Route>
        <Route exact path="/Favoris">
          <Favoris />
        </Route>
        <Route exact path="/Apropos">
          <Apropos />
        </Route>
      </Switch>
    </Router>
  );
}

export default HeaderNavbar;
