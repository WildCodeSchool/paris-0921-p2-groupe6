import React from 'react';
import { useHistory } from 'react-router-dom';
import FetchSoftDrink from './fetchSoftDrink';
import FetchRecipe from './fetchrecipe';

import FetchAlcoholDrinks from './fetchAlcoholDrink';
import FetchTakeAway from './fetchTakeAway';
import FetchMovies from './fetchMovies';

import { NavLink } from 'react-router-dom';

import SmallLogo from '../SmallLogo.png';

import './Offer.css';

function Offer({ mood, drink, fat }) {
  const history = useHistory();

  return (
    <main>
      <NavLink className="link" activeClassName="active" exact to="/">
        <img src={SmallLogo} alt="Lazy Night Small Logo" className="OfferLogo" />
      </NavLink>
      <div className="Offer">
        <h2 className="OfferTitleh2">Welcome to your lazy night !</h2>
        <p className="OfferPresentationText">
          Choose your meal, drink <br /> and movie to validate your choice !
        </p>
        <p className="OfferPresentationText"> Once your choice is made, you will discover the amount of your fat night !</p>
        {fat === 'TakewayAndDeliver' ? <FetchTakeAway /> : <FetchRecipe />}
        {drink === 'sober' ? <FetchSoftDrink /> : <FetchAlcoholDrinks />}
        {<FetchMovies category={mood} />}
        <button className="Offer-Button" onClick={() => history.push('/FinalResults')}>
          Choices made !
        </button>
      </div>
    </main>
  );
}

export default Offer;
