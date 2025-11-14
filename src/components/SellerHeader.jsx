import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const SellerHeader = ({ profileImg, name = "Unknown", rating = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-4 mt-3.5">
      <img
        src={profileImg}
        alt={`${name} profile`}
        className="w-[46px] h-[46px] rounded-full object-cover"
      />

      <div className="flex flex-col gap-1 min-w-0">
        <h1 className="font-semibold truncate">{name}</h1>

        <div className="flex gap-2 items-center text-amber-700">
          {Array.from({ length: fullStars }).map((_, i) => (
            <IoIosStar key={`full-${i}`} />
          ))}

          {hasHalf && <FaRegStarHalfStroke />}

          {Array.from({ length: emptyStars }).map((_, i) => (
            <span key={`empty-${i}`} className="opacity-30">
              <IoIosStar />
            </span>
          ))}

          <p className="text-[14px] text-gray-700">{rating.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
