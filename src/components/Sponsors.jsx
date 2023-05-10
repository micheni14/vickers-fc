import React from "react";
import hero_image from "../assets/hero_img.jpg";
import sahara_logo from "../assets/sahara-logo-removebg-preview.png";
import stima_sacco_logo from "../assets/stima-sacco-removebg-preview.png";
import kacc from "../assets/kacc_logo-removebg-preview.png";

const Sponsors = () => {
  return (
    <div className="py-12 h-full bg-gray-50 ">
      <div className="w-mobile md:w-container mx-auto   space-y-5 ">
        <h2 className="text-2xl">Our sponsors</h2>
        <div className=" block md:flex space-y-5 md:space-y-0  md:justify-between items-center  ">
          <div className="h-24 flex">
            <img src={stima_sacco_logo} />
          </div>
          <div className="h-24 flex">
            <img className="" src={sahara_logo} alt="" />
          </div>
          <div className="h-36  flex">
            <img className="" src={kacc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
