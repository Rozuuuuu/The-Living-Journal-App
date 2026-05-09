import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import FloatingButton from './FloatingButton';
import MobileNav from './MobileNav';

export default function MainLayout() {
  const location = useLocation();
  const isTaskDetail = location.pathname === '/task';

  return (
    <>
      {/* NavigationDrawer (Desktop) */}
      <Sidebar />

      {/* Main Content Canvas */}
      <main className={`flex-1 md:ml-80 ${!isTaskDetail ? 'pb-24 md:pb-0' : ''}`}>
        {/* TopAppBar (Mobile) */}
        {!isTaskDetail && <MobileHeader />}

        <Outlet />
      </main>

      {/* Floating Voice-to-Task Button */}
      <FloatingButton />

      {/* BottomNavBar (Mobile) */}
      <MobileNav />
    </>
  );
}
