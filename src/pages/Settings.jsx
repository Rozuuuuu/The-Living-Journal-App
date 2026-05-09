import React from 'react';

export default function Settings() {
  return (
    <div className="max-w-container-max mx-auto px-lg md:px-xxl py-xl">
      <div className="mb-xl">
        <h2 className="font-headline-md text-headline-md text-primary mb-sm">Command Center</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Configure your operational environment.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Work-Life Balance Segment */}
        <section className="lg:col-span-12 mb-xl">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-md">Operational Mode</h3>
          <div className="bg-surface-container-lowest custom-shadow rounded-lg p-sm flex items-center justify-between border border-outline-variant/30">
            <button className="flex-1 py-md px-lg rounded-DEFAULT font-label-md text-label-md text-center transition-all bg-secondary-container text-on-secondary-container shadow-sm">
              Balance Mode
            </button>
            <button className="flex-1 py-md px-lg rounded-DEFAULT font-label-md text-label-md text-center text-on-surface-variant hover:bg-surface-container-low transition-all">
              Hustle Mode
            </button>
          </div>
        </section>

        {/* System Connectors */}
        <section className="lg:col-span-8 space-y-md">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-sm">System Connectors</h3>
          
          {/* Slack */}
          <div className="bg-surface-container-lowest custom-shadow rounded-lg p-lg flex items-center justify-between border border-outline-variant/30">
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded-DEFAULT bg-surface-container-low flex items-center justify-center">
                <img alt="Slack" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs3jhASZznU5gOj-ZsirovN1jiLWrVXT_bigMNr5LOvyGFigY5n2tzlZOzdV6BGI0IUfS4B_lUqb_2agcQbS3UyTLJVNahKiJXsvhoLyc3yUyHu_1Pinv0EJegBU9xTYAsK4PWWaLd4bGMItamBGAFApa_lxwH4glmmxj_FdiGAyHe15WFxV0cLObgab5Bcqbikh1RSt09msiA7QmDRCe95ln_JMTqF39X-Q3lemGXQNjen5mL3SZD3Q1nl0FCTfGB5jA_axaKmYuZ"/>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-primary">Slack Integration</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant font-normal">Sync messages and set status</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
              <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            </label>
          </div>

          {/* Gmail */}
          <div className="bg-surface-container-lowest custom-shadow rounded-lg p-lg flex items-center justify-between border border-outline-variant/30">
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded-DEFAULT bg-surface-container-low flex items-center justify-center">
                <img alt="Gmail" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFYv8A4yYWyxMBGgm3MMTd0E0M4gbOwQVFwzqNaDMbmNmXOGvs7SucEP_wj0vm6iDI8IH9p2J7Kcfk9i3VMrtVa1Tt2FWuju_aobaWOS45V1EJC3wDIA9jE77KVGen6ZBzckhXzgXTc7oFY_MLQ1P8tMt08mQQd3f2ZZ2PpHjvoCzvhGRSIMblvMvLKBPkKnE52vGSOo0KPRbrtN06rKHtZhZTG3ycwh36yXIjVFT8wu0k9PE7d7AtAu8fLdFhBn0Kk0knoOyz6n2p"/>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-primary">Gmail Integration</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant font-normal">Priority inbox processing</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" value=""/>
              <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            </label>
          </div>

          {/* n8n */}
          <div className="bg-surface-container-lowest custom-shadow rounded-lg p-lg flex items-center justify-between border border-outline-variant/30">
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded-DEFAULT bg-surface-container-low flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-2xl">hub</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-primary">n8n Workflows</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant font-normal">Advanced automation webhooks</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
              <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            </label>
          </div>
        </section>

        {/* Side settings */}
        <section className="lg:col-span-4 space-y-md">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-sm">Preferences</h3>
          <div className="bg-surface-container-lowest custom-shadow rounded-lg p-lg border border-outline-variant/30 flex flex-col gap-lg">
            <div>
              <label className="font-label-md text-label-md text-primary block mb-xs">Notification Level</label>
              <select className="w-full bg-surface-container-low border border-outline-variant/50 rounded-DEFAULT px-md py-sm font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors">
                <option>Essential Only</option>
                <option>All Alerts</option>
                <option>Muted</option>
              </select>
            </div>
            <div>
              <label className="font-label-md text-label-md text-primary block mb-xs">Data Sync Interval</label>
              <select className="w-full bg-surface-container-low border border-outline-variant/50 rounded-DEFAULT px-md py-sm font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors">
                <option>Real-time</option>
                <option>Every 15 mins</option>
                <option>Manual</option>
              </select>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
