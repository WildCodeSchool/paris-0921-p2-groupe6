import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContactUs } from './Components/ContactUs';

import Etienne from './Assets/etienne.png';
import Sophie from './Assets/sophieFood.png';
import Vincenzo from './Assets/vincenzo.png';
import SmallLogo from './SmallLogo.png';

import './AboutUs.css';

function AboutUs() {
  return (
    <main>
      <NavLink className="link" activeClassName="active" exact to="/">
        <img src={SmallLogo} alt="Lazy Night Small Logo" className="AboutUsLogo" />
      </NavLink>
      <div className="AboutUsBox">
        <h1 className="AboutUsTopFirstTitle">About Us</h1>
        <div className="AboutUsTop">
          <h2 className="AboutUsTitle">We are your Fat Generator! </h2>
          <p className="AboutUsConcept">
            <em>Facts:</em> <br /> Fat act directly on your dopamines neurons that brings you pleasure and satisfaction. According to this research:
            Circulating Triglycerides Gate Dopamine- Associated Behaviors through DRD2-Expressing, there is a direct link between eating fat and
            pleasure.
          </p>
        </div>
        <div className="AboutTeam">
          <h2 className="AboutUsTeamTitle">Who are we?</h2>

          <div className="AboutUsMembers">
            <div className="AboutUsTeam">
              <h3 className="AboutUsTeamTitle">Etienne</h3>
              <img src={Etienne} alt="portrait of Etienne" className="portraitTeam" />
            </div>
            <div className="AboutUsTeam">
              <h3 className="AboutUsTeamTitle">Sophie </h3>
              <img src={Sophie} alt="Sophie eating poulp" className="portraitTeam" />
            </div>
            <div className="AboutUsTeam">
              <h3 className="AboutUsTeamTitle">Vincenzo</h3>
              <img src={Vincenzo} alt="Portrait of Vincenzo" className="portraitTeam" />
            </div>
          </div>
          <p className="AboutUsTeamPresentation">
            Food lovers, <br />
            fat providers!
          </p>
        </div>
        <div className="ContactUs">
          <h2 className="ContactUsTitle">Contact us</h2>
          <p className="ContactUsText">Any questions, requests, wishes or just to say you love our concept, feel free to contact us!</p>

          <ContactUs />
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
