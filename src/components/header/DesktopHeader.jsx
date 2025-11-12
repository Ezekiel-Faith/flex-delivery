import {
  Search,
  ChevronDown,
  Bell,
  ArrowDown,
  ArrowLeftToLine,
} from 'lucide-react';
import { GROUP_AVATARS, LOGO_IMAGE } from '../../constants/avatarImg';

export default function DesktopHeader({ user, notificationCount }) {
  return (
    <div className='hidden lg:flex w-full items-center justify-between lg:gap-x-10 xl:gap-x-12 h-17 px-4 lg:px-6 xl:px-10'>
      <div className='flex items-center lg:space-x-5 xl:space-x-13'>
        <div className='flex items-center space-x-3'>
          <img src={LOGO_IMAGE} alt='FLEXDelivery Logo' className='h-6' />
          <div className='bg-gray-100 py-0.5 px-1.5 rounded-sm'>
            <ArrowLeftToLine
              className='w-5 hover:text-gray-700 cursor-pointer transition-all duration-300 ease-in-out'
              strokeWidth={2.4}
            />
          </div>
        </div>

        <div className='relative flex items-center bg-gray-100 rounded-lg h-10 px-3 lg:ml-0 xl:ml-4 w-full max-w-[400px] border'>
          <Search className='w-4 text-gray-500' strokeWidth={3.5} />
          <input
            type='text'
            placeholder='Search for anything'
            className='w-full bg-transparent ml-2 text-sm focus:outline-none placeholder-gray-500'
          />
        </div>
      </div>

      <div className='flex items-center lg:gap-x-3 xl:gap-x-8'>
        <button className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 ease-in-out'>
          <ArrowDown className='w-4' strokeWidth={2.4} />
          <span>Quick actions</span>
        </button>

        <div className='h-8 w-px bg-gray-200'></div>

        <div className='relative'>
          <Bell className='h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer' />
          <span className='absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 text-white text-[10px] font-bold p-0.5'>
            {notificationCount}
          </span>
        </div>

        <div className='h-8 w-px bg-gray-200'></div>

        <div className='flex -space-x-2'>
          {GROUP_AVATARS.map((src, index) => (
            <img
              key={index}
              className='h-8 w-8 rounded-full border-2 border-white object-cover shrink-0'
              src={src}
              alt={`Avatar ${index + 1}`}
              style={{ zIndex: index }}
            />
          ))}
        </div>

        <div className='h-8 w-px bg-gray-200'></div>

        <div className='flex items-center space-x-2 cursor-pointer'>
          <div className='flex items-center justify-center px-2.5 py-2 rounded-full bg-gray-100 text-sm font-semibold text-gray-800 border-2 border-gray-300'>
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

          <ChevronDown className='xl:ml-1 h-4 w-4 text-gray-500' />
        </div>
      </div>
    </div>
  );
}
