import React from "react";
import history_img from "../assets/history_img.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import About from "../components/About";
const History = () => (
  <div>
    <div className="pb-5" id="about">
      <div className=" flex flex-col  justify-center items-center space-y-3 ">
        <h1 className="text-2xl text-ourRed  "> About us</h1>
        <h2 className="text-2xl text-ourgray-600 "> Brief History</h2>
        <p className="md:w-container w-mobile mx-auto text:md ">
          <p>Vickers FC is a military formation team that has it's roots all the way back to 1978 when it was formed from the sister units of the Kenya Army Armoured Corps.
The Name "Vickers" was adopted from "Vickers Main Battle Tank (VMBT)" which was the first main battle tank to be used by the Kenyan Army since 1978, the very same year when the football club was also formed</p>
          Vickers Club is an exciting new football club set to make its mark in the League/Division. The club was founded in 1978 by a group of passionate football fans who wanted to bring a fresh approach to the game.
        The club's mission is to promote a positive, attacking style of football that inspires fans and players alike.
<p> They believe in nurturing young talent and developing players who can go on to achieve great things in the sport.</p>
Vickers has assembled a talented and experienced coaching staff, who bring a wealth of knowledge and expertise to the team. They have also recruited a group of talented players, who are eager to prove themselves on the pitch.
Despite being a new club, Vickers has already attracted a loyal following of supporters who are excited to see what the future holds. With a clear vision and a commitment to excellence, this is a club that is poised to make a big impact on the football scene.</p>
        

      </div>

    </div>
     <About />
  </div>
)
//   return (
//     <div className="" id="about">
//       <div className="w-mobile md:w-container items-center mx-auto grid md:grid-cols-2 gap-5 ">
//         <div className="space-y-8">
//           {/* <h3 className="text-2xl text-ourRed">Vision</h3>
          // <p className="">
          //   To be a club recognized for providing top-class training and
          //   developing highly skillful and intelligent players capable of
          //   competing at the highest levels of the game locally and
          //   internationally
          // </p> */}
          {/* <h3 className="text-2xl text-ourYellow ">Mission</h3>
          <p className="">
            To foster sportsmanship and ‘espirit de corps’ amongst the officers
            and service members of Armoured Brigade and local civilian youths,
            and provide an opportunity and a suitable platform for them to
            showcase their talents in a supportive and rewarding environment
            that helps them reach their full potential on and off the field.
          </p> */}
          {/* <h2 className="text-2xl text-ourRed ">Brief History</h2>
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
}; */}

export default History;
