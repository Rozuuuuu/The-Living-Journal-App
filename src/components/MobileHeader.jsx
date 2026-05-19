
import { NavLink } from 'react-router-dom';
import { useJournal } from '../hooks/useJournal';

export default function MobileHeader({ onMenuClick }) {
  const { agentPulseActive } = useJournal();

  return (
    <header className="md:hidden bg-surface shadow-sm docked full-width top-0 flex justify-between items-center px-lg py-md w-full transition-all duration-300 ease-in-out z-40 relative">
      <button onClick={onMenuClick} className="text-primary hover:opacity-80 transition-opacity">
        <span className="material-symbols-outlined text-[24px]">menu</span>
      </button>
      <h1 className="font-headline-lg text-headline-lg font-semibold text-primary">The Living Journal</h1>
      <NavLink to="/account" className="relative w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest block">
        <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtwMSUzjutkYLunD7ISId0lcBRkjjeEFqRdtGKbXdVZtE3tqMTB_6_FMBBPYkAwx6R-mF48fD2HVug3hHQlrRz4fQrvx1SYbKyBME9zP8N8pOBcYnGclkXy8LSZz7dxYQEr54bU22UPvW8RSSAuKBhsgl4L-BPYp7d6nC0nbzhbOwYLHhiQVLbSW_2D_5diEyJ3whR3C24TgezOOryXWzD2p-wX8BD0PJQCaPiKnLveSWotu7fTXrpB-RSSCsEpG-cvu5DrNLTOAjt"/>
        {/* Agent Pulse dot on profile avatar */}
        {agentPulseActive && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#9CAF88] border-2 border-surface agent-pulse" />
        )}
      </NavLink>
    </header>
  );
}
