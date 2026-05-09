import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FocusMode() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col items-center pt-[100px] md:pt-0 max-w-container-max mx-auto px-gutter md:px-xxl py-xl md:py-xxl">
      {/* Top Section: Current Task & Exit */}
      <header className="flex flex-col items-center w-full max-w-2xl relative mb-xl">
        <button 
          onClick={() => navigate(-1)}
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 self-start absolute top-0 left-0"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>close</span>
          <span className="font-label-md text-label-md sr-only">Exit Focus</span>
        </button>
        <div className="text-center">
          <h2 className="font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase mb-sm">Current Focus</h2>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Chapter 3: Cognitive Mapping</h1>
        </div>
      </header>

      {/* Center Section: Pomodoro Timer */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl my-xxl">
        {/* Elegant Circular Timer Representation */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-xl">
          {/* Subtle background ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle className="text-surface-container-high" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="2"></circle>
            {/* Progress ring (example at ~70%) */}
            <circle className="text-secondary drop-shadow-sm" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="283" strokeDashoffset="85" strokeWidth="2"></circle>
          </svg>
          <div className="text-center z-10 flex flex-col items-center">
            <span className="font-display-lg text-display-lg text-primary tracking-tighter tabular-nums">25:00</span>
            <span className="font-label-sm text-label-sm text-secondary mt-xs">Deep Work</span>
          </div>
        </div>
        
        {/* Play/Pause Control */}
        <button className="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>pause</span>
        </button>
      </main>

      {/* Bottom Section: Ambient Sounds */}
      <footer className="w-full max-w-2xl mt-auto">
        <h3 className="font-label-sm text-label-sm text-on-surface-variant text-center mb-md uppercase tracking-widest">Ambient Sound</h3>
        <div className="flex justify-center gap-md">
          {/* Sound Toggle: Rain (Active) */}
          <button className="flex flex-col items-center gap-xs p-md rounded-lg bg-secondary-container text-on-secondary-container transition-transform active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
            <span className="font-label-sm text-label-sm">Rain</span>
          </button>
          {/* Sound Toggle: Coffee Shop */}
          <button className="flex flex-col items-center gap-xs p-md rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>local_cafe</span>
            <span className="font-label-sm text-label-sm">Cafe</span>
          </button>
          {/* Sound Toggle: Ocean */}
          <button className="flex flex-col items-center gap-xs p-md rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>tsunami</span>
            <span className="font-label-sm text-label-sm">Ocean</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
