import React from "react";

const InfoSection = ({ title, data }) => {
  const entries = Object.entries(data);

  return (
    <div className="mt-5 space-y-4">
      {/* Section Title */}
      <div className="flex items-center gap-2">
        <input type="radio" />
        <h1 className="text-gray-400 text-[12px] font-medium">{title}</h1>
      </div>

      {/* Dynamic Info Items */}
      {entries.map(([label, value], index) => (
        <aside key={index} className="flex gap-1 justify-between w-full">
          <p className="text-gray-400 text-[14px]">{label}:</p>
          <p className="font-semibold text-[14px] text-right min-w-0">
            {value}
          </p>
        </aside>
      ))}
    </div>
  );
};

export default InfoSection;
