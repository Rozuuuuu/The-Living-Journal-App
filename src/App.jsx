import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import FloatingButton from './components/FloatingButton'
import MobileNav from './components/MobileNav'
import BrainDumpPage from './pages/BrainDumpPage'
import LivingDay from './pages/LivingDay'
import ActiveAgents from './pages/ActiveAgents'
import Vault from './pages/Vault'
import TaskDetail from './pages/TaskDetail'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Reflections from './pages/Reflections'
import FocusMode from './pages/FocusMode'
import Account from './pages/Account'

function AppContent() {
  const location = useLocation();
  const isTaskDetail = location.pathname === '/task';
  const isLogin = location.pathname === '/login';
  const isFocusMode = location.pathname === '/focus';
  
  const hideNav = isTaskDetail || isLogin || isFocusMode;
  const hideSidebar = isLogin || isFocusMode;

  return (
    <>
      {/* NavigationDrawer (Desktop) */}
      {!hideSidebar && <Sidebar />}

      {/* Main Content Canvas */}
      <main className={`flex-1 ${!hideSidebar && !isTaskDetail ? 'md:ml-80 pb-24 md:pb-0' : ''}`}>
        
        {/* TopAppBar (Mobile) */}
        {!hideNav && <MobileHeader />}

        <Routes>
          <Route path="/" element={<BrainDumpPage />} />
          <Route path="/living-day" element={<LivingDay />} />
          <Route path="/agents" element={<ActiveAgents />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/task" element={<TaskDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/focus" element={<FocusMode />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>

      {/* Floating Voice-to-Task Button */}
      {!hideNav && <FloatingButton />}

      {/* BottomNavBar (Mobile) */}
      {!hideNav && <MobileNav />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
