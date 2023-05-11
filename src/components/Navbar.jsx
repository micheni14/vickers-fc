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

  const links = [
    { id: 1, label: "home" },
    { id: 2, label: "about" },
    { id: 3, label: "team" },
    // { id: 4, label: "gallery" },
    { id: 5, label: "matchcenter" },
    { id: 6, label: "contact" },
  ];

  return (
    <div
      className={
        isScrolled
          ? "h-[90px] fixed bg-white  w-full top-0"
          : "h-[90px] bg-white"
      }
    >
      <div className="h-full  w-mobile md:w-container mx-auto flex  justify-between items-center">
        <div>
          <img
            className=""
            src={
              isScrolled
                ? "https://res.cloudinary.com/kelvin45/image/upload/c_scale,w_70/v1682497884/Vikers_logo-1-removebg-preview_pdzctv.png"
                : "https://res.cloudinary.com/kelvin45/image/upload/c_scale,w_85/v1682497884/Vikers_logo-1-removebg-preview_pdzctv.png"
            }
            alt=""
          />
        </div>
        <ul className="flex  space-x-6 items-center">
          {links.map((navlink) => (
            <div key={navlink.id}>
              <li>
                <Link
                  className="cursor-pointer capitalize"
                  activeClass="active-hover"
                  to={navlink.label}
                  spy={true}
                  smooth={true}
                  offset={-9}
                  duration={500}
                >
                  {navlink.label}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
