import React, { useState } from 'react';
import './Card.css';

function Card() {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="Card">
      <div className="img-container">
        <h3 className="desc">Burger with fries</h3>
        <img src="https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_960_720.jpg" alt="Burger with fries" />
        <button id="btn-more" className="btn-more">
          More...
        </button>
        <button className="material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
          star
        </button>
        <span className="material-icons-outlined" id="add">
          bookmark_add
        </span>
      </div>
    </div>
  );
}

export default Card;
