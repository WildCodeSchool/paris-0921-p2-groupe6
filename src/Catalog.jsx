import React from 'react';
import BarCodeReader from './Components/BarCodeReader';

import './Catalog.css';
import SmallLogo from './SmallLogo.png';
import { NavLink } from 'react-router-dom';

function Catalog() {
  return (
    <main>
      <NavLink className="link" activeClassName="active" exact to="/">
        <img src={SmallLogo} alt="Lazy Night Small Logo" className="CatalogLogo" />
      </NavLink>
      <h1 className="catalogTitle">A la carte</h1>
      <h3 className="catalogDesc">Discover all items and choose your favorite ! </h3>
      <BarCodeReader />
    </main>
  );
}

export default Catalog;
