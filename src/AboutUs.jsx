import React from 'react';
import FetchAlcoholDrink from './Components/fetchAlcoholDrink.jsx';
import FetchSoftDrink from './Components/fetchSoftDrink.jsx';
import FetchTakeAway from './Components/fetchTakeAway.jsx';

function AboutUs() {
  return (
    <main>
      <h1>A Propos</h1>
      <FetchAlcoholDrink />
      <FetchSoftDrink />
      <FetchTakeAway />
    </main>
  );
}

export default AboutUs;
