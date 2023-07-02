import React from "react";
import { cardData } from "../../constant/cardData";

const Card = () => {
  return (
   
      <div className=" pb-3 lg:mx-0">
       <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {cardData.map((item, index) => (
          <div className="w-full" key={index}>
            <div className="flex flex-col px-6 py-4 overflow-hidden bg-white border-2 border-gray-300 rounded-xl shadow-">
              <p className="text-sm font-bold">{item.title}</p>
              <div className="flex flex-row justify-between items-center"></div>

              <h1 className="text-xl sm:text-3xl font-bold text-black mt-2">
                {item.amount}
              </h1>
              <div className="flex flex-row justify-between items-center">
                <p className="text-xs font-bold text-gray-600">
                  {item.description}
                </p>
                <div className="flex justify-center items-center text-white group-hover:text-gray-200 sm:text-base bg-green-300 rounded-full pl-2 pr-2">
                  <h1 className="text-sm font-bold text-green-700">
                    {item.percentage}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Card;
