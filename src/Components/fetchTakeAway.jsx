import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import TakeAwayCard from './TakeAwayCard.jsx';

import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

function FetchTakeAway() {
  const BurgersByCalories = 'http://localhost:8000/api/takeaway/';

  const [fetchedTakeAway, setFetchedTakeAway] = useState();

  useEffect(() => {
    axios
      .get(BurgersByCalories)
      .then((response) => response.data)
      .then((data) => setFetchedTakeAway(data));
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
          {fetchedTakeAway &&
            fetchedTakeAway.slice(0, 10).map((info, index) => (
              <SwiperSlide key={index}>
                <TakeAwayCard key={index} {...info} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FetchTakeAway;
