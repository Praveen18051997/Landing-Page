import "./GameCode.css";

import bg from "../../assets/images/join-bg.png";
import logo from "../../assets/images/join-logo.png";
import arrow from "../../assets/images/arrow.png";

const GameCode = () => {
  return (
    <section className="gamecode">

      <div className="gamecode-box">

        <img src={bg} alt="" className="game-bg" />

        <div className="game-overlay">

          <img
            src={logo}
            alt="Kurtis Classroom"
            className="game-logo"
          />

          <div className="code-box">

            <input
              type="text"
              placeholder="Write the code here"
            />

            <button>
              <img src={arrow} alt="" />
            </button>

          </div>

          <p className="try-code">
            Or try with 1234
          </p>

        </div>

      </div>

      <p className="more-games">
        Still more?
        <span> Take a look to our features games</span>
      </p>

    </section>
  );
};

export default GameCode;