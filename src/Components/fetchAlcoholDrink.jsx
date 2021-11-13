import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import AlcoholDrinkCard from './AlcoholDrinkCard.jsx';

import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

function FetchAlcoholDrinks() {
  const drinksByCalories = 'http://localhost:8000/api/alcohol_drinks/';

  const [fetchedDrink, setFetchedDrink] = useState();

  useEffect(() => {
    axios
      .get(drinksByCalories)
      .then((response) => response.data)
      .then((data) => setFetchedDrink(data));
  }, []);

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
                <AlcoholDrinkCard key={index} {...info} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FetchAlcoholDrinks;
