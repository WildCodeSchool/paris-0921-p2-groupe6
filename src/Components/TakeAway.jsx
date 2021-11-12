import React, { useState } from 'react';

import './TakeAwayDrinkCard.css';

import More from '../Assets/more-mayo.png';

function TakeAwayDrinkCard({ name, calories, sugar, imgUrl }) {
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
    <div className="TakeAwayDrink-Card">
      <div className="TakeAwayDrink-img-container">
        {more ? (
          <div className="TakeAwayDrink-front">
            <img src={imgUrl} alt={name} className="TakeAwayDrink-card-image" />
            <button className="TakeAwayDrink-material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="TakeAwayDrink-material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              bookmark_add
            </button>
            <button className="TakeAwayDrink-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="TakeAwayDrink-back">
            <div className="TakeAwayDrink-desc-back">
              <h2 className="TakeAwayDrink-desc-title">{name}</h2>
              <div className="TakeAwayDrink-desc-details">
                <div className="TakeAwayDrink-desc-details-li">Calories: {calories}Kcal</div>
                <div className="TakeAwayDrink-desc-details-li">Sugar: {sugar}</div>
              </div>
            </div>
            <button className="TakeAwayDrink-material-icons-outlined" id="btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TakeAwayDrinkCard;
