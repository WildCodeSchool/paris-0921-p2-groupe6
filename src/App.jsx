import React from 'react';
import { Route, Switch } from 'react-router';

import FooterNavbar from './FooterNavbar';
import HeaderNavbar from './HeaderNavbar';
import AboutUs from './AboutUs';
import Catalog from './Catalog';
import Favorites from './Favorites';
import HomePage from './Homepage';
import Under18 from './Under18';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeaderNavbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/Catalog">
          <Catalog />
        </Route>
        <Route exact path="/Favorites">
          <Favorites />
        </Route>
        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/Under18">
          <Under18 />
        </Route>
      </Switch>
      <FooterNavbar />
    </div>
  );
}

export default App;
