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
      <section className="bg-[#e6e6e6] mt-5 mx-auto p-4 sm:p-5 ">
        <Second />
        <hr className="border-t border-black opacity-15 mt-4" />

        {/* Main content: stack on mobile, row on md+ */}
        <section className="mt-7 flex flex-col md:flex-row md:items-center gap-1.5">
          <div>
            <PicsView />
          </div>

          {/* Make these two sit beside each other on desktop */}
          <div className="flex flex-col md:flex-row gap-1.5 md:flex-1">
            <PickupDetails />
            <PackageDetails />
          </div>
        </section>

        {/* Seller / Buyer row: stack on mobile */}
        <section className="mt-7 flex flex-col md:flex-row gap-1.5">
          <div className="w-full md:w-[434px]">
            <Seller />
          </div>
          <div className="w-full md:w-[434px]">
            <Buyer />
          </div>
        </section>
      </section>
    </section>
  );
};

export default DeliveryDetails;
