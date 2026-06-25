import "./Hero.css";
import { motion } from "framer-motion";

import hero from "../../assets/images/hero.png";
import appstore from "../../assets/images/appstore.png";
import googleplay from "../../assets/images/googleplay.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1>
            Make <br />
            learning fun!
          </h1>

          <p>
            Any subject, in any language, on any device,
            for all ages!
          </p>

          <button>
            Sign up for free
          </button>

          <div className="download">

            <span>Or download the app:</span>

            <div className="stores">

              <img src={appstore} alt="App Store" />

              <img src={googleplay} alt="Google Play" />

            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <img src={hero} alt="Hero" />

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;