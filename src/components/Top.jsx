import React from "react";
import { TbArrowUpFromArc } from "react-icons/tb";

const Top = () => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="font-bold">Delivery Details</h1>
      <aside className="flex justify-between items-center gap-2">
        <TbArrowUpFromArc className="rotate-180" /> <p>Export</p>
      </aside>
    </div>
  );
};

export default Top;
