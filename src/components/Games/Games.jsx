// import { useRef, useState } from "react";
// import "./Games.css";
// import card1 from "../../assets/images/card1.png";
// import card2 from "../../assets/images/card2.png";
// import card3 from "../../assets/images/card3.png";

// const Games = () => {

//     const cardsRef = useRef(null);
//     const [activeDot, setActiveDot] = useState(0);

//     const handleScroll = () => {
//     const container = cardsRef.current;
//     const cardWidth = container.firstChild.offsetWidth + 25;

//     const index = Math.round(container.scrollLeft / cardWidth);

//       setActiveDot(index);
//     };

//   return (
//     <section className="games">

//       <div className="games-container">

//         <h2>Amazing things are happening</h2>

//         <div className="games-line"></div>

//         <div 
//             className="cards"
//             ref={cardsRef}
//             onScroll={handleScroll}
//         >

//           <div className="card">
//             <img src={card1} alt="Card 1" />
//           </div>

//           <div className="card">
//             <img src={card2} alt="Card 2" />
//           </div>

//           <div className="card">
//             <img src={card3} alt="Card 3" />
//           </div>

//         </div>

//         <div className="dots">

//           {[0,1,2].map((item,index)=>(
//             <span
//               key={index}
//               className={activeDot===index ? "active" : ""}
//             ></span>
//           ))}

// </div>

//         <div className="game-code">

//           <h3>Do you have a game code?</h3>

//           <p>Let's play for a while!</p>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Games;

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

        <h2>Amazing things are happening</h2>
        <div className="games-line"></div>

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

        <div className="game-code">
          <h3>Do you have a game code?</h3>
          <p>Let's play for a while!</p>
        </div>

      </div>
    </section>
  );
};

export default Games;