import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import logo from '../logo.png';

import './Age.css';

function Age() {
  const history = useHistory();

  // function HandleClick() {
  //   history.replace('/Under18');
  // }

  return (
    <div className="BirthDateCheckContainer">
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
          <button className="AgeButton">Yes</button>
          <Link to="../Under18">
            <button className="AgeButton" onClick={() => history.push('/Under18')}>
              No
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Age;
