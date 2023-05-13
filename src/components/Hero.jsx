import React from "react";
// import hero_image from "../assets/hero_img.jpg";

import image5 from "../assets/Gallery/image (5).jpeg";
console.log("image5>>", image5);
// import Navbar from "./Navbar";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="/"
      className="py-4 text-white h-[600px]  bg-no-repeat bg-cover bg-center 	 bg-blend-multiply"
      style={{
        backgroundImage: `url('${image5}')`,
        backgroundColor: "rgba(0, 0, 0,0.6)",
      }}
    >
      <div className="flex text-center h-full  justify-center items-center  w-mobile md:w-container  mx-auto ">
        <div className="space-y-14">
          <h2 className="text-7xl font-extrabold mb-5">Together we punch</h2>
          <div>
            <Link
              className="px-7 py-3.5 bg-ourYellow   text-lg  cursor-pointer rounded-full"
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
