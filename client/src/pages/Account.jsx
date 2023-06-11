import React from "react";
import("../styles/account.css");
import video from "../assets/video/1.mp4";

function Account() {
  return (
    <div>
      <div>
        <h1>
          <section className="h-100 h-custom">
            <div className="  container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                  <div className="cart-container card card-registration card-registration-2">
                    <div className="card-body p-0">
                      <div className="row g-0">
                        <div className="col-lg-8">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <h1 className="fw-bold mb-0 text-black">
                                NEW YOUTUBE VIDEO
                              </h1>
                            </div>
                            <hr className="my-4" />
                            <div>
                              <div className="video-responsive">
                                <video
                                  width="627"
                                  height="340"
                                  src={video}
                                  controls="controls"
                                  autoPlay="false"
                                />
                              </div>
                            </div>
                            <div className="pt-5">
                              <h6 className="mb-0">
                                <a href="#!" className="text-body">
                                  Back to shop
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 bg-grey">
                          <div className="p-5">
                            <img
                              className="rounded-circle shadow-1-strong mb-4 person"
                              src="https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg"
                              alt="avatar"
                              style={{ width: 150 }}
                            />
                            <h3 className="fw-bold mb-5 mt-2 pt-1">
                              Hey......... !
                            </h3>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-between mb-4">
                              <h5 className="text-uppercase"></h5>
                              <h5>$ </h5>
                            </div>
                            {/* {productsInCart.length === 0 && ( */}
                            <span className="cart-empty-text empty-text">
                              shipment is currently empty
                            </span>
                            {/* )} */}
                            <hr className="my-4" />
                            {/* <div className="d-flex justify-content-between mb-5">
                              <h5 className="text-uppercase">Total price</h5>
                              <h5>$ 137.00</h5>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </h1>
      </div>
    </div>
  );
}

export default Account;
