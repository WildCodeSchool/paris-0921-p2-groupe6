import React, { useState } from 'react';

import './ProductCard.css';

import More from '../Assets/More.png';

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  function handleClickAdded() {
    setIsAdded(!isAdded);
  }

  function handleClickFlip() {
    setMore(!more);
  }

  return (
    <div>
      <div className="product-Card">
        <div className="product-img-container">
          {more ? (
            <div className="product-front">
              <h3 className="product-desc">{product.product_name}</h3>
              <img className="card-image" src={product.selected_images.front.display.fr} alt={product.product_name} />
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
                <h2 className="product-desc-title">{product.product_name}</h2>
                <h3 className="product-desc-name">{product.generic_name}</h3>
                <div className="product-desc-details">
                  <div className="product-desc-details-li">
                    Calories: {product.nutriments.energy_kcal} {product.nutriments.energy.kcal_unit}
                  </div>
                  <div className="product-desc-details-li">
                    Carbs: {product.nutriments.carbohydrates} {product.nutriments.carbohydrates_unit}
                  </div>
                  <div className="product-desc-details-li">
                    Fat: {product.nutriments.fat} {product.nutriments.fat_unit}
                  </div>
                  <div className="product-desc-details-li">
                    Protein: {product.nutriments.proteins} {product.nutriments.proteins_unit}
                  </div>
                  <div className="product-desc-details-li">
                    Sugar: {product.nutriments.sugars} {product.nutriments.sugars_unit}
                  </div>
                  <div className="product-desc-details-li">Ingredients: {product.ingredients_text}</div>
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
  );
}

export default ProductCard;
