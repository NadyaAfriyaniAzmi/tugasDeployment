import { Link } from 'react-router-dom';
import pictHero from '../src/assets/hero-img.png';
import "./App.css"

function LandingPage() {
  return (
    <>
  <div className="navbar">
    <h4>Simple Header</h4>
  </div>
  <hr size="1px" />
  <div className="section">
    <div className="section-content">
      <h2>Better Solutions For Your Business</h2>
      <p>We are team of talented designers making websites with Boostrap</p>
      <div className="section-button">
      <Link to={"/createproduct"}>
        <button>Get Started</button>
        </Link>
        
        <a href="">Watch Video</a>
        <br />
      </div>
    </div>
    <img src={pictHero} alt="" />
  </div>
  <div className="content">
    <div className="content-text">
      <h2>Join Our Newsletter</h2>
      <p>
        Tamen quem nulla quae legam multos aute sint culpa legamnoster magna
      </p>
    </div>
    <div className="content-button">
      <div className="form-input">
        <input type="text" name="" id="" />
      </div>
      <button>Subscribe</button>
    </div>
  </div>
  <div className="contact">
    <div className="address">
      <h4>ARSHA</h4>
      <p>A108 Adam Street</p>
      <p>New York, NY 535022 United States</p>
      <p>
        <span>Phone:</span> +1 5589 55488 55
      </p>
      <p>
        <span>Email:</span> info@example.com
      </p>
    </div>
    <div className="Useful-links">
      <h4>Useful links</h4>
      <p>Home</p>
      <p>About us</p>
      <p>Services</p>
      <p>Terms of services</p>
      <p>Privacy policy</p>
    </div>
    <div className="Our-serviced">
      <h4>Our Serviced</h4>
      <p>Web Design</p>
      <p>Web Development</p>
      <p>Product Management</p>
      <p>Marketing</p>
      <p>Graphic Design</p>
    </div>
    <div className="our-sosial">
      <h4>Our Social Network</h4>
      <p>
        Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
        valies
      </p>
    </div>
  </div>
  <div className="footer">
    <p>
      © Copyright <span style={{ fontWeight: "bold" }}>Arsha</span>. All Rights
      Reversed
    </p>
    <p>
      Designed by <span style={{ color: "#47B2E4" }}>BoostrapMade</span>
    </p>
  </div>
</>

  )
}

export default LandingPage
