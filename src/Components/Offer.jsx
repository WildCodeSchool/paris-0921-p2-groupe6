import React from 'react';
import FetchAlcoholDrink from './fetchAlcoholDrink';
import FetchSoftDrink from './fetchSoftDrink';

import './Offer.css';

function Offer() {
  return (
    <div>
      <h2 className="OfferTitleh2">Welcome to your lazy night !</h2>
      <p className="OfferPresentationText">
        Choose your meal, drink and movie to validate your choice !<br />
        And discover the amount of your fat night !
      </p>
      <FetchAlcoholDrink />
      <FetchSoftDrink />
    </div>
  );
}

export default Offer;
