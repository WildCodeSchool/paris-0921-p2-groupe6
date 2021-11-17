import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import CurrentUserNameContext from '../Contexts/userContext';
import CurrentAllFavoritesContext from '../Contexts/favoritesContext';

import './Card.css';

import More from '../Assets/More.png';

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { userName } = useContext(CurrentUserNameContext);
  const { allFavorites } = useContext(CurrentAllFavoritesContext);

  const productName = product.itemCategory ? product.itemName : product.product_name;
  const productImg = product.itemCategory ? product.imgUrl : product.selected_images.front.display.fr;
  const productNameGeneric = product.itemCategory ? product.itemName : product.generic_name;
  const productCalories = product.itemCategory ? product.calories : product.nutriments.energy_value;
  const productCarbs = product.itemCategory ? product.carbs : product.nutriments.carbohydrates;
  const productFat = product.itemCategory ? product.fat : product.nutriments.fat;
  const productProtein = product.itemCategory ? product.carbs : product.nutriments.proteins;
  const productSugar = product.itemCategory ? product.sugar : product.nutriments.sugars;

  function AddToFavorite() {
    axios.post('http://localhost:8000/api/favorites/barcode', {
      username: userName,
      itemCategory: 'barcode',
      itemName: product.product_name,
      calories: product.nutriments.energy_value,
      fat: product.nutriments.fat,
      carbs: product.nutriments.carbohydrates,
      protein: product.nutriments.proteins,
      sugar: product.nutriments.sugars,
      imgUrl: product.selected_images.front.display.fr,
    });
  }

  function DeleteFromFavorite() {
    setIsFavorite(false);
    axios.delete(`http://localhost:8000/api/favorites/movies/${userName}/${product.product_name}`);
  }

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
    isFavorite ? DeleteFromFavorite() : AddToFavorite();
  }

  function handleClickAdded() {
    setIsAdded(!isAdded);
  }

  function handleClickFlip() {
    setMore(!more);
  }

  useEffect(() => {
    if (allFavorites.some((object) => object.username === userName && object.name === product.product_name && object.itemCategory === 'barcode')) {
      setIsFavorite(true);
    }
  }, []);

  useEffect(() => {}, [isFavorite]);

  return (
    <main>
      <div className="product-Card">
        <div className="product-img-container">
          {more ? (
            <div className="product-front">
              <h3 className="product-desc-title">{productName}</h3>
              <img className="product-card-image" src={productImg} alt={productName} />
              <button className="product-material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
                star
              </button>
              <button className="product-material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
                add_shopping_cart
              </button>
              <button className="product-btn-more" onClick={handleClickFlip}>
                <img src={More} alt="more" />
              </button>
            </div>
          ) : (
            <div className="product-back">
              <div className="product-desc-back">
                <h2 className="product-desc-title">{productName}</h2>
                <h3 className="product-desc-name">{productNameGeneric}</h3>
                <div className="product-desc-details">
                  <p>Per 100g:</p>
                  <div className="product-desc-details-li">Calories: {productCalories} KCal</div>
                  <div className="product-desc-details-li">
                    Carbs: {productCarbs} {product.nutriments.carbohydrates_unit}
                  </div>
                  <div className="product-desc-details-li">
                    Fat: {productFat} {product.nutriments.fat_unit}
                  </div>
                  <div className="product-desc-details-li">
                    Protein: {productProtein} {product.nutriments.proteins_unit}
                  </div>
                  <div className="product-desc-details-li">
                    Sugar: {productSugar} {product.nutriments.sugars_unit}
                  </div>
                </div>
              </div>
              <button className="material-icons-outlined" id="close" onClick={handleClickFlip}>
                cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProductCard;
