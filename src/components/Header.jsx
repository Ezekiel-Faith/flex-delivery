import React, { useState } from 'react';
import DesktopHeader from './header/DesktopHeader';
import MobileHeader from './header/MobileHeader';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const notificationCount = 2;

  const user = {
    initials: 'BE',
    fullName: 'Bright Eyeghelene',
    role: 'ADMIN',
  };

  return (
    <header className='w-full'>
      {/* Desktop Header */}
      <DesktopHeader user={user} notificationCount={notificationCount} />

      {/* Mobile / Tablet Header */}
      <MobileHeader
        user={user}
        notificationCount={notificationCount}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
    </header>
  );
}
