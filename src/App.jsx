import React from 'react';
import { Route, Switch } from 'react-router';

import FooterNavbar from './FooterNavbar';
import HeaderNavbar from './HeaderNavbar';
import Apropos from './Apropos';
import Catalogue from './Catalogue';
import Favoris from './Favoris';
import HomePage from './Homepage';

import './App.css';

function App() {
  return (
    <div className="app">
      <HeaderNavbar />
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
      <FooterNavbar />
    </div>
  );
}

export default App;
