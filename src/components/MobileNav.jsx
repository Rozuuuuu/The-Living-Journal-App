
import { NavLink } from 'react-router-dom';
import { useJournal } from '../hooks/useJournal';

export default function MobileNav() {
  const { agentPulseActive } = useJournal();

  const navLinkClass = ({ isActive }) =>
    `flex flex-col items-center justify-center rounded-xl px-4 py-1.5 transition-transform duration-200 scale-95 hover:opacity-90 active:scale-90 ${
      isActive ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant opacity-70'
    }`;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-md pb-md pt-sm bg-surface shadow-[0_-4px_20px_rgba(0,0,0,0.04)] rounded-t-xl transition-transform duration-200">
      <NavLink to="/inbox" className={navLinkClass}>
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined text-xl" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>edit_note</span>
            <span className="font-label-md text-[10px] mt-1">Dump</span>
          </>
        )}
      </NavLink>
      <NavLink to="/timeline" className={navLinkClass}>
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined text-xl" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>view_day</span>
            <span className="font-label-md text-[10px] mt-1">Living Day</span>
          </>
        )}
      </NavLink>
      <NavLink to="/agents" className={navLinkClass}>
        {({ isActive }) => (
          <div className="relative">
            <span className="material-symbols-outlined text-xl" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>smart_toy</span>
            <span className="font-label-md text-[10px] mt-1 block text-center">Agent</span>
            {/* Agent Pulse dot on mobile */}
            {agentPulseActive && (
              <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-[#9CAF88] agent-pulse" />
            )}
          </div>
        )}
      </NavLink>
      <NavLink to="/vault" className={navLinkClass}>
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined text-xl" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>auto_stories</span>
            <span className="font-label-md text-[10px] mt-1">Vault</span>
          </>
        )}
      </NavLink>
    </nav>
  );
}
