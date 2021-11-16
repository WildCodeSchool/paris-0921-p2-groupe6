import React, { useState } from 'react';

import './Card.css';

import More from '../Assets/more-mayo.png';

function TakeAwayCard({ name, store, portion, calories, fat, carbs, protein, imgUrl }) {
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
    <div className="TakeAway-Card">
      <div className="TakeAway-img-container">
        {more ? (
          <div className="TakeAway-front">
            <div className="TakeAway-title">{name}</div>
            <img src={imgUrl} alt={name} className="TakeAway-card-image" />
            <button className="TakeAway-material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="TakeAway-material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              add_shopping_cart
            </button>
            <button className="TakeAway-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="TakeAway-back">
            <div className="TakeAway-desc-back">
              <div className="TakeAway-desc-title">{name}</div>
              <div className="TakeAway-desc-details">
                <div className="TakeAway-desc-details-li">Restaurant : {store}</div>
                <div className="TakeAway-desc-details-li">Portion: {portion}</div>
                <div className="TakeAway-desc-details-li">Calories: {calories}Kcal</div>
                <div className="TakeAway-desc-details-li">Fat: {fat}</div>
                <div className="TakeAway-desc-details-li">Carbs: {carbs}</div>
                <div className="TakeAway-desc-details-li">Protein: {protein}</div>
              </div>
            </div>
            <button className="TakeAway-material-icons-outlined" id="btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TakeAwayCard;
