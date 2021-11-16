import React from 'react';
import Sophie from './Assets/sophieFood.png';

import './AboutUs.css';

function AboutUs() {
  return (
    <main>
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
          <div className="AboutUsTeamEtienne">
            <h3 className="AboutUsTeamTitle">Etienne</h3>
            <p className="AboutUsTeam"></p>
          </div>
          <div className="AboutUsTeamSophie">
            <h3 className="AboutUsTeamTitle">Sophie </h3>
            <p className="AboutUsTeam">likes chocolat, cheese and sometimes fight iwith her food !</p>
          </div>
          <img src={Sophie} alt="Sophie eating poulp" className="portraitSophie" />
          <div className="AboutUsTeamVincenzo">
            <h3 className="AboutUsTeamTitle">Vincenzo</h3>
            <p className="AboutUsTeam"></p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
