import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wave from "react-wavify";
import Pay from "../components/assets/payblack.png";
import Prices from "../components/assets/pricesblack.png";
import Calendar from "../components/assets/calendarblack.png";
import Session from "../components/assets/sessionblack.png";

const Work = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <h1
          className=""
          style={{
            paddingTop: "10px",
            fontWeight: "bold",
            marginBottom: "0px",
            textAlign: "center",
          }}
        >
          How It Works
        </h1>
        <span
          style={{
            display: "block",
            justifyContent: "center",
            position: "relative", // Change the position to relative
            top: "10px", // Adjust the top value to control the distance between the title and the underline
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "8px",
            backgroundColor: "#9dcd5a",
            borderRadius: "5px",
          }}
        ></span>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4">
              <img src={Prices} alt="Image 1" className="img-fluid" />
              <div className="image-text text-center">
                Choose the right plan
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <img src={Pay} alt="Image 2" className="img-fluid" />
              <div className="image-text text-center">Pay for the plan</div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <img src={Calendar} alt="Image 3" className="img-fluid" />
              <div className="image-text text-center">
                Select a date and time
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <img src={Session} alt="Image 4" className="img-fluid" />
              <div className="image-text text-center">Join the session</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Work;
