import React, { useState } from 'react';

import './Card.css';

import More from '../Assets/more-mayo.png';

function AlcoholDrinkCard({ name, calories, sugar, imgUrl }) {
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
    <div className="AlcoholDrink-Card">
      <div className="AlcoholDrink-img-container">
        {more ? (
          <div className="AlcoholDrink-front">
            <img src={imgUrl} alt={name} className="AlcoholDrink-card-image" />
            <button className="AlcoholDrink-material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="AlcoholDrink-material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              add_shopping_cart
            </button>
            <button className="AlcoholDrink-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="AlcoholDrink-back">
            <div className="AlcoholDrink-desc-back">
              <h2 className="AlcoholDrink-desc-title">{name}</h2>
              <div className="AlcoholDrink-desc-details">
                <div className="AlcoholDrink-desc-details-li">Calories: {calories}Kcal</div>
                <div className="AlcoholDrink-desc-details-li">Sugar: {sugar}</div>
              </div>
            </div>
            <button className="AlcoholDrink-material-icons-outlined" id="btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlcoholDrinkCard;
