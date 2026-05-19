import { useState, useRef } from 'react';
import { useJournal } from '../hooks/useJournal';
import TimelineItem from '../components/SortableTimelineItem';

export default function LivingDay() {
  const { timelineEvents, reorderTimeline } = useJournal();
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const dragIndexRef = useRef(null);

  const handleDragStart = (e, index) => {
    dragIndexRef.current = index;
    e.dataTransfer.effectAllowed = 'move';
    // Make the drag image slightly transparent
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragIndexRef.current !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = dragIndexRef.current;
    if (dragIndex !== null && dragIndex !== dropIndex) {
      reorderTimeline(dragIndex, dropIndex);
    }
    dragIndexRef.current = null;
    setDragOverIndex(null);
    // Restore opacity
    document.querySelectorAll('[draggable]').forEach(el => {
      el.style.opacity = '';
    });
  };

  const handleDragEnd = () => {
    dragIndexRef.current = null;
    setDragOverIndex(null);
    document.querySelectorAll('[draggable]').forEach(el => {
      el.style.opacity = '';
    });
  };

  return (
    <div className="w-full flex flex-col items-center pt-[100px] md:pt-0 max-w-container-max mx-auto px-gutter md:px-xxl py-xl md:py-xxl">
      {/* Header */}
      <div className="w-full max-w-2xl text-center mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">Living Day</h2>
        <p className="font-body-md text-on-surface-variant">Wednesday, October 25th</p>
        <p className="font-label-sm text-label-sm text-secondary mt-sm">
          <span className="material-symbols-outlined text-[14px] align-middle mr-1">drag_indicator</span>
          Drag tasks to reschedule your day
        </p>
      </div>

      {/* Timeline Container */}
      <div className="w-full max-w-2xl relative" onDragEnd={handleDragEnd}>
        {/* Continuous Vertical Line */}
        <div className="absolute left-[80px] top-0 bottom-0 w-[1px] bg-surface-tint opacity-20 hidden sm:block" />

        {timelineEvents.map((event, index) => (
          <TimelineItem
            key={event.id}
            event={event}
            index={index}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            isDragOver={dragOverIndex === index}
          />
        ))}
      </div>
    </div>
  );
}
