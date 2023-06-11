import React from "react";
import "../styles/shoplinkarea.css";
import suit from "../assets/images/card/2.jpg";
import bike from "../assets/images/card/1.jpg";
import { Link } from "react-router-dom";

function ShopLinkArea() {
  return (
    <>
      <div className="main">
        <div className="bikebox">
          <div className="card bike-card">
            <img src={bike} className="card-img-top bike-img" alt="..." />
            <div className="card-body">
              <p className="card-text card-text">
                Need a little help getting around town? Our bikes are just as
                much fun to ride as they are to look at.
              </p>
              <Link
                to={{
                  pathname: "/models",
                }}
                href="#"
                className="btn btn-primary card-button"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>

        <div className="apparelbox">
          <div className="card apparel-card">
            <img src={suit} className="card-img-top apparel-img" alt="..." />
            <div className="card-body">
              <p className="card-text card-text ">
                Buy your riding gears and other costumes we provide the best of
                them.
              </p>
              <Link
                to={{ pathname: "/apparels" }}
                href="#"
                className="btn btn-primary card-button button-right"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopLinkArea;
