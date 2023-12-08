import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
const Clients = () => {
  const url = `https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-100 gap-3 vh-100 overflow-x-hidden d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="fs-1 text-light">
        Your Bussiness grow faster than you think..
      </h1>
      <p className="w-50 text-center text-light">
        Craft interactive journeys for all your advertising activities. With
        Cavai Cloud, personalisation and creativity is front and center.
        Personal data is not. Our solutions work without cookies, while offering
        insights into your audiences like never before.
      </p>
      <button className="text-light btn  p-2 ps-4 pe-4 ">
        Let's Explore <BsArrowUpRightCircle className="" />
      </button>
    </div>
  );
};

export default Clients;
