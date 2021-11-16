import React, { useState, useEffect, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import CurrentAllFavoritesContext from '../Contexts/favoritesContext';
import axios from 'axios';

import SoftDrinkCard from './SoftDrinkCard.jsx';

import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation]);

function FetchSoftDrink() {
  const [fetchedDrink, setFetchedDrink] = useState();
  const drinksByCalories = 'http://localhost:8000/api/softs_drinks/';
  const { allFavorites, fetchAllFavorites } = useContext(CurrentAllFavoritesContext);
  const [refresh, setRefresh] = useState(false);

  function Refresh() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    fetchAllFavorites();
    axios
      .get(drinksByCalories)
      .then((response) => response.data)
      .then((data) => setFetchedDrink(data));
  }, []);

  useEffect(() => {}, [allFavorites]);

  return (
    <div>
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
          {fetchedDrink &&
            fetchedDrink.slice(0, 10).map((info, index) => (
              <SwiperSlide key={index}>
                <SoftDrinkCard key={index} {...info} />
              </SwiperSlide>
            ))}
        </Swiper>
        <button onClick={Refresh}>Refresh</button>
      </div>
    </div>
  );
}

export default FetchSoftDrink;
