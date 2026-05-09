import React from 'react';

export default function LivingDay() {
  return (
    <div className="w-full flex flex-col items-center pt-[100px] md:pt-0 max-w-container-max mx-auto px-gutter md:px-xxl py-xl md:py-xxl">
      {/* Header */}
      <div className="w-full max-w-2xl text-center mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">Living Day</h2>
        <p className="font-body-md text-on-surface-variant">Wednesday, October 25th</p>
      </div>

      {/* Timeline Container */}
      <div className="w-full max-w-2xl relative">
        {/* Continuous Vertical Line */}
        <div className="absolute left-[80px] top-0 bottom-0 w-[1px] bg-surface-tint opacity-20 hidden sm:block"></div>

        {/* Timeline Item: Past Event */}
        <div className="flex flex-col sm:flex-row relative mb-lg group opacity-60">
          <div className="sm:w-[80px] flex-shrink-0 pt-sm sm:pr-md text-left sm:text-right mb-sm sm:mb-0">
            <span className="font-headline-md text-[18px] text-on-surface-variant">9:00</span>
            <span className="font-label-sm text-on-surface-variant uppercase ml-1">AM</span>
          </div>
          {/* Line Node */}
          <div className="hidden sm:flex absolute left-[80px] top-[14px] -translate-x-1/2 w-3 h-3 rounded-full bg-surface-variant border-2 border-surface z-10"></div>
          <div className="flex-1 sm:pl-xl relative">
            <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-transparent">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-label-md text-on-surface line-through">Team Meeting: Quarterly Review</h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant mt-xs line-through">Conference Room B</p>
                </div>
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Item: Current/Urgent AI Task */}
        <div className="flex flex-col sm:flex-row relative mb-lg group">
          <div className="sm:w-[80px] flex-shrink-0 pt-sm sm:pr-md text-left sm:text-right mb-sm sm:mb-0">
            <span className="font-headline-md text-[18px] text-primary">10:30</span>
            <span className="font-label-sm text-primary uppercase ml-1">AM</span>
          </div>
          {/* Line Node */}
          <div className="hidden sm:flex absolute left-[80px] top-[14px] -translate-x-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-surface z-10"></div>
          <div className="flex-1 sm:pl-xl relative">
            {/* Subtle urgency cue: thin sage border */}
            <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-secondary/30 relative overflow-hidden">
              {/* Tiny dot cue */}
              <div className="absolute top-md right-md w-2 h-2 rounded-full bg-secondary"></div>
              <div className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-sm">smart_toy</span>
                <div>
                  <p className="font-label-sm text-secondary mb-xs tracking-wider uppercase">AI Scheduled Focus</p>
                  <h3 className="font-headline-md text-[20px] text-on-surface mb-xs">Focus Session: Project Alpha</h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant mb-md">Deep work block allocated based on your energy levels. Silence notifications.</p>
                  <button className="bg-primary-container text-on-primary-container font-label-md px-md py-sm rounded-DEFAULT hover:opacity-80 transition-opacity">Start Session</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Item: Future Event */}
        <div className="flex flex-col sm:flex-row relative mb-lg group">
          <div className="sm:w-[80px] flex-shrink-0 pt-sm sm:pr-md text-left sm:text-right mb-sm sm:mb-0">
            <span className="font-headline-md text-[18px] text-on-surface-variant">1:00</span>
            <span className="font-label-sm text-on-surface-variant uppercase ml-1">PM</span>
          </div>
          {/* Line Node */}
          <div className="hidden sm:flex absolute left-[80px] top-[14px] -translate-x-1/2 w-3 h-3 rounded-full bg-surface-variant border-2 border-surface z-10 group-hover:bg-primary transition-colors"></div>
          <div className="flex-1 sm:pl-xl relative">
            <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="flex items-start">
                <span className="material-symbols-outlined text-on-surface-variant mr-sm">restaurant</span>
                <div>
                  <h3 className="font-label-md text-on-surface">Lunch Break & Walk</h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant mt-xs">Disconnect and recharge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Item: Future AI Task */}
        <div className="flex flex-col sm:flex-row relative mb-lg group">
          <div className="sm:w-[80px] flex-shrink-0 pt-sm sm:pr-md text-left sm:text-right mb-sm sm:mb-0">
            <span className="font-headline-md text-[18px] text-on-surface-variant">3:15</span>
            <span className="font-label-sm text-on-surface-variant uppercase ml-1">PM</span>
          </div>
          {/* Line Node */}
          <div className="hidden sm:flex absolute left-[80px] top-[14px] -translate-x-1/2 w-3 h-3 rounded-full bg-surface-variant border-2 border-surface z-10 group-hover:bg-secondary transition-colors"></div>
          <div className="flex-1 sm:pl-xl relative">
            <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-secondary/20 transition-all">
              <div className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-sm">smart_toy</span>
                <div>
                  <p className="font-label-sm text-secondary mb-xs tracking-wider uppercase">AI Suggested</p>
                  <h3 className="font-label-md text-on-surface">Review Draft Proposals</h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant mt-xs">Estimated 45 mins. High priority for tomorrow's deadline.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
