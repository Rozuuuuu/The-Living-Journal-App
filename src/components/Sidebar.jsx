import React from 'react';
import { NavLink } from 'react-router-dom';
import { useJournal } from '../hooks/useJournal';

export default function Sidebar({ isOpen, setIsOpen }) {
  const { agentPulseActive } = useJournal();
  
  const handleLinkClick = () => {
    if (setIsOpen) setIsOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-md px-md py-sm rounded-lg transition-all duration-300 ease-out ${
      isActive
        ? 'text-secondary font-semibold bg-secondary-container/30'
        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
    }`;

  return (
    <aside className={`flex flex-col bg-surface-container-low shadow-xl h-screen w-80 rounded-r-xl p-lg fixed inset-y-0 left-0 z-[60] transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      {/* Brand */}
      <div className="mb-xxl flex items-center justify-between">
        <h1 className="font-headline-md text-headline-md text-primary">The Living Journal</h1>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-md mb-xl">
        <NavLink to="/account" onClick={handleLinkClick} className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant flex-shrink-0 block hover:opacity-80 transition-opacity">
          <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCKSfjai7T2K6_rE-bd8z6SdXiBQiqLaz41G5Y0Tx0dVpavyuCnFCraPHiQdnOOeK-WIO7phKe4w8Qc_hnAhDZ156x9J9J3HVETY3q5y3T45Z-E6K6PNtpt3U_p1xRqrY89BflbbKDsJ8JHXf2hsFg3W9D_kkDxIUoPC0jmSHei6d9agIEl50JN9WFWMj5DYIw3rccQYptgZD2yyavkKXNRfiQGE1xiUTZsGm5HzRthcplEOpjP9O6bu3TE2fUu8TMls0YwFHNplGM" />
        </NavLink>
        <div>
          <h2 className="font-headline-md text-headline-md text-primary leading-tight">Julian Thorne</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Lead Researcher</p>
          <p className="font-label-sm text-label-sm text-secondary mt-1">Active Mission: Brain Dump</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        <NavLink to="/inbox" onClick={handleLinkClick} className={navLinkClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>edit_note</span>
              <span className="font-label-md text-label-md">Brain Dump</span>
            </>
          )}
        </NavLink>

        <NavLink to="/timeline" onClick={handleLinkClick} className={navLinkClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>view_day</span>
              <span className="font-label-md text-label-md">Living Day</span>
            </>
          )}
        </NavLink>

        <NavLink to="/agents" onClick={handleLinkClick} className={navLinkClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>smart_toy</span>
              <span className="font-label-md text-label-md">Mission Control</span>
              {/* Agent Pulse Indicator */}
              <span 
                className={`ml-auto w-2.5 h-2.5 rounded-full bg-[#9CAF88] ${agentPulseActive ? 'agent-pulse' : 'agent-pulse-idle'}`}
                title={agentPulseActive ? 'Agents active' : 'Agents idle'}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/vault" onClick={handleLinkClick} className={navLinkClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>auto_stories</span>
              <span className="font-label-md text-label-md">Vault</span>
            </>
          )}
        </NavLink>

        <NavLink to="/profile" onClick={handleLinkClick} className={navLinkClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>insights</span>
              <span className="font-label-md text-label-md">Reflections</span>
            </>
          )}
        </NavLink>

        <div className="!mt-lg pt-lg border-t border-surface-variant/50">
          <NavLink to="/settings" onClick={handleLinkClick} className={navLinkClass}>
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>tune</span>
                <span className="font-label-md text-label-md">System Connectors</span>
              </>
            )}
          </NavLink>

          <NavLink to="/focus" onClick={handleLinkClick} className={navLinkClass}>
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>center_focus_strong</span>
                <span className="font-label-md text-label-md">Focus Mode</span>
              </>
            )}
          </NavLink>
        </div>
      </nav>

      {/* Bottom Agent Status */}
      <div className="mt-auto pt-lg border-t border-surface-variant/50">
        <div className="flex items-center gap-sm">
          <span className={`w-3 h-3 rounded-full bg-[#9CAF88] ${agentPulseActive ? 'agent-pulse' : 'agent-pulse-idle'}`} />
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {agentPulseActive ? 'Agents working in background' : 'All agents idle'}
          </span>
        </div>
      </div>
    </aside>
  );
}
