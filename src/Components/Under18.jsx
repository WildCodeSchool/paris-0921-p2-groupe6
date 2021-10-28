import React from 'react';
import happyMeal from '../Assets/happy-meal.png';
import milkGlass from '../Assets/milk-glass.jpg';
import myLittlePony from '../Assets/my-little-pony-movie.jpg';

function Under18() {
  return (
    <div className="Under18">
      <p>Uh, oh, you are not old enough to enter our service ! </p>
      <p>No worries, here is a suggestion for you : </p>
      <p>What to eat : </p>
      <img src={happyMeal} alt="happy meal" />
      <p>What to drink : </p>
      <img src={milkGlass} alt="glass of milk" />
      <p>What to see : </p>
      <img src={myLittlePony} alt="poster of little pony movie" />
    </div>
  );
}

export default Under18;
