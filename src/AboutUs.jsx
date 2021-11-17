import React from 'react';
import Sophie from './Assets/sophieFood.png';
import SmallLogo from './SmallLogo.png';

import { NavLink } from 'react-router-dom';

import './AboutUs.css';

function AboutUs() {
  return (
    <main>
      <NavLink className="link" activeClassName="active" exact to="/">
        <img src={SmallLogo} alt="Lazy Night Small Logo" className="FinalResultsLogo" />
      </NavLink>
      <h1>About Us</h1>
      <div className="AboutUsTop">
        <h2 className="AboutUsTitle">We are your Fat Generator ! </h2>
        <p className="AboutUsConcept">
          <em>Facts :</em> <br /> Fat act directly on your dopamines neurons that brings you pleasure and satisfaction. According to this research :
          Circulating Triglycerides Gate Dopamine- Associated Behaviors through DRD2-Expressing, there is a direct link between eating fat and
          pleasure.
        </p>
      </div>
      <div className="AboutTeam">
        <h2 className="AboutUsTeamTitle">Who we are ?</h2>
        <p className="AboutUsTeamPresentation">Food lovers, fat providers !</p>
        <div className="AboutUsMembers">
          <div className="AboutUsTeam">
            <h3 className="AboutUsTeamTitle">Etienne</h3>
            <img src={Sophie} alt="Sophie eating poulp" className="portraitTeam" />
            <p className="AboutUsTeam">likes chocolat, cheese and sometimes fight iwith her food !</p>
          </div>
          <div className="AboutUsTeam">
            <h3 className="AboutUsTeamTitle">Sophie </h3>
            <img src={Sophie} alt="Sophie eating poulp" className="portraitTeam" />
            <p className="AboutUsTeam">likes chocolat, cheese and sometimes fight iwith her food !</p>
          </div>
          <div className="AboutUsTeam">
            <h3 className="AboutUsTeamTitle">Vincenzo</h3>
            <img src={Sophie} alt="Sophie eating poulp" className="portraitTeam" />
            <p className="AboutUsTeam">likes chocolat, cheese and sometimes fight iwith her food !</p>
          </div>
        </div>
      </div>
      <div className="ContactUs">
        <h2 className="ContactUsTitle">Contact us</h2>
        <p className="ContactUsText">
          Any questions, requests, wishes or <br />
          just to say you love our concept, feel free to contact us !
        </p>

        <form className="ContactForm">
          <div className="FormGroupName">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="FormGroupEmail">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="FormGroupMessage">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="FormBtn">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default AboutUs;
