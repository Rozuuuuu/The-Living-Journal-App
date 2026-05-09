import React from 'react';

export default function ActiveAgent() {
  return (
    <div className="lg:col-span-5 space-y-xl">
      <section>
        <div className="flex items-center gap-sm mb-md text-secondary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
          <h3 className="font-label-md text-label-md uppercase tracking-wider">Active Agent</h3>
        </div>
        <div className="bg-surface-container-lowest shadow-ambient-1 rounded-xl p-lg border-l-4 border-secondary">
          <div className="flex items-start justify-between mb-sm">
            <h4 className="font-headline-md text-headline-md text-primary">Drafting email to Jack...</h4>
            <span className="material-symbols-outlined text-secondary animate-pulse">pending</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">Synthesizing notes from yesterday's sync regarding the Q3 editorial calendar.</p>
          <div className="w-full bg-surface-variant rounded-full h-1.5 mb-2">
            <div className="bg-secondary h-1.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant text-right">65% Complete</p>
        </div>
      </section>
    </div>
  );
}
