import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import CurrentAllFavoritesContext from '../Contexts/favoritesContext';

import FetchRecipe from './fetchrecipe';
import FetchMovies from './fetchMovies';
import FetchTakeAway from './fetchTakeAway';
import SoftDrinkCard from './SoftDrinkCard';

import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation]);

function CatalogSliders() {
  const [softsDrinks, setSoftsDrinks] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);
  const { allFavorites, fetchAllFavorites } = useContext(CurrentAllFavoritesContext);

  useEffect(() => {
    fetchAllFavorites();
    axios
      .get('http://localhost:8000/api/softs_drinks/')
      .then((response) => response.data)
      .then((data) => setSoftsDrinks(data));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/alcohol_drinks/')
      .then((response) => response.data)
      .then((data) => setAllDrinks(softsDrinks.concat(data)));
  }, [softsDrinks]);

  useEffect(() => {}, [allFavorites, allDrinks]);

  return (
    <div>
      <FetchRecipe category={'catalog'} />
      <FetchTakeAway category={'catalog'} />
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {allDrinks &&
            allDrinks
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value)
              .map((info, index) => (
                <SwiperSlide key={index}>
                  <SoftDrinkCard key={index} {...info} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <FetchMovies category={'catalog'} />
    </div>
  );
}

export default CatalogSliders;
