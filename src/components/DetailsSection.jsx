import React from "react";

const DetailsSection = ({ details }) => {
  return (
    <div className="space-y-4 mt-6">
      {Object.entries(details).map(([label, value], index) => (
        <aside key={index} className="flex items-center justify-between gap-4">
          <p className="text-gray-400 text-[14px] min-w-[120px] md:min-w-[150px]">
            {label}
          </p>
          <p
            className={
              index < 2
                ? "font-bold text-[14px] text-right wrap-break-word"
                : "text-gray-400 font-semibold text-[14px] text-right wrap-break-word"
            }
          >
            {value}
          </p>
        </aside>
      ))}
    </div>
  );
};

export default DetailsSection;
