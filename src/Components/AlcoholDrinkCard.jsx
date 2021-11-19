import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import CurrentUserNameContext from '../Contexts/userContext';
import CurrentAllFavoritesContext from '../Contexts/favoritesContext';
import CurrentFinalChoicesContext from '../Contexts/finalChoices';

import More from '../Assets/More.png';
import logo from '../logo.png';

import './Card.css';

function AlcoholDrinkCard({ name, calories, sugar, imgUrl }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { userName } = useContext(CurrentUserNameContext);
  const { allFavorites } = useContext(CurrentAllFavoritesContext);
  const { userChoice, setUserChoice } = useContext(CurrentFinalChoicesContext);

  function AddToFavorite() {
    if (userName) {
      setIsFavorite(true);
      axios.post('http://localhost:8000/api/favorites/drinks', {
        username: userName,
        itemCategory: 'drinks',
        itemName: name,
        calories: calories,
        sugar: sugar,
        imgUrl: imgUrl,
      });
    } else {
      window.alert('You must be logged in to use the favorite feature');
    }
  }

  function DeleteFromFavorite() {
    setIsFavorite(false);
    axios.delete(`http://localhost:8000/api/favorites/drinks/${userName}/${name}`);
  }

  function handleClickFavorite() {
    isFavorite ? DeleteFromFavorite() : AddToFavorite();
  }

  function handleClickAdded() {
    if (isAdded) {
      setUserChoice(userChoice.filter((element) => element.name !== name));
      setIsAdded(false);
    } else {
      setUserChoice([...userChoice, { username: userName, itemCategory: 'drinks', name: name, calories: calories, sugar: sugar, imgUrl: imgUrl }]);
      setIsAdded(true);
    }
  }

  function handleClickFlip() {
    setMore(!more);
  }

  useEffect(() => {
    if (allFavorites.some((object) => object.username === userName && object.itemName === name && object.itemCategory === 'drinks')) {
      setIsFavorite(true);
    }
    if (userChoice.some((object) => object.username === userName && object.itemName === name && object.itemCategory === 'drinks')) {
      setIsAdded(true);
    }
  }, []);
  useEffect(() => {}, [isFavorite, isAdded, userChoice]);

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
              <div className="AlcoholDrink-desc-title">{name}</div>
              <img src={logo} className="Alcohol-logo-fond-desc" id="logo-fond-desc" alt="fond-desc-logo" />
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
