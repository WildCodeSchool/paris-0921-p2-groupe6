import React from 'react';
import FetchAlcoholDrinks from './Components/fetchAlcoholDrink';
import FetchMovies from './Components/fetchMovies';
import FetchTakeAway from './Components/fetchTakeAway';
import NutritionLabel from './Components/nutrition-label';

import { NavLink } from 'react-router-dom';

import SmallLogo from './SmallLogo.png';

import './FinalResults.css';

function FinalResults() {
  return (
    <div>
      <NavLink className="link" activeClassName="active" exact to="/">
        <img src={SmallLogo} alt="Lazy Night Small Logo" className="FinalResultsLogo" />
      </NavLink>
      <h1 className="FinalResultsPageTitle">And here is your lazy night !</h1>
      <h2 className="FinalResultsH2">Enjoy !</h2>
      <div>
        <FetchTakeAway />
        <FetchAlcoholDrinks />
        <FetchMovies />
      </div>
      <div className="FinalResultsNutritionLabel">
        <NutritionLabel />
      </div>
    </div>
  );
}

export default FinalResults;
