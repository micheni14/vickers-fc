import React from "react";
import hero_image from "../assets/hero_img.jpg";
import sahara_logo from "../assets/sahara-logo-removebg-preview.png";
import stima_sacco_logo from "../assets/stima-sacco-removebg-preview.png";
import kacc from "../assets/kacc_logo-removebg-preview.png";

const Sponsors = () => {
  return (
    <div className="py-14  h-full bg-gray-50 ">
      <div className="w-mobile md:w-container mx-auto   space-y-5 ">
        <h2 className="text-2xl">Our sponsors</h2>
        <div className="grid md:grid-cols-3 gap-4  ">
          <div className="h-24 flex">
            <img src={stima_sacco_logo} />
          </div>
          <div className="h-24 flex">
            <img className="" src={sahara_logo} alt="" />
          </div>
          <div className="h-32 flex">
            <img className="" src={kacc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
