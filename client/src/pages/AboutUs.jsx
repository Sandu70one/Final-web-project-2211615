import React from "react";
import Navbar from "../components/Navbar";
import "../styles/aboutus.css";
import crew from "../assets/images/crew.jpg";
import Footer from "../components/footer";

import one from "../assets/images/custom/1.jpg";
import two from "../assets/images/custom/2.jpg";
import three from "../assets/images/custom/3.jpg";
import four from "../assets/images/custom/4.jpg";
import five from "../assets/images/custom/5.jpg";
import CustomerReveiws from "../components/CustomerReveiws";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div className="info">
        <div className="desc">
          <div className="details">
            <strong>DO EPIC SHIT</strong> Company commenced business in 2004 and
            today is among the largest motorcycle distributors in the U.S.
            representing five premium OEM brands and operating out of 15
            locations in Northern Illinois and Southern Wisconsin. It is listed
            among Crain’s Chicago Business’ largest privately held businesses in
            Chicago employing approximately 350 people, teaching about 2,000
            students annually to ride motorcycles, and delivering over 6,000
            motorcycles per year into the market.
          </div>

          <div className="address">
            <br />
            <strong>address:</strong> <br />
            6330 W 65TH ST APT 3N
            <br /> CHICAGO IL 60638-5210 <br />
            USA
          </div>
        </div>

        <div className="store-photo">
          <img className="mechanic-image" src={crew} alt="machanic" />
        </div>
      </div>
      <div className="custom-area">
        <div className="custom-header ">Custom Builds. </div>
        <p className="about-custom text-center text-muted">
          A custom motorcycle is a motorcycle with stylistic and/or structural
          changes to the 'standard' mass-produced machine offered by major
          manufacturers.
          <br /> Custom motorcycles might be unique, or built in limited
          quantities.
          <br />
          <span className="let-us-know">
            Here are some few custom builds we made , if your interested please
            let us know.
          </span>
        </p>
        <Link
          to={{ pathname: "../contactdealer" }}
          className="btn email-button btn-primary card-button"
        >
          Send a Email
        </Link>
      </div>
      <div className="custom-field">
        <img className="first-custom" src={one} alt first custom build />

        <img className="second-custom" src={two} alt first custom build />

        <img className="third-custom" src={three} alt first custom build />

        <img className="fourth-custom" src={four} alt first custom build />

        <img className="fifth-custom" src={five} alt first custom build />
      </div>
      <CustomerReveiws />
      <Footer />
    </div>
  );
}

export default AboutUs;
