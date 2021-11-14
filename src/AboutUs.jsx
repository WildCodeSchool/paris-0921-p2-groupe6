import React from 'react';
import FetchMovies from './Components/fetchMovies.jsx';
import FetchAlcoholDrinks from './Components/fetchAlcoholDrink';

function AboutUs() {
  return (
    <main>
      <FetchAlcoholDrinks />
      <FetchMovies />
    </main>
  );
}

export default AboutUs;
