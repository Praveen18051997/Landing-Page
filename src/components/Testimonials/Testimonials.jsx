import "./Testimonials.css";

import speech from "../../assets/images/speech.png";
import customer from "../../assets/images/customer.png";
import norwegian from "../../assets/images/norwegian.png";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="testimonials-container">

        <h2>Our best customers</h2>

        <div className="testimonial-line"></div>

        <div className="testimonial-content">

          {/* Left */}

          <div className="testimonial-left">

            <img
              src={speech}
              alt="Speech"
              className="speech"
            />

            <img
              src={customer}
              alt="Customer"
              className="customer"
            />

          </div>

          {/* Divider */}

          <div className="divider"></div>

          {/* Right */}

          <div className="testimonial-right">

            <h3>Martha | Norwegian Air</h3>

            <p>
              Recusandae sunt voluptate repellat velit dolorem eos
              nostrum cupiditate. Labore porro cupiditate
              reiciendis enim neque. Modi eos autem expedita
              voluptatibus dignissimos repellat.
            </p>

            <p>
              Sit et aut minus quod vitae. Aut occaecati
              cupiditate neque dolore amet beatae quasi aliquam.
            </p>

            <img
              src={norwegian}
              alt="Norwegian"
              className="company-logo"
            />

          </div>

        </div>

        <div className="testimonial-dots">
          <span></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </section>
  );
};

export default Testimonials;