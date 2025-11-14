import React from "react";
import { PiNotePencilBold } from "react-icons/pi";
import DetailsSection from "./DetailsSection";
import InfoSection from "./InfoSection";
import { DetailsData, pickupInfoData } from "../constants/DetailsData"; // adjust the path as needed

const PickupDetails = () => {
  return (
    <div className="max-h-[576px] h-[576px] w-full max-w-[434px] md:w-[434px] border border-gray-200 rounded-2xl p-4 md:p-5 flex flex-col">
      <div>
        <h1 className="font-bold text-gray-400">Pick up & Delivery Details</h1>
        <hr className="border-t border-gray-500 mt-4 opacity-15" />
        <DetailsSection details={DetailsData} />
      </div>

      <InfoSection title="Pick up Details:" data={pickupInfoData} />

      <div className="flex justify-end mt-5">
        <PiNotePencilBold className="text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default PickupDetails;
