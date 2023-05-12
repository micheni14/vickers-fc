import React from "react";
import hero_image from "../assets/hero_img.jpg";
import sahara_logo from "../assets/sahara-logo-removebg-preview.png";
import stima_sacco_logo from "../assets/stima-sacco-removebg-preview.png";
import kacc from "../assets/kacc_logo-removebg-preview.png";

const Sponsors = () => {
  return (
    <div className="py-12 h-full bg-gray-50 ">
      <div className="w-mobile container mx-auto   md:w-container  space-y-5 ">
        <h2 className="text-2xl text-ourRed  ">Our sponsors</h2>

        <div className="flex flex-col items-center  space-y-10 md:flex-row md:space-x-10 md:items-center ">
          <div className="">
            {" "}
          </div>
          <div className="">
            <img src={stima_sacco_logo} />
          </div>
          <div className="">
            <img className="" src={sahara_logo} alt="" />
          </div>
          <div className=" ">
            <img className="" src={kacc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
