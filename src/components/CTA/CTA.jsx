import "./CTA.css";

import illustration from "../../assets/images/cta-illustration.png";

const CTA = () => {
  return (
    <section className="cta">

      {/* Statistics */}

      <div 
      className="stats-row"
      data-aos="fade-up"
      >

        <div 
        className="stat-item"
        data-aos="fade-up"
        data-aos-delay="100"
        >
          <div className="stat-line blue"></div>
          <p>More than 50% of US teachers use Kurtis</p>
        </div>

        <div 
        className="stat-item"
        data-aos="fade-up"
        data-aos-delay="200"
        >
          <div className="stat-line cyan"></div>
          <p>Players in more than 200 countries</p>
        </div>

        <div 
        className="stat-item"
        data-aos="fade-up"
        data-aos-delay="300"
        >
          <div className="stat-line red"></div>
          <p>Over 30 million public games available</p>
        </div>

        <div 
        className="stat-item"
        data-aos="fade-up"
        data-aos-delay="400"
        >
          <div className="stat-line yellow"></div>
          <p>97% of the Fortune 500 use Kurtis</p>
        </div>

      </div>

      {/* CTA */}

      <div className="cta-container">

        <div 
        className="cta-image"
        data-aos="fade-right"
        data-aos-delay="1000"
        >

          <img
            src={illustration}
            alt="Illustration"
          />

        </div>

        <div 
        className="cta-content"
        data-aos="fade-left"
        data-aos-delay="1000"
        >

          <h2>
            Ready for make
            <br />
            learning fun!
          </h2>

          <button 
          data-aos="zoom-in"
          data-aos-delay="300"
          >
            Sign up for free
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;