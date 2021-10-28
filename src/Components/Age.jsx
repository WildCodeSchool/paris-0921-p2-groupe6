import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../logo.png';

import './Age.css';

function Age() {
  return (
    <div className="BirthDateCheckContainer">
      <img src={logo} alt="lazy Nights logo" />
      <p className="BirthDateCheckText">
        Tired of everything ? <br />
        You just broke up ? <br />
        Or you want to celebrate with your friends ? <br />
        You will find everything you are looking for a <br />
        Lazy Night :
      </p>
      <h2>fat food, fat drinks and fat movies ! </h2>
      <p className="BirthDateCheckText">Leave your brain aside and follow us !</p>
      <div className="Age">
        <p className="BirthDateCheckBox">Sorry, but we have to ask : </p>
        <h3>Are you 18 years old ?</h3>
        <p className="BirthDateCheckBox">
          <Link to="/home1">
            <button className="AgeButton">Yes</button>
          </Link>
          <Link to="./Under18.jsx">
            <button className="AgeButton">No</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Age;
