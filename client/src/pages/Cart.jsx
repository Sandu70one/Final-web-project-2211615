import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function Cart() {
  //grab the stored data in local storage
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  const [price, setPrice] = useState(0);

  //adding a page render when on product remove
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
    for (let i = 0; i < productsInCart.length; i++) {
      
        setPrice(price + productsInCart[i].price);
      
    }
  }, [productsInCart]);

  //product delete function
  const onProductRemove = (apparel) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === apparel.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  // const onQuantityChange = (productname, count) => {
  //   setProducts((oldState) => {
  //     const productsIndex = oldState.findIndex(
  //       (item) => item.name === productname
  //     );
  //     if (productsIndex !== -1) {
  //       oldState[productsIndex].count = count;
  //     }
  //     return [...oldState];
  //   });
  // };

  return (
    <div>
      <h1>
        <section className="h-100 h-custom">
          <div className="  container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="cart-container card card-registration card-registration-2">
                  <div className="card-body p-0">
                    {productsInCart.length === 0 && (
                      <span className="cart-empty-text empty-text">
                        Your basket is currently empty
                      </span>
                    )}
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0 text-black">
                              Shopping Cart
                            </h1>

                            <h6 className="mb-0 text-muted">
                              {productsInCart.length} items
                            </h6>
                          </div>
                          <hr className="my-4" />
                          {productsInCart.map((apparel) => (
                            <div>
                              <div className="row mb-4 d-flex justify-content-between align-items-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src={apparel.imgURL}
                                    className=" img-fluid rounded-3"
                                    alt="Cotton T-shirt"
                                  />
                                </div>
                                <div className=" col-md-3 col-lg-3 col-xl-3">
                                  <h6 className="text-muted">{apparel.name}</h6>
                                  {/* <h6 className="text-black mb-0">
                                    {apparel.id}
                                  </h6> */}
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  {/* <select
                                    className="count"
                                    value={apparel.count}
                                    onChange={(event) => {
                                      onQuantityChange(
                                        apparel.name,
                                        event.target.value
                                      );
                                    }}
                                  >
                                    {[...Array(5).keys()].map((number) => {
                                      const num = number + 1;
                                      return (
                                        <option className="count-options" value={num} key={num}>
                                          {num}
                                        </option>
                                      );
                                    })}
                                  </select> */}
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 className="mb-0">$ {apparel.price}</h6>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <button
                                    className="btn remove-btn"
                                    onClick={() => onProductRemove(apparel)}
                                  >
                                    <RiDeleteBin6Line size={20} />
                                  </button>
                                </div>
                              </div>
                              <hr className="my-4" />
                            </div>
                          ))}
                          <div className="pt-5">
                            <h6 className="mb-0">
                              <a href="#!" className="text-body">
                                <Link
                                  to="/apparels"
                                  className="fas fa-long-arrow-alt-left me-2"
                                  href="#"
                                >
                                  Back to shop
                                </Link>
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 bg-grey">
                        <div className="p-5">
                          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <h5 className="text-uppercase">items 3</h5>
                            <h5>$ {price}</h5>
                          </div>

                          <h5 className="text-uppercase mb-3">Shipping</h5>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase">Total price</h5>
                            <h5>$ 137.00</h5>
                          </div>

                          <button
                            type="button"
                            className="form-btn btn btn-dark btn-block btn-lg"
                            data-mdb-ripple-color="dark"
                          >
                            Place Order
                          </button>
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
  );
}

export default Cart;
