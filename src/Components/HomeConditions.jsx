import React, { useState, useEffect } from 'react';

import Offer from './Offer.jsx';

import SmallLogo from '../SmallLogo.png';

import './HomeConditions.css';

function HomeConditions() {
  const [name, setName] = useState('');
  const [mood, setMood] = useState('');
  const [number, setNumber] = useState('');
  const [drink, setDrink] = useState('');
  const [fat, setFat] = useState('');
  const [conditionsSubmitted, setConditionsSubmitted] = useState(false);

  const nameDisplay = (e) => {
    e.preventDefault();
  };

  const moodOptions = [
    {
      label: 'lazy',
      value: 'lazy',
    },
    {
      label: 'happy',
      value: 'happy',
    },
    {
      label: 'blue',
      value: 'blue',
    },
  ];

  const numberOptions = [
    {
      label: 'alone',
      value: 'alone',
    },
    {
      label: 'with a friend',
      value: 'friend',
    },
    {
      label: 'with my tribe',
      value: 'tribe',
    },
  ];

  const fatOptions = [
    {
      label: 'to cook fat',
      value: 'cook',
    },
    {
      label: 'fat to takeaway/deliver',
      value: 'TakewayAndDeliver',
    },
  ];

  const drinkOptions = [
    {
      label: 'be totally sober',
      value: 'sober',
    },
    {
      label: 'feel drunk',
      value: 'drunk',
    },
  ];

  useEffect(() => {}, [conditionsSubmitted]);

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
          <select name="mood" id="mood-select" onBlur={(e) => setMood(e.target.value)} className="HomeConditionsSelect">
            <option value="">...</option>
            {moodOptions.map((mood) => {
              return (
                <option key={mood.value} value={mood.value}>
                  {mood.label}
                </option>
              );
            })}
          </select>
        </form>

        <form className="HomeConditionsNumber">
          <label htmlFor="number">I will be </label>
          <select name="number" id="number-select" onBlur={(e) => setNumber(e.target.value)} className="HomeConditionsSelect">
            <option value="">...</option>
            {numberOptions.map((number) => {
              return (
                <option key={number.value} value={number.value}>
                  {number.label}
                </option>
              );
            })}
          </select>
        </form>

        <form className="HomeConditionsDrink">
          <label htmlFor="drink">I want to </label>
          <select name="drink" id="drink-select" onBlur={(e) => setDrink(e.target.value)} className="HomeConditionsSelect">
            <option value="">...</option>
            {drinkOptions.map((drink) => {
              return (
                <option key={drink.value} value={drink.value}>
                  {drink.label}
                </option>
              );
            })}
          </select>
        </form>

        <form className="HomeConditionsFat">
          <label htmlFor="fat">I prefer </label>
          <select name="fat" id="fat-select" onBlur={(e) => setFat(e.target.value)} className="HomeConditionsSelect">
            <option value="">...</option>
            {fatOptions.map((fat) => {
              return (
                <option key={fat.value} value={fat.value}>
                  {fat.label}
                </option>
              );
            })}
          </select>
        </form>

        <button
          className="HomeConditionsSubmit"
          onClick={() => {
            setConditionsSubmitted(true);
          }}
        >
          Give me my lazy night !
        </button>
      </div>
      {(mood.length, drink.length, fat.length, number.length, conditionsSubmitted === true && <Offer mood={mood} drink={drink} fat={fat} />)}
    </main>
  );
}

export default HomeConditions;
