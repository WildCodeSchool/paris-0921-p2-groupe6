import React, { useState } from 'react';
import SmallLogo from '../SmallLogo.png';

import './HomeConditions.css';

function HomeConditions() {
  const [name, setName] = useState('');

  const display = (e) => {
    e.preventDefault();
  };

  const options = [
    ['lazy', 'happy', 'blue', 'sad : i broke up'],
    ['alone', 'with a friend', 'with my tribe'],
    ['a guilty fat pleasure', 'a tons of fat'],
    ['be totally sober', 'be tipsy', 'feel drunk'],
  ];

  return (
    <main>
      <img src={SmallLogo} alt="Lazy Night Small Logo" className="HomeConditionsLogo" />
      <div className="HomeConditions">
        <h2 className="HomeConditionsTitle">
          To access your Lazy Night, <br />
          we need few more informations :{' '}
        </h2>
        <h3 className="HomeConditionsQuestion"> What is your name ?</h3>
        <form className="HomeConditionsInput">
          <label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <input type="submit" value="send" onClick={display} className="HomeConditionssendButton" />
          </label>
        </form>

        <form className="HomeConditionsMood">
          <label htmlFor="Mood">Today, I feel </label>
          <select name="mood" id="mood-select">
            <option value="">Choose an option</option>
            {options[0].map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </form>

        <form className="HomeConditionsNumber">
          <label htmlFor="number">I will be </label>
          <select name="number" id="number-select">
            <option value="">1, 2, 3 ?</option>
            {options[1].map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </form>

        <form className="HomeConditionsFat">
          <label htmlFor="fat">I need </label>
          <select name="fat" id="fat-select">
            <option value="">fat or fat ?</option>
            {options[2].map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </form>

        <form className="HomeConditionsDrink">
          <label htmlFor="drink">I want to </label>
          <select name="drink" id="drink-select">
            <option value="">sober or not sober ?</option>
            {options[3].map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </form>

        <button className="HomeConditionsSubmit">Give me my lazy night !</button>
      </div>
    </main>
  );
}

export default HomeConditions;
