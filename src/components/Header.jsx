import React from 'react';
import DesktopHeader from './header/DesktopHeader';

export default function Header() {
  const notificationCount = 2;
  const user = {
    initials: 'BE',
    fullName: 'Bright Eyeghelene',
    role: 'ADMIN',
  };

  return (
    <header className='w-full'>
      <DesktopHeader user={user} notificationCount={notificationCount} />
      {/* <MobileHeader user={user} notificationCount={notificationCount} /> */}
    </header>
  );
}
