import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination, Navigation } from 'swiper';

// import CurrentAllFavoritesContext from '../Contexts/favoritesContext';
// import CurrentUserNameContext from '../Contexts/userContext';
import FetchRecipe from './fetchrecipe';
import FetchMovies from './fetchMovies';

import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FetchTakeAway from './fetchTakeAway';

// SwiperCore.use([Pagination, Navigation]);

function CatalogSliders() {
  return (
    <div>
      <FetchRecipe category={'catalog'} />
      <FetchTakeAway category={'catalog'} />
      {/* <div>
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
          {fetchedRecipe &&
            fetchedRecipe.slice(0, `${numbSlice}`).map((info, index) => (
              <SwiperSlide key={index}>
                <RecipeCard key={index} {...info} />
              </SwiperSlide>
            ))}
        </Swiper>
        <button onClick={Refresh}>Refresh</button>
      </div> */}
      <FetchMovies category={'catalog'} />
    </div>
  );
}

export default CatalogSliders;
