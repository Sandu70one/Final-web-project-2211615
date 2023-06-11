import React from "react";
import "../styles/eventslide.css";

// silde images importing
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.png";

//slide logos importing
import aprilia from "../assets/images/logo/Aprilia.png";
import BMW from "../assets/images/logo/BMW.png";
import ducati from "../assets/images/logo/ducati.png";
import HarleyDavidson from "../assets/images/logo/Harley-Davidson.png";
import husky from "../assets/images/logo/husky.png";
import Kawasaki from "../assets/images/logo/Kawasaki.png";
import KTM from "../assets/images/logo/KTM.png";
import RoyalEnfield from "../assets/images/logo/Royal Enfield.png";
import Suzuki from "../assets/images/logo/Suzuki.png";
import Triumph from "../assets/images/logo/Triumph.png";

function EventSlide() {
  // let list = document.querySelector(".logos-slide");
  // let list2;

  // function clone(){
  //   list2 = list.cloneNode(true);
  //   document.querySelector(".logos").appendChild(infinite);
  // }

  // clone()
  return (
    <div>
      <div className="eventsilde">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride=".carousel-item"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active d-none"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              className="d-none"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              className="d-none"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={slide1}
                className="d-block w-100"
                alt="slide1"
                style={{ height: 618.75 }}
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="slide2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="event-name">MMT Annual Tour: Tassie 2023</h5>
                <p className="event-description">
                  <span style={{ fontWeight: "bold" }}>
                    Fairfield Park Boathouse & Tea Gardens
                  </span>{" "}
                  Fairfield Park Dr, Fairfield, Vic, Australia Meet at 10 am at
                  Code Black Coffee North Melbourne Lunch at Fairfield Park boat
                  house Further details to come
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="slide3" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="event-name third-slide-header">
                  DAYTONA BIKE WEEK
                </h5>
                <p className="event-description third-slide-des">
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Daytona Beach, Florida{" "}
                  </span>
                  Join us down south at the 82nd year of this world-famous bike
                  week. Featuring live entertainment, races, bike shows, demo
                  rides, and more. F{" "}
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* barnd name area */}
      <div className="brands ">What we have! </div>
      <div className="logofield">
        <div className="logos">
          <div className="logos-slide">
            <img className="image" src={aprilia} />
            <img className="image" src={BMW} />
            <img className="image" src={ducati} />
            <img className="image" src={HarleyDavidson} />
            <img className="image" src={husky} />
            <img className="image" src={Kawasaki} />
            <img className="image" src={KTM} />
            <img className="image" src={RoyalEnfield} />
            <img className="image" src={Suzuki} />
            <img className="image" src={Triumph} />

            <img className="image" src={aprilia} />
            <img className="image" src={BMW} />
            <img className="image" src={ducati} />
            <img className="image" src={HarleyDavidson} />
            <img className="image" src={husky} />
            <img className="image" src={Kawasaki} />
            <img className="image" src={KTM} />
            <img className="image" src={RoyalEnfield} />
            <img className="image" src={Suzuki} />
            <img className="image" src={Triumph} />

            <img className="image" src={aprilia} />
            <img className="image" src={BMW} />
            <img className="image" src={ducati} />
            <img className="image" src={HarleyDavidson} />
            <img className="image" src={husky} />
            <img className="image" src={Kawasaki} />
            <img className="image" src={KTM} />
            <img className="image" src={RoyalEnfield} />
            <img className="image" src={Suzuki} />
            <img className="image" src={Triumph} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSlide;
