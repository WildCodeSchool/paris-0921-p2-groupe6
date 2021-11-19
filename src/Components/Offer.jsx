import React from 'react';

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
        <p className="OfferPresentationText2"> You will discover the amount of your fat night !</p>
        {fat === 'TakewayAndDeliver' ? <FetchTakeAway /> : <FetchRecipe />}
        {drink === 'sober' ? <FetchSoftDrink /> : <FetchAlcoholDrinks />}
        {<FetchMovies category={mood} />}
        <p className="OfferPresentationText">
          You can also include items in your basket <br />
          from your favorite page and the catalog! <br />
          When you are ready, go to your basket to see your Lazy Night!
        </p>
      </div>
    </main>
  );
}

export default Offer;
