import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import CurrentUserNameContext from '../Contexts/userContext';
import CurrentAllFavoritesContext from '../Contexts/favoritesContext';
import logo from '../logo.png';

import More from '../Assets/More.png';

import './Card.css';

function RecipeCard({ image, title, calories, carbs, fat, protein, sugar }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { userName } = useContext(CurrentUserNameContext);
  const { allFavorites } = useContext(CurrentAllFavoritesContext);

  function AddToFavorite() {
    setIsFavorite(true);
    axios.post('http://localhost:8000/api/favorites/food/recipe', {
      username: userName,
      itemCategory: 'recipe',
      itemName: title,
      calories: calories,
      fat: fat,
      carbs: carbs,
      protein: protein,
      sugar: sugar,
      imgUrl: image,
    });
  }

  function DeleteFromFavorite() {
    setIsFavorite(false);
    axios.delete(`http://localhost:8000/api/favorites/food/${userName}/${title}`);
  }

  function handleClickFavorite() {
    isFavorite ? DeleteFromFavorite() : AddToFavorite();
  }

  function handleClickAdded() {
    setIsAdded(!isAdded);
  }

  function handleClickFlip() {
    setMore(!more);
  }

  useEffect(() => {
    if (allFavorites.some((object) => object.username === userName && object.itemName === name && object.itemCategory === 'drinks')) {
      setIsFavorite(true);
    }
  }, []);

  useEffect(() => {}, [isFavorite]);

  return (
    <div className="recipe-Card">
      <div className="recipe-img-container">
        {more ? (
          <div className="recipe-front">
            <div className="recipe-title">{title.length > 15 ? title.slice(0, 15) + '...' : title}</div>
            <img className="recipe-card-image" src={image} alt={title} />
            <button className="recipe-material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="recipe-material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              add_shopping_cart
            </button>
            <button className="recipe-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="recipe-back">
            <div className="recipe-desc-back">
              <div className="recipe-desc-title">{title}</div>
              <img src={logo} className="recipe-logo-fond-desc" id="logo-fond-desc" alt="fond-desc-logo" />
              <div className="recipe-desc-details">
                <div className="recipe-desc-details-li">Calories: {calories}Kcal</div>
                <div className="recipe-desc-details-li">Carbs: {carbs}</div>
                <div className="recipe-desc-details-li">Fat: {fat}</div>
                <div className="recipe-desc-details-li">Protein: {protein}</div>
                <div className="recipe-desc-details-li">Sugar: {sugar}</div>
              </div>
            </div>
            <button className="recipe-material-icons-outlined" id="btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
