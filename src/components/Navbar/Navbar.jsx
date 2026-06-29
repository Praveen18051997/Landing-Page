import "./Navbar.css";
import { FaBars, FaBookOpen, FaChalkboardTeacher, FaHome, FaMobileAlt, FaGraduationCap, FaRegNewspaper } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import logoText from "../../assets/images/logo-text.png";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

return (
  <>
    <nav 
    className="navbar"
    data-aos="fade-down"
    data-aos-duration="800">
      <div className="nav-container">

        <div className="nav-logo">
          <img src={logo} alt="Logo" className="logo-icon" />
          <img src={logoText} alt="Kurtis Classroom" className="logo-text" />
        </div>

        <div className="nav-right">

          <select className="language">
            <option>EN</option>
            <option>FR</option>
            <option>ES</option>
          </select>

          <button className="signup-btn">
            Sign up
          </button>

          <button className="login-btn">
            Log in
          </button>

          <button
            className="menu-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars />
          </button>

        </div>

      </div>
    </nav>

    {showMenu && (
      <div className="burger-menu">

        <a href="#">
          <FaBookOpen />
          <span>School</span>
        </a>

        <a href="#">
          <FaChalkboardTeacher />
          <span>Work</span>
        </a>

        <a href="#">
          <FaHome />
          <span>Home</span>
        </a>

        <a href="#">
          <FaMobileAlt />
          <span>Learning apps</span>
        </a>

        <a href="#">
          <FaGraduationCap />
          <span>Self study</span>
        </a>

        <a href="#">
          <FaRegNewspaper />
          <span>News</span>
          <span className="badge">5</span>
        </a>

      </div>
    )}

  </>
);
};

export default Navbar;