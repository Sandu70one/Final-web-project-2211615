import React from "react";
import "../styles/footer.css";
import gm from "../assets/icons/gmail.svg";
import ig from "../assets/icons/instagram.svg";
import yt from "../assets/icons/youtube.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="component-card text-center mt-4">
        <div className="card-body">
          <img className="icon-img" src={yt} alt="youtube" />
          <img className="icon-img" src={gm} alt="facebook" />
          <img className="icon-img" src={ig} alt="instagram" />
          <h5 className="card-title epic-header">Join our EPIC team.</h5>
          <p className="card-text description">
            We need to go for an adventure road trip.
          </p>
          <Link to={{pathname:"./contactdealer"}} href="#" className="footer-btn btn btn-primary ">
            subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
