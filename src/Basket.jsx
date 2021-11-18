import React, { useContext, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import CurrentUserNameContext from './Contexts/userContext';
import CurrentFinalChoicesContext from './Contexts/finalChoices';
import CurrentAllFavoritesContext from './Contexts/favoritesContext';

import MovieCard from './Components/MovieCard';
import RecipeCard from './Components/RecipeCard';
import TakeAwayCard from './Components/TakeAwayCard';
import SoftDrinkCard from './Components/SoftDrinkCard';
import NutritionLabel from './Components/nutrition-label';

SwiperCore.use([Pagination, Navigation]);

import 'swiper/css';
import './Components/Slider';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Basket() {
  const { userName } = useContext(CurrentUserNameContext);
  const { userChoice } = useContext(CurrentFinalChoicesContext);
  const [totalChoice, setTotalChoice] = useState();
  const { allFavorites } = useContext(CurrentAllFavoritesContext);

  useEffect(() => {}, [userChoice, allFavorites]);

  return (
    <main>
      {userName ? (
        <div>
          <h2>Congratulations! Food, Drinks and Movie...Are you ready for your Lazy Night?!?</h2>
          <section>
            {userChoice.some((ele) => ele.itemCategory === 'recipe' && ele.username === userName) && (
              <div>
                <h3>Recipe:</h3>
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
                  {userChoice
                    .filter((ele) => ele.itemCategory === 'recipe' && ele.username === userName)
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
              </div>
            )}
          </section>
          <section>
            {userChoice.some((ele) => ele.itemCategory === 'takeaway' && ele.username === userName) && (
              <div>
                <h3>TakeAway:</h3>
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
                  {userChoice
                    .filter((ele) => ele.itemCategory === 'takeaway' && ele.username === userName)
                    .map((info, index) => (
                      <SwiperSlide key={index}>
                        <TakeAwayCard
                          key={index}
                          title={info.itemName}
                          calories={info.calories}
                          carbs={info.carbs}
                          fat={info.fat}
                          protein={info.protein}
                          imgUrl={info.imgUrl}
                          store={info.store}
                          portion={info.portion}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            )}
          </section>
          <section>
            {userChoice.some((ele) => ele.itemCategory === 'drinks' && ele.username === userName) && (
              <div>
                <h3>Drinks:</h3>
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
                  {userChoice
                    .filter((ele) => ele.itemCategory === 'drinks' && ele.username === userName)
                    .map((info, index) => (
                      <SwiperSlide key={index}>
                        <SoftDrinkCard key={index} name={info.itemName} calories={info.calories} sugar={info.sugar} imgUrl={info.imgUrl} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            )}
          </section>
          <section>
            {userChoice.some((ele) => ele.itemCategory === 'movie' && ele.username === userName) && (
              <div>
                <h3>Movies:</h3>
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
                  {userChoice
                    .filter((ele) => ele.itemCategory === 'movie' && ele.username === userName)
                    .map((info, index) => (
                      <SwiperSlide key={index}>
                        <MovieCard key={index} id={info.itemId} title={info.itemName} desc={info.moviedescription} img={info.imgUrl} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            )}
          </section>
          <button
            className="btn-ticket"
            onClick={() => {
              setTotalChoice(userChoice);
            }}
          >
            Give me my Calories Ticket!
          </button>
          <div>{totalChoice && <NutritionLabel total={totalChoice} />}</div>
        </div>
      ) : (
        <div> It appears you are not logged in, go to the Homepage first! </div>
      )}
    </main>
  );
}

export default Basket;
