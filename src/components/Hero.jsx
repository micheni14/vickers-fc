import React from "react";
import hero_image from "../assets/hero_img.jpg";
// import Navbar from "./Navbar";
import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
  
  return (
    <div
    id="home"
      className="py-4 text-white h-[600px]  bg-no-repeat bg-cover bg-left-top	 bg-blend-multiply"
      style={{
        backgroundImage: `url(${hero_image})`,
        backgroundColor: "rgba(0, 0, 0,0.8)",
      }}
    >
      {/* <Navbar /> */}
      <div className="grid md:grid-cols-2 h-[400px]  items-center w-mobile md:w-container  mx-auto ">
        <div className=""></div>
        <div className="space-y-12">
          <h2 className="text-6xl font-bold mb-5">All out, all game, all season</h2>

          
          <Link  
          className="px-5 py-3 bg-ourYellow rounded-full"    
          to="about" 
          spy={true}
          smooth={true} 
          offset={-20} 
          duration={500} >
          Learn more
        
        </Link>
    



        </div>
      </div>
    </div>
  );
};

export default Hero;
