import "../styles/index.scss";
import "../javaScript/main.js";
import React from 'react'
import Navbar from "../components/Navbar";
import EventSlide from "../components/EventSlide";
import ShopLinkArea from "../components/shopLinkArea";
import CustomerReveiws from "../components/CustomerReveiws";
import ReachUs from "../components/ReachUs";
import Footer from "../components/footer";

function Home() {
  return (
    <div >
       
       <EventSlide/>
       <ShopLinkArea/>
       <CustomerReveiws/>
       <ReachUs/>
       <Footer/>
    </div>
  )
}

export default Home