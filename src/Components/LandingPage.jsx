import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
const LandingPage = () => {
  const url = `https://images.unsplash.com/photo-1536183922588-166604504d5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-100 gap-3 vh-100 overflow-x-hidden d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="fs-1 text-light">Your ads can do more.</h1>
      <p className="w-50 text-center text-light">
        Craft interactive journeys for all your advertising activities. With
        Cavai Cloud, personalisation and creativity is front and center.
        Personal data is not. Our solutions work without cookies, while offering
        insights into your audiences like never before.
      </p>
      <button className="btn text-light border-dark p-2 ps-4 pe-4 ">
        Let's Explore <BsArrowUpRightCircle className=""/>
      </button>
    </div>
  );
};

export default LandingPage;
