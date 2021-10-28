import React from 'react';

import './Card.css';

function Card() {
  return (
    <div className="Card">
      <div className="img-container">
        <h3 className="desc">Burger with fries</h3>
        <img src="https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_960_720.jpg" alt="Burger with fries" />
        <button id="btn-more" className="btn-more">
          More...
        </button>
      </div>
    </div>
  );
}

export default Card;
