import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../logo.png';

import './Age.css';

function Age() {
  const history = useHistory();

  return (
    <main className="BirthDateCheckContainer">
      <img src={logo} alt="lazy Nights logo" />
      <p className="BirthDateCheckText">
        Tired of everything ? <br />
        You just broke up ? <br />
        Or you want to celebrate with your friends ? <br />
        You will find everything you are looking for a
      </p>
      <h2>
        Lazy Night :<br />
        fat food, fat drinks and fat movies !
      </h2>
      <p className="BirthDateCheckText">Leave your brain aside and follow us !</p>
      <div className="AgeBox">
        <p className="BirthDateCheckBox">Sorry, but we have to ask : </p>
        <h3>Are you 18 years old ?</h3>
        <p className="BirthDateCheckBox">
          <button className="AgeButton" onClick={() => history.push('/HomeConditions')}>
            Yes
          </button>

          <button className="AgeButton" onClick={() => history.push('/Under18')}>
            No
          </button>
        </p>
      </div>
    </main>
  );
}

export default Age;
