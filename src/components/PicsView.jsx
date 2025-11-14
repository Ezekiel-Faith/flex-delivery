import React from "react";
import { LiaEyeSolid } from "react-icons/lia";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";

const PicsView = () => {
  return (
    <div className="max-h-[576px] h-[576px] w-full max-w-[434px] md:w-[434px] border border-gray-200 rounded-2xl py-3 px-2 md:px-5">
      <div className="border border-gray-100 rounded-2xl p-3 md:p-5 flex items-center gap-1.5 w-fit">
        <LiaEyeSolid className="text-orange-400" size={18} />
        <p className="text-[12px]">25 views</p>
      </div>

      <div className="flex flex-col items-center mt-2.5 rounded-2xl py-3">
        <img
          src={b1}
          alt="Box"
          className="w-full max-w-[320px] md:max-w-[309.4px] h-auto md:h-[273.75px] bg-gray-100 p-3 object-contain"
        />

        {/* Thumbnails: horizontal scroll on small screens, normal grid on md+ */}
        <div className="flex items-center self-center justify-start md:justify-between gap-3 mt-4 px-2 md:px-4 w-full overflow-x-auto">
          {[b3, b4, b4, b2].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`thumb-${i}`}
              className="min-w-[70px] md:w-[92.5px] md:h-20 w-[82.5px] h-[70px] p-2 bg-gray-200 rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PicsView;
