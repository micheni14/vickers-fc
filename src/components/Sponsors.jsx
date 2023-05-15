import React from "react";
import hero_image from "../assets/hero_img.jpg";
import sahara_logo from "../assets/sahara-logo-removebg-preview.png";
import stima_sacco_logo from "../assets/stima-sacco-removebg-preview.png";
import kacc from "../assets/kacc_logo-removebg-preview.png";

const Sponsors = () => {
  return (
    <div className="py-12 h-full bg-gray-50 ">
      <div className="w-mobile container mx-auto   md:w-container  space-y-4 ">
        <h2 className="text-2xl text-ourRed  ">Our sponsors</h2>

        <div className=" block md:flex space-y-5 md:space-y-0  md:justify-between justify-center items-center">
          <div className="">
            {" "}
          </div>
          <div className="h-24 flex justify-center">
            <img src={stima_sacco_logo} />
          </div>
          <div className=" h-24 flex justify-center">
            <img className="" src={sahara_logo} alt="" />
          </div>
          <div className="- h-36 flex justify-center">
            <img className="" src={kacc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
