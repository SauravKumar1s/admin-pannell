import React from "react";

const Card = () => {
  return (
   

   
      <div className="flex flex-wrap pb-3  lg:mx-0">
        <div className="w-full ">
          <div className="flex flex-col px-6 py-4 overflow-hidden bg-white border-2 border-gray-300 rounded-xl shadow-">
          <p className="text-sm font-bold">Bounce Rate</p>
            <div className="flex flex-row justify-between items-center"></div>
          
            <h1 className="text-xl  sm:text-3xl font-bold text-black mt-2 ">
             $23,435
            </h1>
            <div className="flex flex-row justify-between items-center ">
              <p className="text-xs font-bold text-gray-600">vs 3 months prior to 28 Mar</p>
              <div className="flex justify-center items-center  text-white group-hover:text-gray-200 sm:text-base bg-green-300 rounded-full pl-2 pr-2">
<h1 className="text-sm font-bold text-green-700">
12%

</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Card;
