import React from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

const Second = () => {
  return (
    <div className="flex justify-between items-center ">
      <p className="flex-2 text-[13px] flex items-center">
        <span className="text-gray-500">Sell Ad</span>:{" "}
        <span className="font-bold">AD-1258</span>{" "}
        <div className="bg-red-400 rounded-full w-1.5 h-1.5 inline-block mx-3"></div>
        Active
      </p>
      <RiArrowDownWideFill />
    </div>
  );
};

export default Second;
