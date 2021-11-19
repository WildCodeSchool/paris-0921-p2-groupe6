import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductCard from './ProductCard';

function FetchBarcodeProduct({ setResult, result, setCamera, fetchedProduct, setFetchedProduct }) {
  const [isLoading, setIsLoading] = useState(true);

  function Camera() {
    setCamera(false);
  }

  useEffect(() => {
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${result}.json`)
      .then((response) => response.data)
      .then((data) => {
        if (data.status === 1) {
          Camera();
          setFetchedProduct(data.product);
          setIsLoading(!isLoading);
        } else {
          setResult(null);
        }
      });
  }, []);

  useEffect(() => {}, [isLoading]);

  return <div>{isLoading ? <div>Loading...</div> : <ProductCard product={fetchedProduct} />}</div>;
}

export default FetchBarcodeProduct;
