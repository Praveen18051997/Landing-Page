import "./Footer.css";

import logo from "../../assets/images/join-logo.png";
import appStore from "../../assets/images/appstore.png";
import googlePlay from "../../assets/images/googleplay.png";
import appGallery from "../../assets/images/appgallery.png";
import microsoft from "../../assets/images/microsoft-partner.png";
import googleEducation from "../../assets/images/google-education.png";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-brand">

          <img src={logo} alt="Logo" className="footer-logo" />

          <h4>Get the app:</h4>

          <div className="store-buttons">
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
            <img src={appGallery} alt="App Gallery" />
          </div>

          <h4>Follow us:</h4>

          <div className="social-icons">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaTiktok />
          </div>

        </div>

        {/* About */}

        <div className="footer-column">
          <h3>About</h3>
          <a href="#">Company</a>
          <a href="#">Leadership</a>
          <a href="#">Jobs - HIRING!</a>
          <a href="#">Pricing</a>
          <a href="#">Press</a>
          <a href="#">Investors</a>
        </div>

        {/* Solutions */}

        <div className="footer-column">
          <h3>Solutions</h3>
          <a href="#">At School</a>
          <a href="#">At Work</a>
          <a href="#">At Home</a>
        </div>

        {/* Resources */}

        <div className="footer-column">
          <h3>Resources</h3>
          <a href="#">Study with Kurtis</a>
          <a href="#">Blog</a>
          <a href="#">Kurtis Certified</a>
          <a href="#">Help Center</a>
          <a href="#">Library</a>
          <a href="#">Shop</a>
          <a href="#">Safety Center</a>
        </div>

        {/* Terms */}

        <div className="footer-column">

          <h3>Terms and conditions</h3>

          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">US Privacy Laws</a>
          <a href="#">Children's Privacy Policy</a>
          <a href="#">Inclusion and Accessibility Policy</a>

          <div className="badges">
            <img src={microsoft} alt="Microsoft" />
            <img src={googleEducation} alt="Google Education" />
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        Copyright © 2020, Kurtis. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;