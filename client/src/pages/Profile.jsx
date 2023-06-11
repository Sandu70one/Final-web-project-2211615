import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import background from "../assets/images/background.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// icons importing
import tw from "../assets/icons/twitter.svg";
import ig from "../assets/icons/instagram.svg";
import fb from "../assets/icons/facebook.svg";
import go from "../assets/icons/google.svg";
import Navbar from "../components/Navbar";

function Profile() {
  //-------------------------------------
  const navigation = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      return navigation("/account");
    }
  }, []);

  const Register = async (data) => {
    return axios.post("http://localhost:8000/profile/register", data);
  };
  const [RegisterForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputRegisterChange = (e) => {
    setRegisterForm({ ...RegisterForm, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async () => {

    //wait for data that client submit
    const result = await Register(RegisterForm);
    console.log("form", result);
  };
  //-----------------------------

  const [LoginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState(null);
  const handleInputLoginChange = (e) => {
    setLoginForm({ ...LoginForm, [e.target.name]: e.target.value });
  };

  const login = async (data) => {
    return axios.post("http://localhost:8000/profile/login", data);
  };

  const handleLoginSubmit = async () => {
    const result = await login(LoginForm);

    console.log("form", result);

    localStorage.setItem("user", JSON.stringify(result.data.data));
    // if (result) {
    //   localStorage.setItem("user", JSON.stringify(result.data.data));
    //   navigation("/account");
    //   return;
    // }
  };

  return (
    <div className="background ">
      {/*< img className="back-image" src={background} /> */}
      <div className="form-box box-container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active login-register-tab"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Login
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link login-register-tab"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Register
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <form>
              <div className="text-center mb-3">
                <p>Sign in with:</p>
                <img className="social-icon" src={go} alt="youtube" />

                <img className="social-icon" src={tw} alt="youtube" />

                <img className="social-icon" src={fb} alt="youtube" />

                <img className="social-icon" src={ig} alt="youtube" />
              </div>

              <p className="text-center">or:</p>

              <div className="form-outline mb-4">
                <input
                  name="email"
                  type="email"
                  onChange={handleInputLoginChange}
                  id="loginName"
                  className="form-control"
                />
                <label className="form-label">Email </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  name="password"
                  onChange={handleInputLoginChange}
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
                <label className="form-label">Password</label>
              </div>

              <div className="row mb-4">
                <div className="forgot-password col-md-6 d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button
                onClick={handleLoginSubmit}
                type="submit"
                className="form-btn btn login-register-btn btn-primary btn-block mb-4"
              >
                Sign In
              </button>

              <div className="text-center">
                <p>
                  Not a member? <a href="#!">Register</a>
                </p>
              </div>
            </form>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="0"
          >
            <form>
              <div className="text-center mb-3">
                <p>Sign up with:</p>
                <img className="social-icon" src={go} alt="youtube" />

                <img className="social-icon" src={tw} alt="youtube" />

                <img className="social-icon" src={fb} alt="youtube" />

                <img className="social-icon" src={ig} alt="youtube" />
              </div>

              <p className="text-center">or:</p>

              <div className="form-outline mb-4">
                <input
                  name="name"
                  onChange={handleInputRegisterChange}
                  type="text"
                  id="registerUsername"
                  className="form-control"
                />
                <label className="form-label">name</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  name="email"
                  onChange={handleInputRegisterChange}
                  type="email"
                  id="registerEmail"
                  className="form-control"
                />
                <label className="form-label">Email</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  name="password"
                  onChange={handleInputRegisterChange}
                  type="password"
                  id="registerPassword"
                  className="form-control"
                />
                <label className="form-label">Password</label>
              </div>

              <button
                onClick={handleRegisterSubmit}
                type="submit"
                className="form-btn btn login-register-btn btn-primary btn-block mb-3"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Profile;
