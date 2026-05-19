import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';
import FloatingButton from '../components/FloatingButton';
import MobileNav from '../components/MobileNav';

export default function MainLayout() {
  const location = useLocation();
  const isTaskDetail = location.pathname === '/task';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* NavigationDrawer */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content Canvas */}
      <main className={`flex-1 md:ml-80 ${!isTaskDetail ? 'pb-24 md:pb-0' : ''}`}>
        {/* TopAppBar (Mobile) */}
        {!isTaskDetail && <MobileHeader onMenuClick={() => setSidebarOpen(true)} />}

        <Outlet />
      </main>

      {/* Floating Voice-to-Task Button */}
      <FloatingButton />

      {/* BottomNavBar (Mobile) */}
      <MobileNav />

      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[50] md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
