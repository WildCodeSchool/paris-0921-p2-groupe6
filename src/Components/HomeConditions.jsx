import React from 'react';
import SmallLogo from '../SmallLogo.png';

import './HomeConditions.css';

function HomeConditions() {
  const options = [
    { mood: ['lazy', 'happy', 'blue', 'so sad because i broke up'] },
    { guestsNumber: ['alone', 'with a friend', 'with my tribe'] },
    { amountOfFat: ['a guilty fat pleasure', 'a tons of fat'] },
    { drinks: ['be totally sober', 'be tipsy', 'feel drunk'] },
  ];

  return (
    <main>
      <img src={SmallLogo} alt="Lazy Night Small Logo" className="HomeConditionsLogo" />
      <div className="HomeConditions">
        <h2 className="HomeConditionsTitle">To access your Lazy Night, we need few more informations : </h2>
        <h3 className="HomeConditionsQuestion"> What is your name ?</h3>
        <form className="HomeConditionsInput">
          <label>
            <input type="text" name="name" />
          </label>
          <label>
            <input type="submit" value="send" />
          </label>
        </form>
        <form className="HomeConditionsMood">
          <h3 className="HomeConditionsQuestion">Today, I feel </h3>
          <select>
            {options.map((option) => (
              // eslint-disable-next-line react/jsx-key
              <option mood={option.mood}></option>
            ))}
          </select>
        </form>

        <h3 className="HomeConditionsQuestion">For this lazy night, I will be {} </h3>
        <h3 className="HomeConditionsQuestion">I want {} </h3>
        <h3 className="HomeConditionsQuestion">At the end of this lazy night, I want to {}</h3>
        <button className="HomeConditionsSubmit">Give me my lazy night !</button>
      </div>
    </main>
  );
}

export default HomeConditions;
