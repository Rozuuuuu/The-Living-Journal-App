

export default function Reflections() {
  return (
    <div className="md:px-xxl py-xl max-w-container-max mx-auto px-lg">
      <header className="mb-xl">
        <h1 className="font-display-lg text-display-lg text-primary mb-sm">Your Reflections</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A contemplative review of your cognitive patterns and local model sovereignty.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg md:gap-xl">
        {/* Focus Achievements - Bento Grid Style */}
        <section className="md:col-span-8 flex flex-col gap-lg">
          <h2 className="font-headline-md text-headline-md text-primary border-b border-surface-variant pb-sm">Focus Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
            
            {/* Deep Focus Card */}
            <div className="bg-surface-container-lowest rounded-lg p-lg card-shadow">
              <div className="flex justify-between items-start mb-md">
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Deep Focus</h3>
                  <p className="font-headline-lg text-headline-lg text-primary mt-xs">24h 12m</p>
                </div>
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>psychiatry</span>
              </div>
              <div className="h-24 w-full flex items-end gap-1 border-b border-surface-variant pb-xs">
                <div className="w-1/6 bg-secondary-container h-[40%] rounded-t-sm"></div>
                <div className="w-1/6 bg-secondary-container h-[60%] rounded-t-sm"></div>
                <div className="w-1/6 bg-secondary-container h-[50%] rounded-t-sm"></div>
                <div className="w-1/6 bg-secondary h-[80%] rounded-t-sm"></div>
                <div className="w-1/6 bg-secondary-container h-[70%] rounded-t-sm"></div>
                <div className="w-1/6 bg-secondary-container h-[90%] rounded-t-sm"></div>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-sm text-right">+12% vs last week</p>
            </div>

            {/* Shallow Admin Card */}
            <div className="bg-surface-container-lowest rounded-lg p-lg card-shadow">
              <div className="flex justify-between items-start mb-md">
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Shallow Admin</h3>
                  <p className="font-headline-lg text-headline-lg text-on-primary-container mt-xs">8h 45m</p>
                </div>
                <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 0" }}>inbox</span>
              </div>
              <div className="h-24 w-full flex items-end gap-1 border-b border-surface-variant pb-xs">
                <div className="w-1/6 bg-surface-container-high h-[80%] rounded-t-sm"></div>
                <div className="w-1/6 bg-surface-container-high h-[75%] rounded-t-sm"></div>
                <div className="w-1/6 bg-surface-container-high h-[90%] rounded-t-sm"></div>
                <div className="w-1/6 bg-outline-variant h-[60%] rounded-t-sm"></div>
                <div className="w-1/6 bg-surface-container-high h-[50%] rounded-t-sm"></div>
                <div className="w-1/6 bg-surface-container-high h-[40%] rounded-t-sm"></div>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-sm text-right">-5% vs last week</p>
            </div>
          </div>

          {/* Editorial Reflection Block */}
          <div className="bg-surface-container-low rounded-lg p-lg md:p-xl border-l-4 border-secondary mt-sm">
            <p className="font-headline-md text-headline-md text-primary italic mb-md">"The quality of your attention determines the quality of your reality."</p>
            <p className="font-body-md text-body-md text-on-surface-variant">Your ratio of deep focus to shallow admin has reached an optimal threshold. Maintaining this balance ensures sustainable cognitive energy throughout the week.</p>
          </div>
        </section>

        {/* Local Brain Status - Asymmetric Sidebar Style */}
        <section className="md:col-span-4 flex flex-col gap-lg">
          <h2 className="font-headline-md text-headline-md text-primary border-b border-surface-variant pb-sm">Local Brain</h2>
          <div className="bg-surface-container-lowest rounded-lg p-lg card-shadow flex flex-col gap-md">
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>memory</span>
              </div>
              <div>
                <h3 className="font-label-md text-label-md text-primary">Core Model Status</h3>
                <p className="font-label-sm text-label-sm text-secondary flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-secondary inline-block"></span> Optimal Health</p>
              </div>
            </div>
            <div className="space-y-sm mt-sm">
              <div className="flex justify-between items-center font-label-md text-label-md">
                <span className="text-on-surface-variant">Data Sovereignty</span>
                <span className="text-primary font-semibold">100% Local</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-full rounded-full"></div>
              </div>
            </div>
            <div className="space-y-sm">
              <div className="flex justify-between items-center font-label-md text-label-md">
                <span className="text-on-surface-variant">Memory Indexed</span>
                <span className="text-primary font-semibold">14,204 Nodes</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary-container h-full w-[85%] rounded-full"></div>
              </div>
            </div>
            <button className="mt-md w-full py-sm px-md rounded-lg bg-surface border border-outline text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center justify-center gap-sm">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>sync</span> Force Sync
            </button>
          </div>

          <div className="bg-tertiary-container text-on-tertiary rounded-lg p-lg mt-auto shadow-lg relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 0" }}>security</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-xs relative z-10">Vault Locked</h3>
            <p className="font-body-md text-body-md text-on-tertiary-container relative z-10 mb-md">All reflections are encrypted locally. Zero cloud exposure.</p>
            <a className="inline-flex items-center gap-xs text-secondary-fixed font-label-md text-label-md hover:opacity-80 transition-opacity relative z-10" href="#">
              Review Security Settings <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
