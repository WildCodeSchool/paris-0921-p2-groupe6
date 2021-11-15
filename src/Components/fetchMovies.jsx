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

function FetchMovies({ category }) {
  const [fetchedMovies, setFetchedMovies] = useState([]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getParameters(category) {
    if (category === 'lazy') {
      return `&with_genres=35&with_genres=28&with_genres=12&with_genres=10749&sort_by=vote_count.dsc&page=${randomPage}`;
    } else if (category === 'happy') {
      return `&with_genres=35&with_genres=28&with_genres=12&sort_by=vote_count.dsc&page=${randomPage}`;
    } else if (category === 'blue') {
      return `&with_genres=10749&sort_by=popularity.dsc&page=${randomPageBlue}`;
    }
  }

  const randomPage = getRandomInt(500);
  const randomPageBlue = getRandomInt(10);
  const callParameters = getParameters(category);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=d174ca19b8b8536a5dcd5988d5132531${callParameters}&with_original_language=en`)
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
