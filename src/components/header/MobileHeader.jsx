import React from 'react';
import { Bell, ChevronDown, Menu, X, ArrowDown, Search } from 'lucide-react';
import { GROUP_AVATARS, LOGO_IMAGE } from '@/constants/avatarImg';

export default function MobileHeader({
  user,
  notificationCount,
  mobileOpen,
  setMobileOpen,
}) {
  return (
    <div className='lg:hidden'>
      {/* Top bar */}
      <div className='flex items-center justify-between h-16 px-4'>
        {/* Logo */}
        <img src={LOGO_IMAGE} alt='FLEXDelivery Logo' className='h-6' />

        <div className='flex items-center gap-x-4 md:gap-x-6'>
          {/* Tablet */}
          <div className='hidden md:flex items-center gap-x-4'>
            <div className='relative flex items-center justify-center'>
              <Bell className='h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer' />
              <span className='absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 text-white text-[10px] font-bold p-0.5 leading-none'>
                {notificationCount}
              </span>
            </div>

            <div className='flex items-center space-x-2 cursor-pointer'>
              <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-800 border-2 border-gray-300'>
                {user.initials}
              </div>
              <ChevronDown className='h-4 w-4 text-gray-500' />
            </div>
          </div>

          {/* Menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className='text-gray-700'
          >
            {mobileOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {/* Slide-out mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg border-l transition-transform duration-300 ease-in-out z-50 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col p-4 space-y-6'>
          {/* Search bar */}
          <div className='relative flex items-center bg-gray-100 rounded-lg h-10 px-3 border'>
            <Search className='w-4 text-gray-500' strokeWidth={3.5} />
            <input
              type='text'
              placeholder='Search for anything'
              className='w-full bg-transparent ml-2 text-sm focus:outline-none placeholder-gray-500'
            />
          </div>

          <button className='flex items-center text-sm font-medium text-gray-700 space-x-1 hover:text-gray-900 transition-all duration-300 ease-in-out'>
            <ArrowDown className='w-4' strokeWidth={2.4} />
            <span>Quick actions</span>
          </button>

          {/* Bell */}
          <div className='relative flex items-center justify-start'>
            <Bell className='h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer' />
            <span className='absolute -top-1 left-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 text-white text-[10px] font-bold p-0.5 leading-none'>
              {notificationCount}
            </span>
          </div>

          {/* Avatars */}
          <div className='flex -space-x-2'>
            {GROUP_AVATARS.map((src, index) => (
              <img
                key={index}
                className='h-8 w-8 rounded-full border-2 border-white object-cover'
                src={src}
                alt={`Avatar ${index + 1}`}
                style={{ zIndex: index }}
              />
            ))}
          </div>

          {/* User Info */}
          <div className='flex items-center space-x-2 cursor-pointer'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-800 border-2 border-gray-300'>
              {user.initials}
            </div>
            <div className='flex flex-col gap-y-0.5 leading-none'>
              <span className='text-sm font-semibold text-gray-900'>
                {user.fullName}
              </span>
              <span className='text-xs font-medium text-gray-500 uppercase'>
                {user.role}
              </span>
            </div>
            <ChevronDown className='ml-1 h-4 w-4 text-gray-500' />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className='fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden'
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  );
}
