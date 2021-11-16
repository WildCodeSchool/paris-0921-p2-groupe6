import React from 'react';
import { Route, Switch } from 'react-router';

import FooterNavbar from './FooterNavbar';
import HeaderNavbar from './HeaderNavbar';
import AboutUs from './AboutUs';
import Catalog from './Catalog';
import Favorites from './Favorites';
import HomeConditions from './Components/HomeConditions';
import HomePage from './Homepage';
import Under18 from './Under18';
import { CurrentUserNameContextProvider } from './Contexts/userContext';
import { CurrentAllFavoritesContextProvider } from './Contexts/favoritesContext';

import './App.css';

function App() {
  return (
    <div className="app">
      <CurrentUserNameContextProvider>
        <CurrentAllFavoritesContextProvider>
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
            <Route exact path="/HomeConditions">
              <HomeConditions />
            </Route>
          </Switch>
          <FooterNavbar />
        </CurrentAllFavoritesContextProvider>
      </CurrentUserNameContextProvider>
    </div>
  );
}

export default App;
