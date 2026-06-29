import "./Testimonials.css";

import speech from "../../assets/images/speech.png";
import customer from "../../assets/images/customer.png";
import norwegian from "../../assets/images/norwegian.png";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="testimonials-container">

        <h2 data-aos="fade-up">Our best customers</h2>

        <div 
        className="testimonial-line"
        data-aos="zoom-in"
        data-aos-delay="100"
        ></div>

        <div className="testimonial-content">

          {/* Left */}

          <div 
          className="testimonial-left"
          data-aos="fade-right"
          data-aos-delay="1000"
          >

            <img
              src={speech}
              alt="Speech"
              className="speech"
              data-aos="zoom-in"
              data-aos-delay="200"
            />

            <img
              src={customer}
              alt="Customer"
              className="customer"
              data-aos="zoom-in"
              data-aos-delay="300"
            />

          </div>

          {/* Divider */}

          <div 
          className="divider"
          data-aos="fade-up"
          data-aos-delay="350"
          ></div>

          {/* Right */}

          <div 
          className="testimonial-right"
          data-aos="fade-left"
          data-aos-delay="1000"
          >

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
              data-aos="zoom-in"
              data-aos-delay="400"
            />

          </div>

        </div>

        <div 
        className="testimonial-dots"
        data-aos="fade-up"
        data-aos-delay="500"
        >
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