import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Matchcenter = () => {
return (
    <div className="bg-gray-100 w-mobile md:w-container mx-auto" id="matchcenter">
    <div className=" container mx-auto px-4 py-12 flex flex-col space-y-3 justify-center items-center">
        <h2 className="text-3xl text-ourRed mb-6 text-center">Matchcenter</h2>
        <div className="flex  space-x-8 mb-6">
        <NavLink
            to="/"
            className={({isActive}) =>
            isActive
            ?"px-4 py-2 bg-white text-ourYellow-900 font-bold rounded-md shadow-md hover:bg-ourRed focus:bg-gray-200 focus:outline-none "
            :" text-black px-4 py-2 bg-white text-ourYellow-900 font-bold rounded-md shadow-md hover:bg-ourYellow focus:bg-gray-200 focus:outline-none "
}
        >
            <p>Fixtures</p>
        </NavLink>
        <NavLink
            to="/leaguetable"
            className={({ isActive}) =>
            isActive
        ? "px-4 py-2 bg-white text-ourYellow-900 font-bold rounded-md shadow-md hover:bg-ourRed focus:bg-gray-200 focus:outline-none"
        : " text-black px-4 py-2 bg-white  font-bold rounded-md shadow-md text-ourYellow-900 hover:bg-ourYellow focus:bg-gray-200 focus:outline-none "
} 
>
        <p>LeagueTable</p>
        </NavLink>
        <NavLink
            to="/results"
            className={({isActive}) =>
            isActive
        ? "px-4 py-2 bg-white text-gray-900 font-bold rounded-md shadow-md hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
            :" text-black px-4 py-2 bg-white text-ourYellow-900 font-bold rounded-md shadow-md hover:bg-ourYellow focus:bg-gray-200 focus:outline-none "
}
        >
            <p>Results</p>
        </NavLink>
        </div>
        <Outlet />
    </div>
    </div>
);
};

export default Matchcenter;
