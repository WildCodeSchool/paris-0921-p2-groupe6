import React from 'react';
import FetchSoftDrink from './fetchSoftDrink';
import FetchRecipe from './fetchrecipe';

import FetchAlcoholDrinks from './fetchAlcoholDrink';
import FetchTakeAway from './fetchTakeAway';
import FetchMovies from './fetchMovies';

import './Offer.css';

function Offer({ mood, drink, fat }) {
  return (
    <main>
      <div>
        <h2 className="OfferTitleh2">Welcome to your lazy night !</h2>
        <p className="OfferPresentationText">
          Choose your meal, drink <br /> and movie to validate your choice !
        </p>
        <p className="OfferPresentationText"> You will discover the amount of your fat night !</p>
        {fat === 'TakewayAndDeliver' ? <FetchTakeAway /> : <FetchRecipe />}
        {drink === 'sober' ? <FetchSoftDrink /> : <FetchAlcoholDrinks />}
        {<FetchMovies category={mood} />}
      </div>
    </main>
  );
}

export default Offer;
