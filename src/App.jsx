
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { JournalProvider } from './hooks/useJournal'
import MainLayout from './components/MainLayout'
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

function App() {
  return (
    <JournalProvider>
      <BrowserRouter>
        <Routes>
          {/* Shell routes — persistent Sidebar, MobileNav, FloatingButton */}
          <Route element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/focus" element={<FocusMode />} />
            <Route path="/inbox" element={<BrainDumpPage />} />
            <Route path="/timeline" element={<LivingDay />} />
            <Route path="/agents" element={<ActiveAgents />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/task" element={<TaskDetail />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Reflections />} />
            <Route path="/account" element={<Account />} />
            {/* Root redirects to inbox */}
            <Route path="/" element={<Navigate to="/inbox" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </JournalProvider>
  )
}

export default App
