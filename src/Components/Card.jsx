import React, { useState } from 'react';

import './Card.css';

import More from '../Assets/More.png';

function Card() {
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
    <div className="Card">
      <div className="img-container">
        {more ? (
          <div className="front">
            <h2 className="desc" id="card-h2">
              Burger with fries
            </h2>
            <img src="https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_960_720.jpg" alt="Burger with fries" className="card-image" />
            <button className="material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              add_shopping_cart
            </button>
            <button className="btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" id="more" />
            </button>
          </div>
        ) : (
          <div className="back">
            <div className="desc-back" id="p-back">
              <h2 className="desc-title" id="card-h2">
                .
              </h2>
            </div>
            <button className="material-icons-outlined" id="btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
