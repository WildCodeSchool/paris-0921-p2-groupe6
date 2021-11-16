import React, { useState, useEffect, useRef, useContext } from 'react';
import UserContext from '../Contexts/userContext';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Offer from './Offer.jsx';
import SmallLogo from '../SmallLogo.png';

import './HomeConditions.css';

function HomeConditions() {
  const history = useHistory();

  const { userName, setUserName } = useContext(UserContext);
  const [mood, setMood] = useState('');
  const [number, setNumber] = useState('');
  const [drink, setDrink] = useState('');
  const [fat, setFat] = useState('');
  const [conditionsSubmitted, setConditionsSubmitted] = useState(false);
  const nameForm = useRef(null);

  function ResetUserName() {
    setUserName('');
  }

  useEffect(() => {}, [userName]);

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

  function handleClickName() {
    const form = nameForm.current;
    setUserName(`${form['name'].value}`);
  }

  useEffect(() => {}, [conditionsSubmitted]);

  return (
    <main>
      <NavLink className="link" activeClassName="active" exact to="/">
        <img src={SmallLogo} alt="Lazy Night Small Banner" className="HomeConditionsLogo" />
      </NavLink>
      <div className="HomeConditions">
        <h2 className="HomeConditionsTitle">
          To access your Lazy Night, <br />
          we need few more informations :{' '}
        </h2>
        {!userName.length ? <h3 className="HomeConditionsQuestion"> What is your name ?</h3> : <h3>Hello {userName}</h3>}
        {!userName.length ? (
          <form className="HomeConditionsInput" ref={nameForm}>
            <input label={'name'} type="text" name={'name'} id="name" />
            <label>
              <input type="submit" value="Yup that's me" onClick={handleClickName} className="HomeConditionssendButton" />
            </label>
          </form>
        ) : (
          <button onClick={ResetUserName}>Change User</button>
        )}
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
            history.push('/Offer');
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
