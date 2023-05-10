import React from "react";

const Footer = () => {
  return (
    // <div className="pb-3 bg-gradient-to-r from-ourRed  via-ourRed to-ourYellow">
    <div className="py-3 bg-OurYellow text-black" id="contact">
      <div className="w-mobile md:w-container mx-auto grid grid-cols-3 pb-5">
        <div>
          <img 
            src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,w_125/v1682497884/Vikers_logo-1-removebg-preview_pdzctv.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold">Quick links</h2>
          <ul className="text-black">
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Team</li>
            <li>matchcenter</li>
          </ul>
        </div>
        <div className="space-y-5">
          <h2 className="font-bold">Social media</h2>
          <div className="space-x-2 text-black">
            <i class="bx bx-md bxl-instagram"></i>
            <i class="bx bx-md bxl-twitter"></i>
            <i class="bx bx-md bxl-facebook-circle"></i>
            <i class="bx bx-md bxl-linkedin-square"></i>
          </div>
        </div>
      </div>
      <div className="border-t w-mobile md:w-container mx-auto py-2 text-center">
        <p>
          &copy; {new Date().getFullYear()}.
          <span className="text-yellow-500">Vikers Fc</span> All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
