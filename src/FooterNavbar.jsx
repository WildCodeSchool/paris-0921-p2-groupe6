import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Apropos from './Apropos';
import Catalogue from './Catalogue';
import Favoris from './Favoris';
import HomePage from './Homepage';

import './FooterNavbar.css';

function FooterNavbar() {
  return (
    <Router>
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
      <footer>
        <NavLink to="HomePage">
          <span className="material-icons pushed">home</span>
        </NavLink>
        <NavLink to="Favoris">
          <span className="material-icons">bookmark_border</span>
        </NavLink>
        <NavLink to="Catalogue">
          <span className="material-icons">menu_book</span>
        </NavLink>
        <NavLink to="Apropos">
          <span className="material-icons">email</span>
        </NavLink>
      </footer>
    </Router>
  );
}

export default FooterNavbar;
