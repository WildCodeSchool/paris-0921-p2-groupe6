import React, { useState } from 'react';
import SmallLogo from '../SmallLogo.png';

import './HomeConditions.css';

function HomeConditions() {
  const [name, setName] = useState('');
  const [mood, setMood] = useState('');
  const [number, setNumber] = useState('');
  const [drink, setDrink] = useState('');
  const [fat, setFat] = useState('');

  const nameDisplay = (e) => {
    e.preventDefault();
  };

  function moodDisplay() {
    setMood(mood);
  }

  function numberDisplay() {
    setNumber(number);
  }

  function drinkDisplay() {
    setDrink(drink);
  }

  function fatDisplay() {
    setFat(fat);
  }

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
            <input type="submit" value="Yup that's me" onClick={nameDisplay} className="HomeConditionssendButton" />
          </label>
        </form>

        <form className="HomeConditionsMood">
          <label htmlFor="Mood">Today, I feel </label>
          <select name="mood" id="mood-select" onBlur={(e) => setMood(e.target.value)}>
            <option value="">Choose an option</option>
            {options[0].map((mood) => {
              return (
                <option key={mood} value={mood}>
                  {mood}
                </option>
              );
            })}
          </select>
        </form>

        <form className="HomeConditionsNumber">
          <label htmlFor="number">I will be </label>
          <select name="number" id="number-select" onBlur={(e) => setNumber(e.target.value)}>
            <option value="">1, 2, 3 ?</option>
            {options[1].map((number) => {
              return (
                <option key={number} value={number}>
                  {number}
                </option>
              );
            })}
          </select>
        </form>

        <form className="HomeConditionsDrink">
          <label htmlFor="drink">I want to </label>
          <select name="drink" id="drink-select" onBlur={(e) => setDrink(e.target.value)}>
            <option value="">sober or not sober ?</option>
            {options[3].map((drink) => {
              return (
                <option key={drink} value={drink}>
                  {drink}
                </option>
              );
            })}
          </select>
        </form>

        <form className="HomeConditionsFat">
          <label htmlFor="fat">I need </label>
          <select name="fat" id="fat-select" onBlur={(e) => setFat(e.target.value)}>
            <option value="">fat or fat ?</option>
            {options[2].map((fat) => {
              return (
                <option key={fat} value={fat}>
                  {fat}
                </option>
              );
            })}
          </select>
        </form>

        <button
          className="HomeConditionsSubmit"
          onClick={() => {
            moodDisplay();
            numberDisplay();
            drinkDisplay();
            fatDisplay();
          }}
        >
          Give me my lazy night !
        </button>
      </div>
    </main>
  );
}

export default HomeConditions;
