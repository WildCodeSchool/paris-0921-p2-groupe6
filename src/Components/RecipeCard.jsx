import React, { useState } from 'react';

import More from '../Assets/More.png';

import './RecipeCard.css';

function RecipeCard({ image, title, calories, carbs, fat, protein, sugar }) {
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
    <div className="recipe-Card">
      <div className="recipe-img-container">
        {more ? (
          <div className="recipe-front">
            <h3 className="recipe-desc">{title.length > 15 ? title.slice(0, 15) + '...' : title}</h3>
            <img className="card-image" src={image} alt={title} />
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
              <h2 className="recipe-desc-title">{title}</h2>
              <div className="recipe-desc-details">
                <div className="recipe-desc-details-li">Calories: {calories}Kcal</div>
                <div className="recipe-desc-details-li">Carbs: {carbs}</div>
                <div className="recipe-desc-details-li">Fat: {fat}</div>
                <div className="recipe-desc-details-li">Protein: {protein}</div>
                <div className="recipe-desc-details-li">Sugar: {sugar}</div>
              </div>
            </div>
            <button className="material-icons-outlined" id="close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
