import React from "react";
import history_img from "../assets/history_img.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
const History = () => {
  return (
    <div className="" id="about">
      <div className="w-mobile md:w-container items-center mx-auto grid md:grid-cols-2 gap-5 ">
        <div className="space-y-8">
          {/* <h3 className="text-2xl text-ourRed">Vision</h3>
          <p className="">
            To be a club recognized for providing top-class training and
            developing highly skillful and intelligent players capable of
            competing at the highest levels of the game locally and
            internationally
          </p> */}
          {/* <h3 className="text-2xl text-ourYellow ">Mission</h3>
          <p className="">
            To foster sportsmanship and ‘espirit de corps’ amongst the officers
            and service members of Armoured Brigade and local civilian youths,
            and provide an opportunity and a suitable platform for them to
            showcase their talents in a supportive and rewarding environment
            that helps them reach their full potential on and off the field.
          </p> */}
          <h2 className="text-2xl text-ourRed ">Brief History</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            libero quibusdam adipisci? Perferendis mollitia rerum voluptatibus
            dolor, quod doloribus maiores nesciunt unde quae eum autem?
          </p>
          <div>
            <Link
              className="px-5 py-3 text-white bg-ourYellow rounded-full cursor-pointer"
              to="contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              Contact us
            </Link>
          </div>
        </div>
        <div>
          <img className="rounded-md" src={history_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default History;
