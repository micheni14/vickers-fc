import React from "react";
import official1 from "../../assets/Gallery/official (1).jpeg";
import official2 from "../../assets/Gallery/official (2).jpeg";
import official3 from "../../assets/Gallery/official (3).jpeg";
import official4 from "../../assets/Gallery/official4.jpeg";



const Official = () => {
  return (
    
    <div>
      <h2 className="text-2xl font-bold">Club Officials</h2>
      <div class="rounded overflow-hidden  lg:grid grid-cols-4 ">
      
  <div className="p-1">

    <img className="rounded-md h-60 w-40" src={official1} alt="" />
    <div className="flex flex-col">
      <span className="inline-block  rounded-full px-1 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">JONSTONE SEGERO</span>
      <span className="inline-block  rounded-full px-1 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">Assistant Head Coach</span>
    </div>
  </div>
  <div className="p-1">

    <img className="rounded-md h-60 w-40" src={official2} alt="" />
    <div className="flex flex-col">
      <span className="inline-block  rounded-full px-1 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">RODGERSODHIAMBO</span>
      <span className="inline-block  rounded-full px-1 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">Team Manager</span>
    </div>
  </div>
  <div className="p-1">

<img className="rounded-md h-60 w-40" src={official3} alt="" />
<div className="flex flex-col">
  <span className="inline-block  rounded-full px-1 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">HUMPHRREY MWITA</span>
  <span className="inline-block  rounded-full px-1 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">Team Doctor</span>
</div>
</div>
<div className="p-1">

<img className="rounded-md h-60 w-40" src={official4} alt="" />
<div className="flex flex-col">
  <span className="inline-block  rounded-full px-1 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">JOSE ARINGO</span>
  <span className="inline-block  rounded-full px-1 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">Head Coach</span>
</div>
</div>

</div>


    </div>
  );
};

export default Official;
