import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './FetchBarCode.css';

import More from '../Assets/More.png';

function FetchBarcode({ result, setCamera }) {
  const [fetchedProduct, setFetchedProduct] = useState([]);
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
        data.status === 1 && setFetchedProduct(data.product);
        // console.log(data.product);
      })
      .then(Camera())
      // .then(console.log(fetchedProduct))
      .then(setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="recipe-Card">
            <div className="recipe-img-container">
              {more ? (
                <div className="recipe-front">
                  <h3 className="recipe-desc">{fetchedProduct.product_name}</h3>
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
                <div className="recipe-back">
                  <div className="recipe-desc-back">
                    <h2 className="recipe-desc-title">{fetchedProduct.product_name}</h2>
                    <h3 className="recipe-desc-name">{fetchedProduct.generic_name}</h3>
                    <div className="recipe-desc-details">
                      <div className="recipe-desc-details-li">
                        Calories: {fetchedProduct.nutriments.energy_kcal} {fetchedProduct.nutriments.energy.kcal_unit}
                      </div>
                      <div className="recipe-desc-details-li">
                        Carbs: {fetchedProduct.nutriments.carbohydrates} {fetchedProduct.nutriments.carbohydrates_unit}
                      </div>
                      <div className="recipe-desc-details-li">
                        Fat: {fetchedProduct.nutriments.fat} {fetchedProduct.nutriments.fat_unit}
                      </div>
                      <div className="recipe-desc-details-li">
                        Protein: {fetchedProduct.nutriments.proteins} {fetchedProduct.nutriments.proteins_unit}
                      </div>
                      <div className="recipe-desc-details-li">
                        Sugar: {fetchedProduct.nutriments.sugars} {fetchedProduct.nutriments.sugars_unit}
                      </div>
                      <div className="recipe-desc-details-li">Ingredients: {fetchedProduct.ingredients_text}</div>
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

export default FetchBarcode;
