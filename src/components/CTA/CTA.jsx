import "./CTA.css";

import illustration from "../../assets/images/cta-illustration.png";

const CTA = () => {
  return (
    <section className="cta">

      {/* Statistics */}

      <div className="stats-row">

        <div className="stat-item">
          <div className="stat-line blue"></div>
          <p>More than 50% of US teachers use Kurtis</p>
        </div>

        <div className="stat-item">
          <div className="stat-line cyan"></div>
          <p>Players in more than 200 countries</p>
        </div>

        <div className="stat-item">
          <div className="stat-line red"></div>
          <p>Over 30 million public games available</p>
        </div>

        <div className="stat-item">
          <div className="stat-line yellow"></div>
          <p>97% of the Fortune 500 use Kurtis</p>
        </div>

      </div>

      {/* CTA */}

      <div className="cta-container">

        <div className="cta-image">

          <img
            src={illustration}
            alt="Illustration"
          />

        </div>

        <div className="cta-content">

          <h2>
            Ready for make
            <br />
            learning fun!
          </h2>

          <button>
            Sign up for free
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;