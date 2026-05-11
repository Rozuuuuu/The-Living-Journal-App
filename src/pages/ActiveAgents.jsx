import React from 'react';
import { useJournal } from '../hooks/useJournal';

function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

const PRIORITY_STYLES = {
  high: 'bg-red-50 text-red-700 border-red-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  low: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export default function ActiveAgents() {
  const { decisionReceipts } = useJournal();

  return (
    <div className="flex-1 w-full max-w-container-max mx-auto px-lg md:px-xxl py-xl md:py-xxl pb-32 md:pb-xxl">
      {/* Page Header */}
      <header className="mb-xxl">
        <h1 className="font-display-lg text-display-lg text-primary">Active Agents</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm max-w-2xl">Mission Control view for your automated workflows and cognitive offloading tasks.</p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
        {/* Primary Agent Card: Research Assistant */}
        <article className="md:col-span-8 bg-surface-container-lowest rounded-xl p-xl flex flex-col gap-lg shadow-[0_4px_20px_rgba(45,45,45,0.04)]">
          <header className="flex justify-between items-start">
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-primary">Research Assistant</h2>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Deep Dive Mode</p>
              </div>
            </div>
            <span className="px-md py-xs border border-secondary text-secondary font-label-sm text-label-sm rounded-full">Processing</span>
          </header>
          <div className="py-md">
            <p className="font-body-lg text-body-lg text-on-surface">Compiling primary sources and synthesizing literature on cognitive load theory application within minimalist digital interfaces.</p>
          </div>
          <div className="mt-auto pt-md border-t border-surface-variant">
            <div className="flex justify-between font-label-sm text-label-sm mb-sm text-on-surface-variant">
              <span>Phase 2: Source Synthesis</span>
              <span>65% Complete</span>
            </div>
            <div className="w-full bg-surface-variant rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
            </div>
          </div>
        </article>

        {/* Secondary Agent Card: Schedule Optimizer */}
        <article className="md:col-span-4 bg-surface-container-lowest rounded-xl p-xl flex flex-col gap-lg shadow-[0_4px_20px_rgba(45,45,45,0.04)]">
          <header className="flex items-center gap-md">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">calendar_today</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary">Schedule Optimizer</h2>
          </header>
          <div className="py-sm">
            <p className="font-body-md text-body-md text-on-surface-variant">Rescheduling afternoon time blocks to accommodate an extended deep work session initiated at 10:00 AM.</p>
          </div>
          <div className="mt-auto pt-md">
            <div className="flex items-center gap-sm text-secondary font-label-md text-label-md bg-secondary-container/30 px-md py-sm rounded-lg w-fit">
              <span className="material-symbols-outlined text-[18px]">sync</span>
              <span>Calibrating Calendar...</span>
            </div>
          </div>
        </article>

        {/* Tertiary Agent Card: Inbox Triage */}
        <article className="md:col-span-6 bg-surface-container-lowest rounded-xl p-xl flex flex-col gap-lg shadow-[0_4px_20px_rgba(45,45,45,0.04)]">
          <header className="flex items-center gap-md">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary">Inbox Triage</h2>
          </header>
          <div className="py-sm">
            <p className="font-body-md text-body-md text-on-surface-variant">Sorting incoming communications. 12 items archived, 3 flagged for evening review.</p>
          </div>
          <div className="mt-auto pt-md flex gap-md">
            <button className="px-lg py-sm bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">Review Flagged</button>
          </div>
        </article>

        {/* Tertiary Agent Card: Ambient Monitor */}
        <article className="md:col-span-6 bg-surface-container-lowest rounded-xl p-xl flex flex-col gap-lg shadow-[0_4px_20px_rgba(45,45,45,0.04)]">
          <header className="flex justify-between items-start">
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">sensors</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">Ambient Monitor</h2>
            </div>
            <span className="w-3 h-3 rounded-full bg-secondary"></span>
          </header>
          <div className="py-sm">
            <p className="font-body-md text-body-md text-on-surface-variant">System baseline nominal. No cognitive overload detected in recent interaction patterns.</p>
          </div>
        </article>
      </div>

      {/* ===== Decision Receipts ===== */}
      <section className="mt-xxl">
        <div className="flex items-center gap-sm mb-xl">
          <span className="material-symbols-outlined text-secondary text-2xl">receipt_long</span>
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">Decision Receipts</h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Recent AI rationale for tasks created from your Brain Dump.</p>
          </div>
        </div>

        {decisionReceipts.length === 0 ? (
          <div className="bg-surface-container-lowest shadow-ambient-1 rounded-xl p-xl text-center">
            <span className="material-symbols-outlined text-[48px] text-on-surface-variant/30 mb-md block">psychology</span>
            <p className="font-body-lg text-body-lg text-on-surface-variant/60">No decisions yet — dump a thought to get started.</p>
          </div>
        ) : (
          <div className="space-y-md">
            {decisionReceipts.map((receipt) => (
              <article
                key={receipt.id}
                className="bg-surface-container-lowest shadow-ambient-1 rounded-xl p-lg border-l-4 border-[#9CAF88] hover:shadow-ambient-2 transition-shadow"
              >
                <div className="flex items-start justify-between mb-sm">
                  <h3 className="font-headline-md text-headline-md text-primary flex-1">{receipt.task}</h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant ml-md whitespace-nowrap flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    {timeAgo(receipt.receivedAt)}
                  </span>
                </div>
                <div className="flex items-center gap-sm mb-md">
                  {receipt.category && (
                    <span className="px-md py-xs bg-secondary-container/30 text-secondary font-label-sm text-label-sm rounded-lg">
                      {receipt.category}
                    </span>
                  )}
                  {receipt.priority && (
                    <span className={`px-md py-xs font-label-sm text-label-sm rounded-lg border ${PRIORITY_STYLES[receipt.priority] || PRIORITY_STYLES.medium}`}>
                      {receipt.priority.charAt(0).toUpperCase() + receipt.priority.slice(1)}
                    </span>
                  )}
                </div>
                {receipt.rationale && (
                  <div className="flex items-start gap-sm pt-sm border-t border-surface-variant/50">
                    <span className="material-symbols-outlined text-[18px] text-[#9CAF88] mt-0.5 flex-shrink-0">neurology</span>
                    <p className="font-body-md text-body-md text-on-surface-variant italic">{receipt.rationale}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
