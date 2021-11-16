import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import CurrentUserNameContext from '../Contexts/userContext';
import CurrentAllFavoritesContext from '../Contexts/favoritesContext';

import './TakeAwayCard.css';

import More from '../Assets/more-mayo.png';

function TakeAwayCard({ name, store, portion, calories, fat, carbs, protein, imgUrl }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { userName } = useContext(CurrentUserNameContext);
  const { allFavorites } = useContext(CurrentAllFavoritesContext);

  function AddToFavorite() {
    setIsFavorite(true);
    axios.post('http://localhost:8000/api/favorites/food/takeaway', {
      username: userName,
      itemCategory: 'takeaway',
      itemName: name,
      store: store,
      portion: portion,
      calories: calories,
      fat: fat,
      carbs: carbs,
      protein: protein,
      imgUrl: imgUrl,
    });
  }

  function DeleteFromFavorite() {
    setIsFavorite(false);
    axios.delete(`http://localhost:8000/api/favorites/food/${userName}/${name}`);
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
    <div className="TakeAway-Card">
      <div className="TakeAway-img-container">
        {more ? (
          <div className="TakeAway-front">
            <img src={imgUrl} alt={name} className="TakeAway-card-image" />
            <button className="TakeAway-material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="TakeAway-material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              bookmark_add
            </button>
            <button className="TakeAway-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="TakeAway-back">
            <div className="TakeAway-desc-back">
              <h2 className="TakeAway-desc-title">{name}</h2>
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
