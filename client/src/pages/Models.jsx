import React from "react";
import "../styles/basicCards.css";
import "../styles/bikeCard.css";
import hiddenImage from "../assets/images/hidden-logo.png";
import husky701 from "../assets/images/bike/701Supermoto2023.jpg";
import KTM1290SUPERDUKE from "../assets/images/bike/2023KTM1290SUPERDUKEREVO.jpg";
import Hypermotard950SP from "../assets/images/bike/Hypermotard950SP.jpg";
import M1000RR2022 from "../assets/images/bike/M1000RR2022.jpg";
import PanigaleV2 from "../assets/images/bike/PanigaleV2.png";
import SPORTSTERS from "../assets/images/bike/SPORTSTERS.png";
import triumphrocket3 from "../assets/images/bike/triumphrocket3.jpg";
import V4R from "../assets/images/bike/V4-R.jpg";

import { useState } from "react";
import Navbar from "../components/Navbar";

function Models() {
  const bikeDetails = [
    {
      name: "husqvarna 701 Supermoto(2023)",
      imgURL: husky701,
      desc: "Bringing the pure spirit of Supermoto riding to the street, the powerful, single-cylinder 701 Supermoto delivers unparalleled performance on the asphalt. Featherlight, perfectly balanced, and equipped with the latest electronic rider aids, it is a motorcycle that allows for full customisation and encourages extended ride times. Distinguished by its black and grey livery, the 701 Supermoto creates a commanding presence on the open road.",
      price: "",
    },
    {
      name: "KTM 1290 SUPERDUKE R EVO(2023)",
      imgURL: KTM1290SUPERDUKE,
      desc: "Evolution and adaption are critical when it comes to maintaining one's status as the top dog. The KTM 1290 SUPER DUKE R EVO is a BEAST - evolved. Boasting intuitive Semi-Active Suspension Technology (SAT), this BEAST not only adapts to the road surface but also to the rider's inputs - making it a cold, calculated hunter. A frightening prospect for any would-be challenger.",
      price: "",
    },
    {
      name: "Ducati Hypermotard 950 SP",
      imgURL: Hypermotard950SP,
      desc: "The Hypermotard is the quintessential fun bike for those who want to enjoy every turn and cannot resist the style of the boldest Ducati liveries.The 950 RVE version is updated with the Graffiti Evo livery, which emphasizes the bike’s youthful, sporty character. ",
      price: "",
    },
    {
      name: "BMW M 1000RR 2022",
      imgURL: M1000RR2022,
      desc: "For all those driven by their passion and ready to take on challenges. For all those who refuse to give up one single millimetre or millisecond: The BMW M RR is the superbike homologated for racing. It was perfected in the wind tunnel and further developed on the circuit. It has optimised aerodynamics and uses carbon, resulting in a significantly higher top speed of 314 km/h. Its engine and chassis remain as powerful and direct as ever. The M RR stands for absolute performance and exclusivity down to the last detail. Just the typical M.",
      price: "",
    },
    {
      name: "Ducati Panigale V2",
      imgURL: PanigaleV2,
      desc: "The twin-cylinder Panigale has a completely new look and refined electronics thanks to the use of the Inertial Platform, and is even better performing and safer on the track, not to mention fully exploitable and enjoyable on the road thanks to a more comfortable seat and revised suspension setup.",
      price: "",
    },
    {
      name: "Ducati Panigale V4-R",
      imgURL: V4R,
      desc: "Ducati presents the Panigale V4 R: the bike that adopts technical solutions previously reserved for MotoGP and WorldSBK Championship.The closest production model to a competition bike ever.",
      price: "",
    },
    {
      name: "SPORTSTER S",
      imgURL: SPORTSTERS,
      desc: "Sportster™ S is the first chapter of a whole new book of the Sportster saga. A legacy born in 1957 that outperformed the competition is now rebuilt to blow away the standards of today.",
      price: "",
    },
    {
      name: "Triumphrocket 3",
      imgURL: triumphrocket3,
      desc: "This is the genesis of a generation of Triumph’s ultimate motorbike legend.  Equipped with a world’s largest production motorcycle engine capacity of 2500cc, the Rocket 3 line-up delivers the highest torque of any production motorbike and unparalleled acceleration with a beautifully smooth, responsive and incredibly refined ride.",
      price: "",
    },
  ];

  return (
    <div>
      <div className="hidden-logo-container">
        <img
          className="hidden-logo-image"
          src={hiddenImage}
          alt="hiddened image"
        />
      </div>
      <div
        className="left-side-navigation-container"
        style={{ color: "white" }}
      >
        add catagories here
        <br />
        <br />
        <h4>Bike type</h4>
        <h5>radio buttons</h5>
        <br />
        <h6>Supermoto button</h6>
        <h6>Sport button</h6>
        <h6>Cruiser button</h6>
        <h6>Dirt button</h6>
        <h6>Atv button</h6>
      </div>
      <div>
        <div className="bike-cards-container">
          {bikeDetails.map((bike, i) => (
            <button
              type="button"
              // onClick={handleModel}
              style={{ border: "none", backgroundColor: "white" }}
              className="card-btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <div className="card bike-card-template">
                <img src={bike.imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title bike-header">{bike.name}</h5>
                  <p className=" bike-desc">
                    {bike.desc.length > 100
                      ? `${bike.desc.substring(0, 100)}...`
                      : bike.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Model Name here
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h3>Add model img here</h3>

                <br />
                <h5>Model description</h5>
                <br />
                <p>Vehicle Type</p>
                <p>Year</p>
                <p>$21,795</p>
                <p>POWER 157 hp (116 kW) @ 9,250 rpm</p>
                <p>TORQUE 95 lb ft (129 Nm) @ 7,500 rpm</p>
                <p>SEAT HEIGHT 30.7 in (780 mm)</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="pop-up-btn btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="pop-up-btn btn btn-primary">
                  Contact Dealer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
