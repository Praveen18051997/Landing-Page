import "./Games.css";

import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Games = () => {
  return (
    <section className="games">
      <div className="games-container">

        <h2 data-aos="fade-up">Amazing things are happening</h2>
        <div 
        className="games-line"
        data-aos="zoom-in"
        data-aos-delay="100"
        ></div>
        <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        >
        <Swiper
          modules={[Pagination]}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={25}
          pagination={{ clickable: true }}
          grabCursor={true}
          className="gamesSwiper"
        >
          <SwiperSlide>
            <img src={card1} alt="Card 1" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={card2} alt="Card 2" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={card3} alt="Card 3" />
          </SwiperSlide>
        </Swiper>
        </div>

        <div 
        className="game-code"
        data-aos="fade-up"
        data-aos-delay="300">
          <h3>Do you have a game code?</h3>
          <p>Let's play for a while!</p>
        </div>

      </div>
    </section>
  );
};

export default Games;