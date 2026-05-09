import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TaskDetail() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-container-max mx-auto md:px-xxl md:ml-80 pb-xxl bg-background min-h-screen">
      {/* Header / Task Title */}
      <header className="pt-xl pb-lg px-lg sticky top-0 bg-background/90 backdrop-blur-sm z-10 flex items-start gap-md">
        <button 
          onClick={() => navigate(-1)}
          className="mt-1 flex-shrink-0 text-on-surface-variant hover:opacity-80 transition-opacity"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
        </button>
        <div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-xs">Draft Research Proposal</h1>
          <div className="flex items-center gap-sm text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
            <span>Due Today, 3:00 PM</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>Focus Block</span>
          </div>
        </div>
      </header>

      <main className="px-lg flex flex-col gap-xl">
        {/* AI Rationale Card (Soft Sage) */}
        <section className="bg-secondary-fixed/30 rounded-lg p-lg relative shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-sm mb-md text-secondary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            <h2 className="font-headline-md text-headline-md text-primary">AI Rationale</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Scheduled now because your energy levels typically peak between 10 AM and 12 PM. You completed the preliminary literature review yesterday, making this the logical next step while the context is fresh. 
          </p>
        </section>

        {/* Smart Task Breakdown */}
        <section>
          <h3 className="font-headline-md text-headline-md text-primary mb-md border-b border-surface-variant pb-xs">Breakdown</h3>
          <div className="flex flex-col gap-sm">
            {/* Task 1 (Completed) */}
            <label className="flex items-start gap-md p-md bg-surface-container-lowest rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer group opacity-50">
              <input 
                checked 
                readOnly
                className="w-5 h-5 rounded-full border-outline-variant text-secondary focus:ring-secondary mt-0.5 appearance-none border checked:bg-secondary checked:border-secondary flex-shrink-0 relative before:content-['✓'] before:absolute before:text-white before:text-xs before:left-[4px] before:top-[1px] before:opacity-0 checked:before:opacity-100 transition-all" 
                type="checkbox"
              />
              <div className="flex-1 line-through">
                <span className="font-body-md text-body-md text-on-surface block mb-1">Outline core hypothesis</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Completed 9:45 AM</span>
              </div>
            </label>

            {/* Task 2 (Active) */}
            <label className="flex items-start gap-md p-md bg-surface-container-lowest rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer group">
              <input 
                className="w-5 h-5 rounded-full border-outline-variant text-secondary focus:ring-secondary mt-0.5 appearance-none border checked:bg-secondary checked:border-secondary flex-shrink-0 relative before:content-['✓'] before:absolute before:text-white before:text-xs before:left-[4px] before:top-[1px] before:opacity-0 checked:before:opacity-100 transition-all" 
                type="checkbox"
              />
              <div className="flex-1">
                <span className="font-body-md text-body-md text-on-surface block mb-1">Draft methodology section</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Est. 45 mins</span>
              </div>
            </label>

            {/* Task 3 */}
            <label className="flex items-start gap-md p-md bg-surface-container-lowest rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer group">
              <input 
                className="w-5 h-5 rounded-full border-outline-variant text-secondary focus:ring-secondary mt-0.5 appearance-none border checked:bg-secondary checked:border-secondary flex-shrink-0 relative before:content-['✓'] before:absolute before:text-white before:text-xs before:left-[4px] before:top-[1px] before:opacity-0 checked:before:opacity-100 transition-all" 
                type="checkbox"
              />
              <div className="flex-1">
                <span className="font-body-md text-body-md text-on-surface block mb-1">Review resource allocation</span>
              </div>
            </label>
          </div>
        </section>

        {/* Attachments Area */}
        <section>
          <h3 className="font-headline-md text-headline-md text-primary mb-md border-b border-surface-variant pb-xs">Resources</h3>
          <div className="grid grid-cols-2 gap-md">
            {/* Attachment Card */}
            <div className="bg-surface-container-lowest rounded-lg p-md flex items-center gap-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-on-surface-variant">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>description</span>
              </div>
              <div className="overflow-hidden">
                <p className="font-label-md text-label-md text-on-surface truncate">Lit_Review_Final.pdf</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">2.4 MB</p>
              </div>
            </div>

            {/* Attachment Card */}
            <div className="bg-surface-container-lowest rounded-lg p-md flex items-center gap-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-on-surface-variant">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>image</span>
              </div>
              <div className="overflow-hidden">
                <p className="font-label-md text-label-md text-on-surface truncate">Data_Chart_Q3.png</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">1.1 MB</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Button */}
        <div className="mt-lg">
          <button 
            onClick={() => navigate('/focus')}
            className="w-full bg-primary-container text-on-primary rounded-lg py-md px-lg font-label-md text-label-md flex justify-center items-center gap-sm hover:opacity-90 transition-opacity shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            Start Focus Session
          </button>
        </div>
      </main>
    </div>
  );
}
