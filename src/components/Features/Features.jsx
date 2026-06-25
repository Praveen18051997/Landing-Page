import "./Features.css";

import school from "../../assets/images/school.png";
import work from "../../assets/images/work.png";
import home from "../../assets/images/home.png";
import apps from "../../assets/images/apps.png";

const data = [
  {
    img: school,
    title: "At School",
    text: "Engaging group and distance learning for teachers and students."
  },
  {
    img: work,
    title: "At work",
    text: "For training, e-learning, interactive presentations and more."
  },
  {
    img: home,
    title: "At home",
    text: "Apps and games for family fun or home study."
  },
  {
    img: apps,
    title: "Learning apps",
    text: "Engage kids with the Kahoot! family of learning apps."
  }
];

const Features = () => {
  return (
    <section className="features">

      <div className="features-container">

        <h2>
          Who is Kurtis for?
        </h2>

        <div className="underline"></div>

        <div className="feature-grid">

          {data.map((item, index) => (

            <div className="feature-card" key={index}>

              <img src={item.img} alt={item.title} />

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <a href="/">Learn more</a>

            </div>

          ))}

        </div>

        <div className="feature-btn">
          <button>SIGN UP NOW</button>
        </div>

      </div>

    </section>
  );
};

export default Features;