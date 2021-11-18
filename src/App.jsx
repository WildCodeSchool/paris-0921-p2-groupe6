import React from 'react';
import { Route, Switch } from 'react-router';

import { CurrentAllFavoritesContextProvider } from './Contexts/favoritesContext';
import { CurrentUserNameContextProvider } from './Contexts/userContext';
import { CurrentFinalChoicesContextProvider } from './Contexts/finalChoices';

import FooterNavbar from './FooterNavbar';
import HeaderNavbar from './HeaderNavbar';
import AboutUs from './AboutUs';
import Catalog from './Catalog';
import Favorites from './Favorites';
import FinalResults from './FinalResults';
import HomeConditions from './Components/HomeConditions';
import HomePage from './Homepage';
import Under18 from './Under18';
import Basket from './Basket';

import './App.css';

function App() {
  return (
    <div className="app">
      <CurrentUserNameContextProvider>
        <CurrentFinalChoicesContextProvider>
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
              <Route exact path="/FinalResults">
                <FinalResults />
              </Route>
              <Route exact path="/Basket">
                <Basket />
              </Route>
            </Switch>
            <FooterNavbar />
          </CurrentAllFavoritesContextProvider>
        </CurrentFinalChoicesContextProvider>
      </CurrentUserNameContextProvider>
    </div>
  );
}

export default App;
