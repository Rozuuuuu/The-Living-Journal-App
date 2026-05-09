import React from 'react';

export default function FloatingButton() {
  return (
    <button className="fixed bottom-24 md:bottom-xl right-lg md:right-xl w-14 h-14 bg-secondary text-on-secondary rounded-full shadow-ambient-2 flex items-center justify-center hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 z-50">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
    </button>
  );
}
