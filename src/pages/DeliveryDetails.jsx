import Top from "@/components/Top";
import Second from "@/components/Second";
import React from "react";
import PicsView from "@/components/PicsView";
import PickupDetails from "@/components/PickupDetails";
import PackageDetails from "@/components/PackageDetails";
import Seller from "@/components/Seller";
import Buyer from "@/components/Buyer";

const DeliveryDetails = () => {
  return (
    <section className="">
      <Top />
      <section className="bg-[#d1d1d1] mt-5 p-4 sm:p-5 border border-amber-600">
        <div className="max-w-[1300px] mx-auto w-full">
          <Second />
          <hr className="border-t border-black opacity-15 mt-4" />

          {/* Main content: stack on mobile, row on md+ */}
          <section className="mt-7 flex flex-col md:flex-row lg:flex-nowrap gap-2 md:justify-center md:items-start">
            {/* PicsView */}
            <div className="flex justify-center md:justify-start md:flex-none">
              <PicsView />
            </div>

            {/* Pickup + Package */}
            <div className="flex flex-col md:flex-row gap-2 md:flex-1">
              <PickupDetails />
              <PackageDetails />
            </div>
          </section>

          {/* Seller / Buyer row */}
          <section className="mt-7 md:self-start flex flex-col md:flex-row gap-2 md:justify-start">
            <div className="w-full md:w-[434px] flex justify-center md:justify-start">
              <Seller />
            </div>
            <div className="w-full md:w-[434px] flex justify-center md:justify-start">
              <Buyer />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default DeliveryDetails;
