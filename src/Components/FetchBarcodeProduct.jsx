import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './FetchBarcodeProduct.css';

import More from '../Assets/More.png';

function FetchBarcodeProduct({ result, setCamera, fetchedProduct, setFetchedProduct }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function Camera() {
    setCamera(false);
  }

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  function handleClickAdded() {
    setIsAdded(!isAdded);
  }

  function handleClickFlip() {
    setMore(!more);
  }

  useEffect(() => {
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${result}.json`)
      .then((response) => response.data)
      .then((data) => {
        if (data.status === 1) {
          Camera();
          // console.log(data);
          setFetchedProduct(data.product);
          setIsLoading(!isLoading);
        }
      });
  }, []);

  useEffect(() => {
    // console.log(fetchedProduct);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="product-Card">
            <div className="product-img-container">
              {more ? (
                <div className="product-front">
                  <h3 className="product-desc">{fetchedProduct.product_name}</h3>
                  <img className="card-image" src={fetchedProduct.selected_images.front.display.fr} alt={fetchedProduct.product_name} />
                  <button className="material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
                    star
                  </button>
                  <button className="material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
                    bookmark_add
                  </button>
                  <button className="btn-more" onClick={handleClickFlip}>
                    <img src={More} alt="more" />
                  </button>
                </div>
              ) : (
                <div className="product-back">
                  <div className="product-desc-back">
                    <h2 className="product-desc-title">{fetchedProduct.product_name}</h2>
                    <h3 className="product-desc-name">{fetchedProduct.generic_name}</h3>
                    <div className="product-desc-details">
                      <div className="product-desc-details-li">
                        Calories: {fetchedProduct.nutriments.energy_kcal} {fetchedProduct.nutriments.energy.kcal_unit}
                      </div>
                      <div className="product-desc-details-li">
                        Carbs: {fetchedProduct.nutriments.carbohydrates} {fetchedProduct.nutriments.carbohydrates_unit}
                      </div>
                      <div className="product-desc-details-li">
                        Fat: {fetchedProduct.nutriments.fat} {fetchedProduct.nutriments.fat_unit}
                      </div>
                      <div className="product-desc-details-li">
                        Protein: {fetchedProduct.nutriments.proteins} {fetchedProduct.nutriments.proteins_unit}
                      </div>
                      <div className="product-desc-details-li">
                        Sugar: {fetchedProduct.nutriments.sugars} {fetchedProduct.nutriments.sugars_unit}
                      </div>
                      <div className="product-desc-details-li">Ingredients: {fetchedProduct.ingredients_text}</div>
                    </div>
                  </div>
                  <button className="material-icons-outlined" id="close" onClick={handleClickFlip}>
                    cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchBarcodeProduct;
