import React, { useState } from 'react';

import './Card.css';

import More from '../Assets/more-mayo.png';

function SoftDrinkCard({ name, calories, sugar, imgUrl }) {
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
    <div className="SoftDrink-Card">
      <div className="SoftDrink-img-container">
        {more ? (
          <div className="SoftDrink-front">
            <img src={imgUrl} alt={name} className="SoftDrink-card-image" />
            <button className="SoftDrink-material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="SoftDrink-material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              add_shopping_cart
            </button>
            <button className="SoftDrink-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="SoftDrink-back">
            <div className="SoftDrink-desc-back">
              <h2 className="SoftDrink-desc-title">{name}</h2>
              <div className="SoftDrink-desc-details">
                <div className="SoftDrink-desc-details-li">Calories: {calories}Kcal</div>
                <div className="SoftDrink-desc-details-li">Sugar: {sugar}</div>
              </div>
            </div>
            <button className="SoftDrink-material-icons-outlined" id="btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SoftDrinkCard;
