import React from "react";
import history_img from "../assets/history_img.jpg";
import { Link, animateScroll as scroll } from 'react-scroll';
const History = () => {
  return (
    <div className="" id="about" >
      <div className="w-mobile md:w-container items-center mx-auto grid md:grid-cols-2 gap-5 ">
        <div className="space-y-3">
        <h2 className="text-2xl text-ourYellow">About us</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, consectetur.</p>
        <h3 className="text-2xl text-ourRed">Vision</h3>
          <p className="text-sm">
          To be a club recognized for providing top-class training and developing highly skillful and 
intelligent players capable of competing at the highest levels of the game locally and 
internationally
          </p>
          <h3 className="text-2xl text-ourYellow ">Mission</h3>
          <p className="text-sm">To foster sportsmanship and ‘espirit de corps’ amongst the officers and service members of 
Armoured Brigade and local civilian youths, and provide an opportunity and a suitable platform 
for them to showcase their talents in a supportive and rewarding environment that helps them 
reach their full potential on and off the field.</p>
          <h2 className="text-2xl text-ourRed ">Brief History</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            libero quibusdam adipisci? Perferendis mollitia rerum voluptatibus
            dolor, quod doloribus maiores nesciunt unde quae eum autem?
          </p>
          
          <Link  
          className="px-5 py-3 text-gray-100 bg-ourYellow rounded-full "    
          to="contact" 
          spy={true}
          smooth={true} 
          offset={-40} 
          duration={500} >
          contact us
        
        </Link>
        </div>
        <div>
          <img className="rounded-md" src={history_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default History;
