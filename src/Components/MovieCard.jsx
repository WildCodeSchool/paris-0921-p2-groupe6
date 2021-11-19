import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import CurrentUserNameContext from '../Contexts/userContext';
import CurrentAllFavoritesContext from '../Contexts/favoritesContext';
import CurrentFinalChoicesContext from '../Contexts/finalChoices';

import logo from '../logo.png';
import More from '../Assets/More.png';

import './MovieCard.css';

function MovieCard({ id, title, desc, img }) {
  const { allFavorites } = useContext(CurrentAllFavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { userName } = useContext(CurrentUserNameContext);
  const { userChoice, setUserChoice } = useContext(CurrentFinalChoicesContext);

  function AddToFavorite() {
    if (userName) {
      setIsFavorite(true);
      axios.post('http://localhost:8000/api/favorites/movies', {
        username: userName,
        itemCategory: 'movie',
        itemName: title,
        description: desc,
        imgUrl: img,
        itemId: id,
      });
    } else {
      window.alert('You must be logged in to use the favorite feature');
    }
  }

  function DeleteFromFavorite() {
    setIsFavorite(false);
    axios.delete(`http://localhost:8000/api/favorites/movies/${userName}/${id}`);
  }

  function handleClickFavorite() {
    isFavorite ? DeleteFromFavorite() : AddToFavorite();
  }

  function handleClickAdded() {
    setIsAdded(!isAdded);
    if (isAdded) {
      setUserChoice(userChoice.filter((element) => element.itemName != title));
    } else {
      setUserChoice([...userChoice, { username: userName, itemCategory: 'movie', itemName: title, description: desc, imgUrl: img, itemId: id }]);
    }
  }

  function handleClickFlip() {
    setMore(!more);
  }

  useEffect(() => {
    if (allFavorites.some((object) => object.username === userName && object.itemId === id && object.itemCategory === 'movie')) {
      setIsFavorite(true);
    }
    if (userChoice.some((object) => object.username === userName && object.itemId === id && object.itemCategory === 'movie')) {
      setIsAdded(true);
    }
  }, []);
  useEffect(() => {}, [isFavorite, isAdded, userChoice]);

  return (
    <div className="movie-Card">
      <div className="movie-img-container">
        {more ? (
          <div className="movie-front">
            <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="" className="movie-card-image" />
            <button className="movie-material-icons-outlined" id={isFavorite ? 'MovieisFavorite' : 'MovienotFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="movie-material-icons-outlined" id={isAdded ? 'MovieisAdd' : 'MovienotAdd'} onClick={handleClickAdded}>
              add_shopping_cart
            </button>
            <button className="movie-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="movie-back">
            <p className="movie-desc-back" id="movie-p-back">
              <div id="movie-card-title">{title}</div>
              <img src={logo} className="film-logo-fond-desc" id="logo-fond-desc" alt="fond-desc-logo" />
              <p className="movie-back-desc">{desc}</p>
            </p>
            <button className="movie-material-icons-outlined" id="movie-btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
