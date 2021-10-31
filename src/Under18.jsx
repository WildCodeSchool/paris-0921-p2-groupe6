import React from 'react';
import happyMeal from './Assets/happy-meal.png';
import milkGlass from './Assets/milk-glass.jpg';
import myLittlePony from './Assets/my-little-pony-movie.jpg';
import SmallLogo from './SmallLogo.png';

import './Under18.css';

function Under18() {
  return (
    <main className="Under18">
      <img src={SmallLogo} alt="Lazy Night Small Logo" className="under18Logo" />
      <h1 className="under18Title">
        Oh no, <br />
        you are not old enough to enter our service !{' '}
      </h1>
      <p className="under18text">No worries, here is a suggestion for you !</p>
      <h2 className="under18ImageTitle">What to eat : </h2>
      <img src={happyMeal} alt="happy meal" className="foodImages" />
      <h2>What to drink : </h2>
      <img src={milkGlass} alt="glass of milk" className="foodImages" />
      <h2>What to see : </h2>
      <img src={myLittlePony} alt="poster of little pony movie" className="foodImages" />
    </main>
  );
}

export default Under18;
