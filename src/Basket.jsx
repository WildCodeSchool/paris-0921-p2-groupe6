import React, { useContext, useEffect } from 'react';
import CurrentUserNameContext from './Contexts/userContext';
import CurrentFinalChoicesContext from './Contexts/finalChoices';
import MovieCard from './Components/MovieCard';
import RecipeCard from './Components/RecipeCard';
import TakeAwayCard from './Components/TakeAwayCard';
import SoftDrinkCard from './Components/SoftDrinkCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

import 'swiper/css';
import './Components/Slider';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Basket.css';

function Basket() {
  const { userName } = useContext(CurrentUserNameContext);
  const { userChoice } = useContext(CurrentFinalChoicesContext);

  useEffect(() => {}, []);

  return (
    <div>
      <h2 className="BasketPresentation">
        Congratulations! <br />
        Food, Drinks and Movie... <br />
        Are you ready for your Lazy Night?!?
      </h2>
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
      <button className="btn-ticket">Give me my Calories Ticket!</button>
    </div>
  );
}

export default Basket;
