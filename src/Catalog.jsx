import React from 'react';
import { NavLink } from 'react-router-dom';

import BarCodeReader from './Components/BarCodeReader';
import CatalogSliders from './Components/CatalogSliders';

import SmallLogo from './SmallLogo.png';

import './Catalog.css';

function Catalog() {
  return (
    <main>
      <NavLink className="link" activeClassName="active" exact to="/">
        <img src={SmallLogo} alt="Lazy Night Small Logo" className="CatalogLogo" />
      </NavLink>
      <h1 className="catalogTitle">A la carte</h1>
      <h3 className="catalogDesc">Discover all items and choose your favorite ! </h3>
      <CatalogSliders />
      <BarCodeReader />
    </main>
  );
}

export default Catalog;
