import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CurrentUserNameContext from '../Contexts/userContext';

import Offer from './Offer';
import SmallLogo from '../SmallLogo.png';

import './HomeConditions.css';

function HomeConditions() {
  const { userName, setUserName } = useContext(CurrentUserNameContext);
  const [mood, setMood] = useState('');
  const [drink, setDrink] = useState('');
  const [fat, setFat] = useState('');
  const nameForm = useRef(null);
  const [conditionsSubmitted, setConditionsSubmitted] = useState(false);
  const choiceView = useRef(null);

  function ScrollTo() {
    choiceView.current.scrollIntoView(true, { behavior: 'auto', block: 'start', inline: 'start' });
  }

  function ResetUserName() {
    setUserName('');
    setConditionsSubmitted(false);
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
        <img src={SmallLogo} alt="Lazy Night Small Logo" className="HomeConditionsLogo" />
      </NavLink>

      <div className="HomeConditions">
        {!conditionsSubmitted && (
          <div>
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
              <button className="HomeConditionUserChangeButton" onClick={ResetUserName}>
                Change User
              </button>
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
          </div>
        )}
        {!conditionsSubmitted && (
          <button
            className="HomeConditionsSubmit"
            onClick={() => {
              if (mood.length && fat.length && drink.length) {
                setConditionsSubmitted(true);
                ScrollTo();
              } else {
                window.alert('You must define all your choices before!');
              }
            }}
          >
            Give me my lazy night !
          </button>
        )}

        {conditionsSubmitted && (
          <button
            className="HomeConditionsReset"
            onClick={() => {
              setConditionsSubmitted(false);
              setDrink('');
              setMood('');
              setFat('');
            }}
          >
            Reset my choices
          </button>
        )}
      </div>

      <div ref={choiceView}></div>
      {conditionsSubmitted && <Offer mood={mood} drink={drink} fat={fat} />}
    </main>
  );
}

export default HomeConditions;
