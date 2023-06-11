import React from "react";
import "../styles/customerreviews.css";

function CustomerReveiws() {
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide carousel-dark text-center"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner" style={{ marginTop: 45 }}>
          <div className="carousel-item active  ">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 person"
                    src="https:mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    alt="avatar"
                    style={{ width: 150 }}
                  />
                  <h5 className="mb-3">Anna Deynah</h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>A Star, A star all
                    the way from 1st point of contact right through to the
                    collection highly recommended.
                  </p>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 person"
                    src="https:mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                    alt="avatar"
                    style={{ width: 150 }}
                  />
                  <h5 className="mb-3">John Doe</h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Pete was a pleasure to deal with, honest and genuine trader.
                  </p>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 person"
                    src="https:mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    alt="avatar"
                    style={{ width: 150 }}
                  />
                  <h5 className="mb-3">Maria Kate</h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Good selection of bikes. No pressure sales. Part exchange of
                    my old bike. Will be returning for service work in the
                    future
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 person"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                    alt="avatar"
                    style={{ width: 150 }}
                  />
                  <h5 className="mb-3">John Doe</h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Very friendly service and offered loads of advice, will be
                    using them for any services I need on the bike in future.
                  </p>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 person"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                    alt="avatar"
                    style={{ width: 150 }}
                  />
                  <h5 className="mb-3">Alex Rey</h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Pete responded to all my queries and made the whole process
                    of buying a motorbike remotely/long distance very straight
                    forward.
                  </p>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 person"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                    alt="avatar"
                    style={{ width: 150 }}
                  />
                  <h5 className="mb-3">Maria Kate</h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Great range of well prepared second hand bikes at reasonable
                    prices just ready to roll.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item slide-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 person"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                    alt="avatar"
                    style={{ width: 150 }}
                  />
                  <h5 className="mb-3">Anna Deynah</h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Great company to deal with. Flawless transaction from start
                    to finish and well communicated by Pete every step of the
                    way.
                  </p>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 person"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                    alt="avatar"
                    style={{ width: 150 }}
                  />
                  <h5 className="mb-3">John Doe</h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Pete was very helpful from start to finish, nothing was too
                    much trouble. First class service and super fast delivery.
                    DEFINITELY RECOMMEND
                  </p>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4 person"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                    alt="avatar"
                    style={{ width: 150 }}
                  />
                  <h5 className="mb-3">Maria Kate</h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Excellent service,Good quality bikes at great prices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
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
          data-bs-target="#carouselExampleControlsNoTouching"
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
  );
}

export default CustomerReveiws;
