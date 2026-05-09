import React from 'react';

export default function Vault() {
  return (
    <div className="max-w-container-max mx-auto w-full px-gutter md:px-xxl py-xl md:py-xxl">
      {/* Page Header */}
      <header className="mb-xxl text-center md:text-left">
        <h1 className="font-display-lg text-display-lg text-primary tracking-tight">The Vault</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm max-w-2xl">A quiet space for reviewing finished tasks and entering deep focus.</p>
      </header>

      {/* Focus Mode Feature Card */}
      <section className="mb-xxl relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-level-1 group transition-all duration-500 hover:shadow-level-2">
        {/* Abstract Serene Background Image */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf_7oWGocv9a-jwzumGOZLImFeBlCXTsFGGqBFBTu4NHCFMvN1oChEDeNFY_lhIuRWFJ6zay6SKZPF8N4jXKWIQ02YM-_6LNMFggUfceGghq5VGwiKPdwtXEV2ic4OmlmRCs2VQwoLBrJ5wWgwlLjerDP-ta7KBibYvknCnwNtip4UnqZk5-tWe19YEeo5exDus3oLz7rI6S5dzkz4E_U_tgos5HUIpcGYfu09CKTq_Es43nHpPAeLb14j9xiQpUY3xB9SxsqG_OCf')" }}></div>
        
        {/* Content */}
        <div className="relative z-10 p-xxl flex flex-col items-center justify-center text-center min-h-[360px]">
          <span className="material-symbols-outlined text-[48px] text-secondary mb-md opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>center_focus_strong</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">Focus Mode</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[448px] mx-auto mb-xl">Silence distractions, hide secondary navigation, and immerse yourself entirely in a single stream of thought.</p>
          
          {/* Large Minimalist Toggle */}
          <label className="relative inline-flex items-center cursor-pointer group/toggle">
            <input className="sr-only peer focus-toggle-input" type="checkbox" value=""/>
            <div className="w-20 h-10 bg-surface-container-high rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary/30 transition-colors duration-300 ease-in-out focus-toggle-bg relative shadow-inner">
              <div className="focus-toggle-knob absolute top-1 left-1 bg-surface-container-lowest border border-outline-variant rounded-full h-8 w-8 transition-transform duration-300 ease-in-out shadow-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant transition-opacity opacity-100 peer-checked:opacity-0">lock_open</span>
              </div>
            </div>
            <span className="ml-lg font-label-md text-label-md text-on-surface-variant group-hover/toggle:text-primary transition-colors">Engage Deep Work</span>
          </label>
        </div>
      </section>

      {/* Archived Missions Section */}
      <section>
        <div className="flex items-center gap-sm mb-lg border-b border-surface-container-high pb-md">
          <span className="material-symbols-outlined text-[20px] text-on-surface-variant">auto_stories</span>
          <h3 className="font-headline-md text-headline-md text-primary">Recently Completed</h3>
        </div>
        <div className="flex flex-col gap-md">
          {/* Completed Task Item 1 */}
          <article className="bg-surface-container-lowest rounded-xl p-md flex items-start gap-md shadow-level-1 transition-opacity opacity-60 hover:opacity-100 duration-300">
            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 border-secondary bg-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-on-secondary font-bold">check</span>
            </div>
            <div className="flex-1">
              <h4 className="font-body-lg text-body-lg text-primary line-through decoration-outline-variant decoration-1">Synthesize Phase 2 User Interviews</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs line-through decoration-outline-variant/50">Compile key findings into the central repository document.</p>
              <div className="flex items-center gap-sm mt-md">
                <span className="px-sm py-xs bg-surface-container rounded-md font-label-sm text-label-sm text-on-surface-variant">Academic Research</span>
                <span className="font-label-sm text-label-sm text-outline">Oct 24, 2023</span>
              </div>
            </div>
          </article>
          
          {/* Completed Task Item 2 */}
          <article className="bg-surface-container-lowest rounded-xl p-md flex items-start gap-md shadow-level-1 transition-opacity opacity-60 hover:opacity-100 duration-300">
            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 border-secondary bg-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-on-secondary font-bold">check</span>
            </div>
            <div className="flex-1">
              <h4 className="font-body-lg text-body-lg text-primary line-through decoration-outline-variant decoration-1">Morning Cognitive Dump</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs line-through decoration-outline-variant/50">Cleared 14 ambient thoughts and categorized 3 action items.</p>
              <div className="flex items-center gap-sm mt-md">
                <span className="px-sm py-xs bg-surface-container rounded-md font-label-sm text-label-sm text-on-surface-variant">Rituals</span>
                <span className="font-label-sm text-label-sm text-outline">Oct 24, 2023</span>
              </div>
            </div>
          </article>

          {/* Completed Task Item 3 */}
          <article className="bg-surface-container-lowest rounded-xl p-md flex items-start gap-md shadow-level-1 transition-opacity opacity-60 hover:opacity-100 duration-300">
            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 border-secondary bg-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-on-secondary font-bold">check</span>
            </div>
            <div className="flex-1">
              <h4 className="font-body-lg text-body-lg text-primary line-through decoration-outline-variant decoration-1">Draft Ontology Structure</h4>
              <div className="flex items-center gap-sm mt-md">
                <span className="px-sm py-xs bg-surface-container rounded-md font-label-sm text-label-sm text-on-surface-variant">Academic Research</span>
                <span className="font-label-sm text-label-sm text-outline">Oct 22, 2023</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
