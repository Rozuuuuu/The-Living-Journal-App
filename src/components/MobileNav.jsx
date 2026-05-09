import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-md pb-md pt-sm bg-surface shadow-[0_-4px_20px_rgba(0,0,0,0.04)] rounded-t-xl transition-transform duration-200">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center rounded-xl px-4 py-1.5 transition-transform duration-200 scale-95 hover:opacity-90 active:scale-90 ${
            isActive ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant opacity-70'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined text-xl" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>edit_note</span>
            <span className="font-label-md text-[10px] mt-1">Dump</span>
          </>
        )}
      </NavLink>
      <NavLink 
        to="/living-day" 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center rounded-xl px-4 py-1.5 transition-transform duration-200 scale-95 hover:opacity-90 active:scale-90 ${
            isActive ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant opacity-70'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined text-xl" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>view_day</span>
            <span className="font-label-md text-[10px] mt-1">Living Day</span>
          </>
        )}
      </NavLink>
      <NavLink 
        to="/agents" 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center rounded-xl px-4 py-1.5 transition-transform duration-200 scale-95 hover:opacity-90 active:scale-90 ${
            isActive ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant opacity-70'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined text-xl" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>smart_toy</span>
            <span className="font-label-md text-[10px] mt-1">Agent</span>
          </>
        )}
      </NavLink>
      <NavLink 
        to="/vault" 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center rounded-xl px-4 py-1.5 transition-transform duration-200 scale-95 hover:opacity-90 active:scale-90 ${
            isActive ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant opacity-70'
          }`
        }
      >
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
