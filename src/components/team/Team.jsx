import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Team = () => {
  return (
    <div className="" id="team">
      <div className="w-mobile md:w-container mx-auto">
        <div className="flex flex-col space-y-3 justify-center items-center">
          <h2 className="text-2xl text-ourRed">Club profile</h2>
          <p>This is the team behind the success of Vickers football team</p>
          <div className="flex space-x-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-1 bg-ourYellow  text-gray-100 cursor-pointer rounded-full"
                  : "px-5 py-1 bg-gray-100 shadow  cursor-pointer rounded-full"
              }
            >
              <p>Club Officials</p>
            </NavLink>
            <NavLink
              to="/women"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-1 bg-ourYellow  text-gray-100 cursor-pointer rounded-full"
                  : "px-5 py-1 bg-gray-100 shadow  cursor-pointer rounded-full"
              }
            >
              <p>Women Team</p>
            </NavLink>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-1 bg-ourYellow  text-gray-100 cursor-pointer rounded-full"
                  : "px-5 py-1 bg-gray-100 shadow  cursor-pointer rounded-full"
              }
            >
              <p className="">Men team</p>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
      {/* <div>
      </div> */}
    </div>
  );
};

export default Team;
