import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

import FetchSoftDrink from './fetchSoftDrink';
import FetchAlcoholDrinks from './fetchAlcoholDrink';
import FetchRecipe from './fetchrecipe';
import FetchTakeAway from './fetchTakeAway';
import FetchMovies from './fetchMovies';

import './Offer.css';

function Offer({ mood, fat, drink }) {
  return (
    <main>
      <div className="Offer">
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
