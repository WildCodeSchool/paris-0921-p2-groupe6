import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import CurrentUserNameContext from '../Contexts/userContext';
import CurrentAllFavoritesContext from '../Contexts/favoritesContext';
import CurrentFinalChoicesContext from '../Contexts/finalChoices';
import './Card.css';

import More from '../Assets/More.png';

function SoftDrinkCard({ name, calories, sugar, imgUrl }) {
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
    setIsAdded(!isAdded);
    if (isAdded) {
      setUserChoice(userChoice.filter((element) => element.itemName != name));
    } else {
      setUserChoice([
        ...userChoice,
        { username: userName, itemCategory: 'drinks', itemName: name, calories: calories, sugar: sugar, imgUrl: imgUrl },
      ]);
    }
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
