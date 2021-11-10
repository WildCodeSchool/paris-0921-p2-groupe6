import React, { useState } from 'react';

import './MovieCard.css';
import More from '../Assets/More.png';

function MovieCard({ title, desc, img }) {
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
    <div className="movie-Card">
      <div className="movie-img-container">
        {more ? (
          <div className="movie-front">
            <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="" className="movie-card-image" />
            <button className="material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              bookmark_add
            </button>
            <button className="movie-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="movie-back">
            <p className="movie-desc-back" id="movie-p-back">
              {title}
              {desc}
            </p>
            <button className="material-icons-outlined" id="movie-btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
