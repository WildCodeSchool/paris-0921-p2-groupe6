import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';

import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

function FetchMovies() {
  const moviesCat =
    'https://api.themoviedb.org/3/discover/movie?api_key=d174ca19b8b8536a5dcd5988d5132531&with_genres=35&with_genres=28&vote_average.gte=7&vote_average.lte=10';

  const [fetchedMovies, setFetchedMovies] = useState([]);

  useEffect(() => {
    axios
      .get(moviesCat)
      .then((response) => response.data)
      .then((data) => setFetchedMovies(data.results));
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
          {fetchedMovies.length &&
            fetchedMovies.slice(0, 10).map((movie, index) => (
              <SwiperSlide key={index}>
                <MovieCard key={index} title={movie.title} desc={movie.overview} img={movie.poster_path} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FetchMovies;
