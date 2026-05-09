import React from 'react';

export default function Account() {
  return (
    <div className="flex-1 w-full max-w-container-max mx-auto px-gutter md:px-xxl py-xl md:py-xxl">
      <header className="mb-xl md:mb-xxl">
        <h1 className="font-display-lg text-display-lg text-primary mb-sm">Account & Sovereignty</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Manage your personal identity, data residency, and the boundaries of your digital focus.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl md:gap-xxl">
        {/* Left Column: Personal Identity & Privacy */}
        <div className="lg:col-span-7 flex flex-col gap-xl">
          
          {/* Personal Identity Section */}
          <section className="elevation-1 rounded-lg p-xl flex flex-col gap-lg">
            <h2 className="font-headline-md text-headline-md text-primary border-b border-surface-variant pb-sm">Personal Identity</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-lg mt-sm">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border border-surface-variant">
                  <img alt="Avatar Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCARhE5xIPhUlnOIf-Qh5lyqaII9vkG7IdTfIuTauWlpX1LUkWjroUkqf6xdI5RJCEj4Z6vJ_RLybdKA2WGiKpWSCzq4EOAyWea2weooYbdkNC7dRyB-z-uC_CevZVkXlkCfjmloIgnsoxXENMORmiFc_53O4WRHwST4qaVaxTdhG3y3Fvbe1CbFJ4X_qevKkPoLzk3S0B0zwb8t5Ajt1d9yR0ZvSJ1vb3yvsvDImi-dXTL0uGKaFk-lKQesJhNyoHoVScmeC1Kkf7u"/>
                </div>
                <button className="absolute bottom-0 right-0 bg-surface-container text-on-surface w-8 h-8 rounded-full flex items-center justify-center border border-surface-variant hover:bg-surface-variant transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                </button>
              </div>
              <div className="flex-1 w-full space-y-md">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Display Name</label>
                  <input className="input-editorial w-full px-md py-sm rounded text-primary font-body-md text-body-md" type="text" defaultValue="Academic Lead"/>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Pronouns (Optional)</label>
                  <input className="input-editorial w-full px-md py-sm rounded text-primary font-body-md text-body-md" placeholder="e.g. They/Them" type="text"/>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Settings Section */}
          <section className="elevation-1 rounded-lg p-xl flex flex-col gap-lg">
            <h2 className="font-headline-md text-headline-md text-primary border-b border-surface-variant pb-sm">Focus Boundaries</h2>
            <div className="space-y-lg mt-sm">
              
              <div className="flex items-center justify-between">
                <div className="pr-md">
                  <h3 className="font-label-md text-label-md text-primary">Distraction Shield</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Automatically mute non-essential notifications during Deep Work blocks.</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle1" name="toggle" type="checkbox"/>
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle1"></label>
                </div>
              </div>

              <div className="w-full h-px bg-surface-variant"></div>
              
              <div className="flex items-center justify-between">
                <div className="pr-md">
                  <h3 className="font-label-md text-label-md text-primary">Analytics Anonymity</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Ensure your usage patterns are completely unlinked from your identity.</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle2" name="toggle" type="checkbox"/>
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle2"></label>
                </div>
              </div>

            </div>
          </section>

        </div>

        {/* Right Column: Data Sovereignty */}
        <div className="lg:col-span-5 flex flex-col gap-xl">
          <section className="elevation-1 rounded-lg p-xl flex flex-col gap-lg h-full bg-[#fdf8f8]">
            <div className="flex items-center gap-sm border-b border-surface-variant pb-sm">
              <span className="material-symbols-outlined text-secondary text-[24px]">database</span>
              <h2 className="font-headline-md text-headline-md text-primary">Data Sovereignty</h2>
            </div>
            
            <p className="font-body-md text-body-md text-on-surface-variant">
              Control where your journal entries and cognitive models reside. The Living Journal prioritizes local-first architecture for ultimate privacy.
            </p>
            
            <div className="flex flex-col gap-md mt-sm">
              {/* Option 1 */}
              <label className="relative flex cursor-pointer rounded-lg border border-secondary p-md hover:bg-surface-container-low transition-colors items-start">
                <input defaultChecked className="peer sr-only" name="storage" type="radio"/>
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-outline peer-checked:border-secondary peer-checked:border-4 shrink-0 mt-xs mr-md transition-all"></div>
                <div>
                  <span className="block font-label-md text-label-md text-primary">Local Vault (Recommended)</span>
                  <span className="block font-body-md text-body-md text-on-surface-variant mt-xs">All data stays on this device. AI models run locally. Zero cloud transmission.</span>
                </div>
              </label>

              {/* Option 2 */}
              <label className="relative flex cursor-pointer rounded-lg border border-surface-variant p-md hover:bg-surface-container-low transition-colors items-start">
                <input className="peer sr-only" name="storage" type="radio"/>
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-outline peer-checked:border-secondary peer-checked:border-4 shrink-0 mt-xs mr-md transition-all"></div>
                <div>
                  <span className="block font-label-md text-label-md text-primary">End-to-End Encrypted Sync</span>
                  <span className="block font-body-md text-body-md text-on-surface-variant mt-xs">Sync across devices. Data is encrypted before leaving your device.</span>
                </div>
              </label>
            </div>
            
            <div className="mt-auto pt-lg">
              <button className="w-full bg-primary-container text-on-primary py-md px-lg rounded font-label-md text-label-md hover:opacity-90 transition-opacity">
                Export Personal Archive
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Global Action Bar */}
      <div className="mt-xl md:mt-xxl pt-xl border-t border-surface-variant flex justify-end gap-md">
        <button className="px-lg py-sm rounded border border-secondary text-secondary font-label-md text-label-md hover:bg-surface-container-low transition-colors">
          Discard Changes
        </button>
        <button className="px-lg py-sm rounded bg-primary-container text-on-primary font-label-md text-label-md hover:opacity-90 transition-opacity">
          Save Sovereignty Protocol
        </button>
      </div>
    </div>
  );
}
