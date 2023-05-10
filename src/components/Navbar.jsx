import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);
  console.log("isScrolled is", isScrolled);

  //sidebar Toggle
  // const [sidebar, setSidebar] = useState(false);

  // const links = [
  //   { id: 1, label: "home" },
  //   { id: 2, label: "about" },
  //   { id: 3, label: "team" },
  //   { id: 4, label: "matchcenter" },
  //   { id: 5, label: "contact" },
  // ];

  // dropdown toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div
      className={
        isScrolled
          ? "h-[110px] fixed bg-white  w-full top-0"
          : "h-[110px] bg-white"
      }
    >
      <div className="h-full  w-mobile md:w-container mx-auto flex  justify-between items-center">
        <div>
          <img
            className=""
            src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,w_100/v1682497884/Vikers_logo-1-removebg-preview_pdzctv.png"
            alt=""
          />
        </div>
        <ul className="flex  space-x-6 items-center text-lg">
          {/* {links.map((navlink) => (
            <div key={navlink.id}>
              <li onClick={() => alert("clicked")}>
                <Link
                  className="cursor-pointer capitalize"
                  activeClass="active-hover"
                  to={navlink.label}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  {navlink.label}
                </Link>
              </li>
            </div>
          ))} */}
          <li>
            <Link
              className="cursor-pointer "
              activeClass="active-hover"
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer "
              activeClass="active-hover"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer "
              activeClass="active-hover"
              to="team"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Team
            </Link>
          </li>
          <li className="flex space-x-2 items-center relative">
            <span
              className="cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Match center
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isDropdownOpen
                      ? "M4.5 15.75l7.5-7.5 7.5 7.5"
                      : "M19.5 8.25l-7.5 7.5-7.5-7.5"
                  }
                />
              </svg>
            </span>
            <ul
              className={
                isDropdownOpen
                  ? "  bg-white shadow-md border-t text-md rounded-lg absolute right-0 top-10 min-w-full w-[200px]"
                  : "hidden"
              }
            >
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer  ">
                Fixtures
              </li>
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer  ">
                League table
              </li>
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer  ">
                Results
              </li>
            </ul>
          </li>
          <li>
            <Link
              className="cursor-pointer "
              activeClass="active-hover"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact
            </Link>
          </li>{" "}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
