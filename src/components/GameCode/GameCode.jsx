import "./GameCode.css";

import bg from "../../assets/images/join-bg.png";
import logo from "../../assets/images/join-logo.png";
import arrow from "../../assets/images/arrow.png";

const GameCode = () => {
  return (
    <section className="gamecode">

      <div className="gamecode-box">

        <img src={bg} 
        alt="" 
        className="game-bg"
        data-aos="zoom-in"
        />

        <div className="game-overlay">

          <img
            src={logo}
            alt="Kurtis Classroom"
            className="game-logo"
            data-aos="fade-down"
            data-aos-delay="100"
          />

          <div 
          className="code-box"
          data-aos="zoom-in"
          data-aos-delay="200"
          >

            <input
              type="text"
              placeholder="Write the code here"
            />

            <button>
              <img src={arrow} alt="" />
            </button>

          </div>

          <p 
          className="try-code"
          data-aos="fade-up"
          data-aos-delay="300"
          >
            Or try with 1234
          </p>

        </div>

      </div>

      <p 
      className="more-games"
      data-aos="fade-up"
      data-aos-delay="400"
      >
        Still more?
        <span> Take a look to our features games</span>
      </p>

    </section>
  );
};

export default GameCode;