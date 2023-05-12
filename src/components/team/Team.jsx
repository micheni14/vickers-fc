import React, {useState} from "react";
import { NavLink, Outlet } from "react-router-dom";

const Team = () => {
  const [tabs, setTabs] = useState([
    { name: "Club Officials", to: "", isActive: true },
    { name: "Women's Team", to: "women", isActive: false },
    { name: "Men's Team", to: "men", isActive: false }
  ]);

  function handleTabClick(clickedIndex) {
    setTabs((prevTabs) =>
      prevTabs.map((tab, i) => ({
        ...tab,
        isActive: i === clickedIndex,
      }))
    );
  }

  return (
    <div className="" id="team">
      <div className="w-mobile md:w-container mx-auto">
        <div className="flex flex-col space-y-3 justify-center items-center">
          <h2 className="text-2xl text-ourRed">Club profile</h2>
          <p>This is the team behind the success of Vickers football team</p>
          <div className="flex space-x-3">
            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-1 bg-ourYellow  text-gray-100 cursor-pointer rounded"
                  : "px-5 py-1 bg-gray-100 shadow  cursor-pointer rounded"
              }
            >
              <p>Club Officials</p>
            </NavLink>
            <NavLink
              to="/women"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-1 bg-ourYellow  text-gray-100 cursor-pointer rounded"
                  : "px-5 py-1 border border-ourYellow shadow  cursor-pointer rounded"
              }
            >
              <p>Women Team</p>
            </NavLink>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-1 bg-ourYellow  text-gray-100 cursor-pointer rounded"
                  : "px-5 py-1 bg-gray-100 shadow  cursor-pointer rounded"
              }
            >
              <p className="">Men team</p>
            </NavLink> */}

            
<div className="flex items-center bg-white ">
{tabs.map((tab, i)=>(
              <NavLink key={i}
              to={tab.to}
              className={ `px-5  py-1 cursor-pointer border-b-2 ${tab.isActive ? 'border-ourYellow text-ourYellow' : 'text-slate-800 '}` }
              onClick={()=>handleTabClick(i)}
              >{tab.name}</NavLink>
            ))}

	
</div>
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
