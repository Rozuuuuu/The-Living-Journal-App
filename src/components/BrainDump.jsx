import React from 'react';

export default function BrainDump() {
  return (
    <section className="mb-xxl">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-xl">Brain Dump</h2>
      <div className="bg-surface-container-lowest shadow-ambient-1 rounded-xl p-lg relative group transition-all duration-300 focus-within:shadow-ambient-2">
        <textarea 
          className="w-full bg-transparent border-0 focus:ring-0 resize-none font-body-lg text-body-lg text-primary placeholder:text-on-surface-variant/50 p-0" 
          placeholder="What's on your mind?" 
          rows="4"
        ></textarea>
        <div className="flex justify-between items-center mt-md pt-sm border-t border-surface-variant/50">
          <div className="flex gap-sm text-on-surface-variant">
            <button className="p-2 hover:text-secondary hover:bg-secondary-container/30 rounded-full transition-colors">
              <span className="material-symbols-outlined text-xl">attach_file</span>
            </button>
            <button className="p-2 hover:text-secondary hover:bg-secondary-container/30 rounded-full transition-colors">
              <span className="material-symbols-outlined text-xl">calendar_today</span>
            </button>
          </div>
          <button className="bg-primary-container text-on-primary hover:opacity-90 px-lg py-sm rounded-lg font-label-md text-label-md transition-opacity">
            Capture
          </button>
        </div>
      </div>
    </section>
  );
}
