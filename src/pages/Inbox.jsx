

export default function Inbox() {
  return (
    <div className="lg:col-span-7">
      <section>
        <div className="flex justify-between items-end mb-md border-b border-surface-variant pb-sm">
          <div className="flex items-center gap-sm text-on-surface-variant">
            <span className="material-symbols-outlined">inbox</span>
            <h3 className="font-label-md text-label-md uppercase tracking-wider">Inbox</h3>
          </div>
          <button className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors">Sort by Oldest</button>
        </div>
        <div className="space-y-md">
          {/* Inbox Item 1 */}
          <div className="bg-surface-container-lowest shadow-ambient-1 rounded-xl p-md flex gap-md items-start group hover:shadow-ambient-2 transition-shadow">
            <button className="w-5 h-5 rounded-full border border-outline mt-1 flex-shrink-0 hover:border-secondary transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"></button>
            <div className="flex-1">
              <p className="font-body-md text-body-md text-primary">Need to pick up dry cleaning before 6 PM today.</p>
              <div className="flex gap-md mt-sm text-label-sm font-label-sm text-on-surface-variant">
                <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">schedule</span> 2 hrs ago</span>
                <span className="flex items-center gap-xs px-2 py-0.5 bg-surface-variant rounded-md">Errands</span>
              </div>
            </div>
          </div>
          {/* Inbox Item 2 */}
          <div className="bg-surface-container-lowest shadow-ambient-1 rounded-xl p-md flex gap-md items-start group hover:shadow-ambient-2 transition-shadow">
            <button className="w-5 h-5 rounded-full border border-outline mt-1 flex-shrink-0 hover:border-secondary transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"></button>
            <div className="flex-1">
              <p className="font-body-md text-body-md text-primary">Idea: Use the sage green color from the new palette for the primary action buttons on the marketing site.</p>
              <div className="flex gap-md mt-sm text-label-sm font-label-sm text-on-surface-variant">
                <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">schedule</span> 5 hrs ago</span>
                <span className="flex items-center gap-xs px-2 py-0.5 bg-secondary-container/30 text-secondary rounded-md">Design</span>
              </div>
            </div>
          </div>
          {/* Inbox Item 3 */}
          <div className="bg-surface-container-lowest shadow-ambient-1 rounded-xl p-md flex gap-md items-start group hover:shadow-ambient-2 transition-shadow">
            <button className="w-5 h-5 rounded-full border border-outline mt-1 flex-shrink-0 hover:border-secondary transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"></button>
            <div className="flex-1">
              <p className="font-body-md text-body-md text-primary">Call Mom.</p>
              <div className="flex gap-md mt-sm text-label-sm font-label-sm text-on-surface-variant">
                <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">schedule</span> Yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
