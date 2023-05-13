import React from "react";
import johnstone from "../../assets/Gallery/johnstone_segero.jpeg";
import jose from "../../assets/Gallery/jose_aringo.jpeg";
import rodgers from "../../assets/Gallery/rodgers_ odhiambo.jpeg";
import humphrey from "../../assets/Gallery/humphrey- mwita.jpeg";

const Official = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Club Officials</h2>
      <div class=" grid  rounded overflow-hidden  md:grid-cols-4 grid-cols-2 md:gap-0 gap-3 ">
        <div className="p-1">
          <img className="rounded-md h-60 w-40" src={johnstone} alt="" />
          <div className="flex flex-col space-y-2 ">
            <span className="   font-semibold text-gray-700 text-sm md:text-md ">
              JONSTONE SEGERO
            </span>
            <span className="  text-ourYellow text-sm md:text-md  ">Assistant Head Coach</span>
          </div>
        </div>
        <div className="p-1">
          <img className="rounded-md h-60 w-40" src={jose} alt="" />
          <div className="flex flex-col space-y-2">
            <span className="   font-semibold text-gray-700 text-sm md:text-md ">
              RODGERSODHIAMBO
            </span>
            <span className="  text-ourYellow text-sm md:text-md   ">Team Manager</span>
          </div>
        </div>
        <div className="p-1">
          <img className="rounded-md h-60 w-40" src={rodgers} alt="" />
          <div className="flex flex-col space-y-2">
            <span className="   font-semibold text-gray-700 text-sm md:text-md ">
              HUMPHREY MWITA
            </span>
            <span className="  text-ourYellow text-sm md:text-md   ">Team Doctor</span>
          </div>
        </div>
        <div className="p-1">
          <img className="rounded-md h-60 w-40" src={humphrey} alt="" />
          <div className="flex flex-col space-y-2">
            <span className="   font-semibold text-gray-700 text-sm md:text-md ">JOSE ARINGO</span>
            <span className="  text-ourYellow text-sm md:text-md   ">Head Coach</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Official;
