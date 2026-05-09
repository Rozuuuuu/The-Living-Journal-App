import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col bg-surface-container-low shadow-xl h-screen w-80 rounded-r-xl p-lg fixed inset-y-0 left-0 z-[60] transition-transform duration-300 ease-out">
      <div className="mb-xxl flex items-center justify-between">
        <h1 className="font-headline-md text-headline-md text-primary">The Living Journal</h1>
      </div>
      <div className="flex items-center gap-md mb-xl">
        <NavLink to="/settings" className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant flex-shrink-0 block hover:opacity-80 transition-opacity">
          <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCKSfjai7T2K6_rE-bd8z6SdXiBQiqLaz41G5Y0Tx0dVpavyuCnFCraPHiQdnOOeK-WIO7phKe4w8Qc_hnAhDZ156x9J9J3HVETY3q5y3T45Z-E6K6PNtpt3U_p1xRqrY89BflbbKDsJ8JHXf2hsFg3W9D_kkDxIUoPC0jmSHei6d9agIEl50JN9WFWMj5DYIw3rccQYptgZD2yyavkKXNRfiQGE1xiUTZsGm5HzRthcplEOpjP9O6bu3TE2fUu8TMls0YwFHNplGM" />
        </NavLink>
        <div>
          <h2 className="font-headline-md text-headline-md text-primary leading-tight">Julian Thorne</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Lead Researcher</p>
          <p className="font-label-sm text-label-sm text-secondary mt-1">Active Mission: Brain Dump</p>
        </div>
      </div>
      <nav className="flex-1 space-y-2">
        <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
          <span className="material-symbols-outlined">center_focus_strong</span>
          <span className="font-label-md text-label-md">Focus Mode</span>
        </a>
        <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
          <span className="material-symbols-outlined">school</span>
          <span className="font-label-md text-label-md">Academic Research</span>
        </a>
        <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" href="#">
          <span className="material-symbols-outlined">self_improvement</span>
          <span className="font-label-md text-label-md">Rituals</span>
        </a>
        <NavLink 
          to="/vault"
          className={({ isActive }) => 
            `flex items-center gap-md px-md py-sm rounded-lg transition-transform duration-300 ease-out ${
              isActive 
                ? 'text-secondary font-bold bg-secondary-fixed/20' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`
          }
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
          <span className="font-label-md text-label-md">Archives (Vault)</span>
        </NavLink>
      </nav>
    </aside>
  );
}
