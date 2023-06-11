import React, { useEffect } from "react";
import "../styles/basicCards.css";
import "../styles/apparelCard.css";
import { useState } from "react";
import hiddenImage from "../assets/images/hidden-logo.png";
import husky from "../assets/images/bike/701Supermoto2023.jpg";
// import Navbar from "../components/Navbar";
import { CgShoppingCart } from "react-icons/cg";
import { Await, Link } from "react-router-dom";
import axios from "axios";

import husky701 from "../assets/images/apperals/suit2.jpg";
import VenomRaceSuit from "../assets/images/apperals/suit1.jpg";
import Speedmaster from "../assets/images/apperals/suit3.jpg";
import Hyperspeed from "../assets/images/apperals/suit4.jpg";

function Apparels() {
  const products = [
    {
      id: 1,
      name: "Alpinestars GP Plus v2 Camo Race Suit",
      imgURL: husky701,
      desc: "A unique digital camouflage designed graphic for a racing leather suit with class-leading protection and innovative technical features such as extensive stretch paneling, aerodynamic hump and calf expansion gussets. The GP Plus Camo Leather Suit has been meticulously developed to improve anatomical performance and comfort. CE certified, the GP Plus Camo Leather Suit is perfectly suited to track day riding and racing.",
      price: 1299.95,
    },
    {
      id: 2,
      name: "Alpinestars GP Plus v2 Venom Race Suit",
      imgURL: VenomRaceSuit,
      desc: "The CE certified GP Plus Venom Leather Suit is an aggressively designed, fully featured racing leather suit with class-leading protection. Ideal for track days and racing the suit incorporates a range of innovative features such as stretch paneling, aerodynamic hump and calf expansion gussets, which have been meticulously designed and developed to improve anatomical performance and comfort.",
      price: 899.96,
    },
    {
      id: 3,
      name: "Joe Rocket Speedmaster 7.0 Two-Piece Race Suit",
      imgURL: Speedmaster,
      desc: "A lot of brands claim their gear is “proven” but nowhere is this more true than with the Speedmaster 6.0. With over a decade of AMA racing history in every stitch, the 6.0 is a natural evolution of the species.",
      price: 699.96,
    },
    {
      id: 3,
      name: "REV'IT! Hyperspeed 2 Race Suit",
      imgURL: Hyperspeed,
      desc: "The Hyperspeed 2 has undeniable MotoGP pedigree. You’ll see it in the stitch quality and striking panel design, you’ll feel it in the richly textured perforated leather, and you’ll experience it when you’re going flat-out with your chin on the tank.",
      price: 1299.96,
    },
  ];

  const [apparelProduct, setApparelProducts] = useState("");
 
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:8000/apparels");
      console.log(data);
      setApparelProducts(data);
    };
    fetchdata();
  }, []);

 
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  // add apparels to the cart on add to cart button press
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  return (
    <div>
      <div className="hidden-logo-container">
        <img
          className="hidden-logo-image"
          src={hiddenImage}
          alt="hidden image"
        />
      </div>
      <div
        className="left-side-navigation-container"
        style={{ color: "white" }}
      >
        add catagories here
      </div>
      <div className="cart-line">
        <button className="cart-button" style={{ color: "black" }}>
          <Link
            to={{
              pathname: "/cart",
              products: productsInCart,
            }}
          >
            <CgShoppingCart size="2.4em" color="rgb(121, 121, 121)" />
          </Link>
        </button>
      </div>
      <div className="apparel-cards-container">
        {/* {
          apparelProduct && apparelProduct?.data.apparel.map((item)=>{
            <div className="card apparel-card-template">
            <img src={item.imgURL} className="card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title bike-header">{item.name}</h5>
              <p className="bike-desc ">
                {item.desc.length > 100
                  ? `${apparel.desc.substring(0, 100)}...`
                  : apparel.desc}
              </p>
              <button
                onClick={() => addProductToCart(item)}
                type="button"
                className="btn btn-light"
              >
                Add to cart
              </button>
            </div>
          </div>
          })
        } */}

        {products.map((apparel) => (
          <div className="card apparel-card-template">
            <img src={apparel.imgURL} className="card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title bike-header">{apparel.name}</h5>
              <p className="bike-desc ">
                {apparel.desc.length > 100
                  ? `${apparel.desc.substring(0, 100)}...`
                  : apparel.desc}
              </p>
              <button
                onClick={() => addProductToCart(apparel)}
                type="button"
                className="btn btn-light"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      ;
    </div>
  );
}

export default Apparels;
