import "./styles/index.scss";
import "./javaScript/main.js";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Apparels from "./pages/Apparels";
import Cart from "./pages/Cart";
import Models from "./pages/Models";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import ContactDealer from "./pages/ContactDealer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="aboutus" element={<AboutUs />} />
        <Route exact path="apparels" element={<Apparels />} />
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="location" element={<Location />} />
        <Route exact path="models" element={<Models />} />
        <Route exact path="profile" element={<Profile />} />
        <Route exact path="account" element={<Account />} />
        <Route exact path="contactdealer" element={<ContactDealer />} />
      </Routes>
    </>
  );
}

export default App;
