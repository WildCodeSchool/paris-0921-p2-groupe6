import React, { useState, useEffect, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import axios from 'axios';
import CurrentAllFavoritesContext from '../Contexts/favoritesContext';

import TakeAwayCard from './TakeAwayCard.jsx';

import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation]);

function FetchTakeAway({ category }) {
  const BurgersByCalories = 'http://localhost:8000/api/takeaway/';
  const [fetchedTakeAway, setFetchedTakeAway] = useState();
  const { allFavorites, fetchAllFavorites } = useContext(CurrentAllFavoritesContext);
  const [refresh, setRefresh] = useState(false);
  const numbSlice = category === 'catalog' ? 50 : 10;

  function Refresh() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    fetchAllFavorites();
    axios
      .get(BurgersByCalories)
      .then((response) => response.data)
      .then((data) => setFetchedTakeAway(data));
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
          {fetchedTakeAway &&
            fetchedTakeAway
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value)
              .slice(0, `${numbSlice}`)
              .map((info, index) => (
                <SwiperSlide key={index}>
                  <TakeAwayCard key={index} {...info} />
                </SwiperSlide>
              ))}
        </Swiper>
        <button onClick={Refresh}>Refresh</button>
      </div>
    </div>
  );
}

export default FetchTakeAway;
