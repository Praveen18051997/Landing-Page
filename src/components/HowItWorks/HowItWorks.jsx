import "./HowItWorks.css";

import create from "../../assets/images/create.png";
import share from "../../assets/images/share.png";
import play from "../../assets/images/play.png";

const HowItWorks = () => {
  return (
    <section className="how">

      <div className="how-container">

        <h2 data-aos="fade-up">How does Kurtis work?</h2>

        <div 
        className="how-line"
        data-aos="zoom-in"
        data-aos-delay="100"
        ></div>

        {/* Create */}

        <div 
        className="how-row"
        data-aos="fade-right"
        data-aos-delay="1000"
        >

          <img src={create} 
          className="create-img"
          alt="Create" />

          <div className="how-text">

            <h3>Create</h3>

            <p>
              It only takes minutes to create a learning game or
              trivia quiz on any topic, in any language.
            </p>

          </div>

        </div>

        {/* Share */}

        <div 
        className="how-row"
        data-aos="fade-left"
        data-aos-delay="1000"
        >

          <div className="how-text">

            <h3>Host or share</h3>

            <p>
              Host a live game with questions on a big screen or
              share a game with remote players.
            </p>

          </div>

          <img src={share} 
          className="share-img"
          alt="Share" />

        </div>

        {/* Play */}

        <div 
        className="how-row"
        data-aos="fade-right"
        data-aos-delay="1000"
        >

          <img src={play} 
          className="play-img"
          alt="Play" />

          <div className="how-text">

            <h3>Play</h3>

            <p>
              Game on! Join a kahoot with a PIN provided by the host
              and answer questions on your device.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;