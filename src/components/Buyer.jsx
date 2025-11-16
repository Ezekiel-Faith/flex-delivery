import React from 'react';
import SellerHeader from './SellerHeader';
import profile from '../assets/profile.png';
import {
  LiaPhoneSolid,
  LiaSmsSolid,
  LiaAddressBookSolid,
  LiaHomeSolid,
  LiaStarSolid,
} from 'react-icons/lia';

const Buyer = () => {
  return (
    <div className='w-full max-h-[325px] h-[325px] border border-gray-200 rounded-2xl p-4 md:p-5 flex flex-col'>
      <div>
        <h1 className='font-bold text-gray-400'>Buyer</h1>
        <hr className='border-t border-gray-500 mt-4 opacity-15' />

        <SellerHeader
          profileImg={profile}
          name='Bright Azu - Receiver'
          rating={3}
        />

        <div className='mt-2 ml-12'>
          <aside className='inline-flex items-center gap-2 mt-1 ml-3'>
            {/* 1st icon (phone) with blue dot */}
            <div className='relative flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 border border-white'>
              <div className='absolute -top-2 -right-1 w-3 h-3 bg-blue-600 rounded-full border border-white'></div>
              <LiaPhoneSolid className='text-white text-xs' />
            </div>

            {/* 2nd icon (sms) with blue dot */}
            <div className='relative flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 border border-white'>
              <div className='absolute -top-2 -right-1 w-3 h-3 bg-blue-600 rounded-full border border-white'></div>
              <LiaSmsSolid className='text-white text-xs' />
            </div>

            {/* 3rd icon (address book) no dot */}
            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 border border-white'>
              <LiaAddressBookSolid className='text-white text-sm' />
            </div>

            {/* 4th icon (home) with blue dot */}
            <div className='relative flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 border border-white'>
              <div className='absolute -top-2 -right-1 w-3 h-3 bg-blue-600 rounded-full border border-white'></div>
              <LiaHomeSolid className='text-white text-sm' />
            </div>

            {/* 5th icon (star) no dot */}
            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 border border-white'>
              <LiaStarSolid className='text-white text-xs' />
            </div>
          </aside>
        </div>

        <div className='mt-6 flex-col'>
          <div className='mt-6 flex items-center gap-2 mb-4'>
            <h1 className='text-[14px] font-medium whitespace-nowrap'>
              Purchase Details
            </h1>
            <hr className='grow border-t border-gray-400' />
          </div>

          <section className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
              <p className='text-[14px] text-gray-500'>Purchase Date</p>
              <p className='text-[14px] font-semibold'>25th August</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[14px] text-gray-500'>Purchase Mode</p>
              <p className='text-[14px] font-semibold'>Purchase Protection</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[14px] text-gray-500'>Linked Delivery Job</p>
              <p className='text-[14px] font-semibold'>PP-5698</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Buyer;
