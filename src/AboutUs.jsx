import React from 'react';
import FetchAlcoholDrink from './Components/fetchAlcoholDrink.jsx';
import FetchSoftDrink from './Components/fetchSoftDrink.jsx';

function AboutUs() {
  return (
    <main>
      <h1>A Propos</h1>
      <FetchAlcoholDrink />
      <FetchSoftDrink />
    </main>
  );
}

export default AboutUs;
