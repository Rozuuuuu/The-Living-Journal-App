import React, { useState, useRef } from 'react';
import { useJournal } from '../hooks/useJournal';

export default function BrainDump() {
  const { captureTask, lastCaptured, tasks } = useJournal();
  const [inputText, setInputText] = useState('');
  const textareaRef = useRef(null);

  const handleCapture = () => {
    if (!inputText.trim()) return;
    captureTask(inputText);
    setInputText('');
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCapture();
    }
  };

  const activeTasks = tasks.filter(t => t.status === 'active');

  return (
    <section className="mb-xxl">
      <div className="flex items-baseline justify-between mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-primary">Brain Dump</h2>
        {activeTasks.length > 0 && (
          <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-md py-xs rounded-full">
            {activeTasks.length} active
          </span>
        )}
      </div>

      <div className="relative">
        <div className="bg-surface-container-lowest shadow-ambient-1 rounded-lg p-lg relative group transition-all duration-300 focus-within:shadow-ambient-2">
          <textarea
            ref={textareaRef}
            className="w-full bg-transparent border-0 focus:ring-0 resize-none font-body-lg text-body-lg text-primary placeholder:text-on-surface-variant/50 p-0 outline-none"
            placeholder="What's on your mind?"
            rows="4"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="flex justify-between items-center mt-md pt-sm border-t border-surface-variant/50">
            <div className="flex gap-sm text-on-surface-variant">
              <button className="p-2 hover:text-secondary hover:bg-secondary-container/30 rounded-full transition-colors">
                <span className="material-symbols-outlined text-xl">attach_file</span>
              </button>
              <button className="p-2 hover:text-secondary hover:bg-secondary-container/30 rounded-full transition-colors">
                <span className="material-symbols-outlined text-xl">calendar_today</span>
              </button>
            </div>
            <button
              onClick={handleCapture}
              disabled={!inputText.trim()}
              className="bg-primary-container text-on-primary hover:opacity-90 px-lg py-sm rounded-lg font-label-md text-label-md transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Capture
            </button>
          </div>
        </div>

        {/* Task Captured Toast */}
        {lastCaptured && (
          <div className="task-captured-toast absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-sm bg-secondary-container text-on-secondary-container px-lg py-sm rounded-full shadow-ambient-2 whitespace-nowrap">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-label-md text-label-md">Task Captured</span>
          </div>
        )}
      </div>
    </section>
  );
}
