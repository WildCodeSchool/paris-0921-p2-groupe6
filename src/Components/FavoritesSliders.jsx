import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import CurrentAllFavoritesContext from '../Contexts/favoritesContext';
import CurrentUserNameContext from '../Contexts/userContext';
import MovieCard from './MovieCard';
import RecipeCard from './RecipeCard';
import ProductCard from './ProductCard';
import TakeAwayCard from './TakeAwayCard';
import SoftDrinkCard from './SoftDrinkCard';

import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation]);

function FavoritesSliders() {
  const { userName } = useContext(CurrentUserNameContext);
  const { allFavorites, fetchAllFavorites } = useContext(CurrentAllFavoritesContext);

  useEffect(() => {
    fetchAllFavorites();
  }, [userName]);

  return (
    <div>
      {userName.length ? (
        <div>
          <h2>
            Here you will find all your favorites recipe, products and movies. <br />
            You can also add what you want to your Lazy Night from here.
          </h2>
          <section>
            <h3>Recipe:</h3>
            {allFavorites.some((elt) => elt.username === userName && elt.itemCategory === 'recipe') ? (
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
                {allFavorites
                  .filter((elt) => (elt.itemCategory === 'recipe') & (elt.username === userName))
                  .map((info, index) => (
                    <SwiperSlide key={index}>
                      <RecipeCard
                        key={index}
                        title={info.itemName}
                        calories={info.calories}
                        carbs={info.carbs}
                        fat={info.fat}
                        protein={info.protein}
                        sugar={info.sugar}
                        image={info.imgUrl}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <div>Nothing yet in here</div>
            )}
          </section>
          <section>
            <h3>Takeaway:</h3>
            {allFavorites.some((elt) => elt.username === userName && elt.itemCategory === 'takeaway') ? (
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
                {allFavorites
                  .filter((elt) => (elt.itemCategory === 'takeaway') & (elt.username === userName))
                  .map((info, index) => (
                    <SwiperSlide key={index}>
                      <TakeAwayCard
                        key={index}
                        name={info.itemName}
                        store={info.store}
                        portion={info.portion}
                        calories={info.calories}
                        carbs={info.carbs}
                        fat={info.fat}
                        protein={info.protein}
                        imgUrl={info.imgUrl}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <div>Nothing yet in here</div>
            )}
          </section>
          <section>
            <h3>Drinks:</h3>
            {allFavorites.some((elt) => elt.username === userName && elt.itemCategory === 'drinks') ? (
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
                {allFavorites
                  .filter((elt) => (elt.itemCategory === 'drinks') & (elt.username === userName))
                  .map((info, index) => (
                    <SwiperSlide key={index}>
                      <SoftDrinkCard key={index} name={info.itemName} calories={info.calories} sugar={info.sugar} imgUrl={info.imgUrl} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <div>Nothing yet in here</div>
            )}
          </section>
          <section>
            <h3>Movies:</h3>
            {allFavorites.some((elt) => elt.username === userName && elt.itemCategory === 'movie') ? (
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
                {allFavorites
                  .filter((elt) => (elt.itemCategory === 'movie') & (elt.username === userName))
                  .map((info, index) => (
                    <SwiperSlide key={index}>
                      <MovieCard key={index} id={info.itemId} title={info.itemName} desc={info.moviedescription} img={info.imgUrl} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <div>Nothing yet in here</div>
            )}
          </section>
          <section>
            <h3>Scanned Products:</h3>
            {allFavorites.some((elt) => elt.username === userName && elt.itemCategory === 'barcode') ? (
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
                {allFavorites
                  .filter((elt) => (elt.itemCategory === 'barcode') & (elt.username === userName))
                  .map((info, index) => (
                    <SwiperSlide key={index}>
                      <ProductCard key={index} product={info} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <div>Nothing yet in here</div>
            )}
          </section>
        </div>
      ) : (
        <div>You must be logged in to view this page</div>
      )}
    </div>
  );
}

export default FavoritesSliders;
