import { useState, useRef } from 'react';
import { useJournal } from '../hooks/useJournal';
import { processBrainDump, isWebhookConfigured } from '../services/n8nService';

export default function BrainDump() {
  const { captureTask, lastCaptured, tasks, setIsAgentActive, addDecisionReceipt } = useJournal();
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState(null);
  const textareaRef = useRef(null);

  const handleCapture = async () => {
    if (!inputText.trim() || isThinking) return;
    setError(null);

    // Graceful fallback: no webhook → local-only capture
    if (!isWebhookConfigured()) {
      captureTask(inputText);
      setInputText('');
      textareaRef.current?.focus();
      return;
    }

    // n8n-powered capture
    setIsThinking(true);
    setIsAgentActive(true);

    try {
      const result = await processBrainDump(inputText);
      const taskText = result.task || inputText.trim();
      const meta = {
        category: result.category || 'Uncategorized',
        priority: result.priority || 'medium',
        rationale: result.rationale || '',
      };

      captureTask(taskText, meta);
      addDecisionReceipt({ task: taskText, ...meta });
      setInputText('');
      textareaRef.current?.focus();
    } catch (err) {
      setError(err.message || 'Failed to process with n8n. Task saved locally.');
      // Fallback: save locally even on error
      captureTask(inputText);
      setInputText('');
    } finally {
      setIsThinking(false);
      setIsAgentActive(false);
    }
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
        <div className={`bg-surface-container-lowest shadow-ambient-1 rounded-lg p-lg relative group transition-all duration-300 focus-within:shadow-ambient-2 ${isThinking ? 'ring-2 ring-[#9CAF88]/40' : ''}`}>
          <textarea
            ref={textareaRef}
            className="w-full bg-transparent border-0 focus:ring-0 resize-none font-body-lg text-body-lg text-primary placeholder:text-on-surface-variant/50 p-0 outline-none"
            placeholder="What's on your mind?"
            rows="4"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isThinking}
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
              disabled={!inputText.trim() || isThinking}
              className="bg-primary-container text-on-primary hover:opacity-90 px-lg py-sm rounded-lg font-label-md text-label-md transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-sm min-w-[100px] justify-center"
            >
              {isThinking ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  <span>Thinking…</span>
                </>
              ) : (
                'Capture'
              )}
            </button>
          </div>
        </div>

        {/* Inline Error */}
        {error && (
          <div className="mt-sm flex items-center gap-sm px-md py-sm rounded-lg bg-red-50 border border-red-200/60 text-red-700">
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span className="font-label-sm text-label-sm">{error}</span>
            <button onClick={() => setError(null)} className="ml-auto text-red-400 hover:text-red-600 transition-colors">
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        )}

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
