import React from "react";
import "../styles/reachus.css";

function ReachUs() {
  return (
    <div className="main-container">
      <div className="open-hours-container">
        <p className="header-text">Business Hours</p>
        <div className="day-time">
          <div className="day">
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>
          </div>
          <div className="time">
            <p>11.00-23.00</p>
            <p>11.00-23.00</p>
            <p>&nbsp;8.00-14.00</p>
            <p>11.00-23.00</p>
            <p>&nbsp;11.00-5.00</p>
            <p>11.00-5.00</p>
            <p>
              <span style={{ color: "#D61A3C" }}>&nbsp; &nbsp; Closed</span>
            </p>
          </div>
        </div>
      </div>
      <div className="map-container"></div>
    </div>
  );
}

export default ReachUs;
