import React from 'react';

const PackageSection = ({ details }) => {
  return (
    <div className='space-y-4 mt-6'>
      {Object.entries(details).map(([label, value], index) => (
        <aside key={index} className='flex justify-between gap-4 items-start'>
          <p className='text-gray-400 text-[14px] min-w-[120px] md:min-w-[150px]'>
            {label}
          </p>
          <p className='font-semibold text-[14px] whitespace-pre-line text-right wrap-break-word min-w-0'>
            {value}
          </p>
        </aside>
      ))}
    </div>
  );
};

export default PackageSection;
