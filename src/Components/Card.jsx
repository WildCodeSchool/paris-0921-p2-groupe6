import React, { useState } from 'react';
import './Card.css';

function Card() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(false);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  function handleClickFlip() {
    setMore(!more);
  }

  return (
    <div className="Card">
      <div className="img-container">
        <div className="front">
          <h3 className="desc">Burger with fries</h3>
          <img src="https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_960_720.jpg" alt="Burger with fries" />
          <button className="material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
            star
          </button>
          <span className="material-icons-outlined" id="add">
            bookmark_add
          </span>
          <button className="btn-more" onClick={handleClickFlip}>
            More
          </button>
        </div>
        <div className="back">
          <p className="desc-back"> here there is the description</p>
          <button className="btn-close" id="close">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
