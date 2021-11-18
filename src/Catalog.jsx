import React from 'react';

import BarCodeReader from './Components/BarCodeReader';
import CatalogSliders from './Components/CatalogSliders';

import './Catalog.css';

function Catalog() {
  return (
    <main>
      <h1 className="catalogTitle">A la carte</h1>
      <h3 className="catalogDesc">Discover all items and choose your favorite ! </h3>
      <CatalogSliders />
      <BarCodeReader />
    </main>
  );
}

export default Catalog;
