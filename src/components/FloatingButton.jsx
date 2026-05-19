
import { useJournal } from '../hooks/useJournal';

export default function FloatingButton() {
  const { isListening, toggleListening } = useJournal();

  return (
    <button
      onClick={toggleListening}
      className={`fixed bottom-24 md:bottom-xl right-lg md:right-xl w-14 h-14 rounded-full shadow-ambient-2 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 z-50 ${
        isListening
          ? 'listening-active text-white'
          : 'bg-secondary text-on-secondary hover:opacity-90'
      }`}
      aria-label={isListening ? 'Stop listening' : 'Start voice capture'}
    >
      {/* Listening animation rings */}
      {isListening && (
        <>
          <span className="listening-ring" />
          <span className="listening-ring listening-ring-delay" />
        </>
      )}
      <span
        className="material-symbols-outlined relative z-10"
        style={{ fontVariationSettings: `'FILL' ${isListening ? 1 : 1}` }}
      >
        mic
      </span>
    </button>
  );
}
