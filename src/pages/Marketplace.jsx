import Header from '@/components/Header';
import MainArea from '@/components/MainArea';
import Sidebar from '@/components/Sidebar';
import React from 'react';

export default function Marketplace() {
  return (
    <>
      <Header />
      <div className='flex items-start'>
        <Sidebar />
        <MainArea />
      </div>
    </>
  );
}
