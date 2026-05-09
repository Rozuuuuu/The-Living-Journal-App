import React, { useRef, useState } from 'react';

export default function TimelineItem({ event, index, onDragStart, onDragOver, onDrop, isDragOver }) {
  const isCompleted = event.status === 'completed';
  const isCurrent = event.status === 'current';

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={(e) => onDrop(e, index)}
      className={`flex flex-col sm:flex-row relative mb-lg group transition-all duration-200 ${
        isCompleted ? 'opacity-60' : ''
      } ${isDragOver ? 'transform translate-y-1' : ''}`}
    >
      {/* Time Column */}
      <div className="sm:w-[80px] flex-shrink-0 pt-sm sm:pr-md text-left sm:text-right mb-sm sm:mb-0">
        <span className={`font-headline-md text-[18px] ${isCurrent ? 'text-primary' : 'text-on-surface-variant'}`}>
          {event.time}
        </span>
        <span className={`font-label-sm uppercase ml-1 ${isCurrent ? 'text-primary' : 'text-on-surface-variant'}`}>
          {event.period}
        </span>
      </div>

      {/* Timeline Node */}
      <div className={`hidden sm:flex absolute left-[80px] top-[14px] -translate-x-1/2 w-3 h-3 rounded-full border-2 border-surface z-10 transition-colors ${
        isCompleted
          ? 'bg-surface-variant'
          : isCurrent
          ? 'bg-secondary'
          : 'bg-surface-variant group-hover:bg-primary'
      }`} />

      {/* Card */}
      <div className="flex-1 sm:pl-xl relative">
        <div className={`bg-surface-container-lowest rounded-lg p-md border transition-all ${
          isCurrent
            ? 'shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-secondary/30'
            : 'shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
        } ${isDragOver ? 'border-secondary/40 shadow-[0_8px_30px_rgba(0,0,0,0.10)]' : ''}`}>

          {/* Drag Handle */}
          <div className="drag-handle absolute top-md left-md" title="Drag to reorder">
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">drag_indicator</span>
          </div>

          {/* Current event dot */}
          {isCurrent && (
            <div className="absolute top-md right-md w-2 h-2 rounded-full bg-secondary" />
          )}

          <div className="flex items-start">
            {event.icon && (
              <span className={`material-symbols-outlined mr-sm ${event.isAI ? 'text-secondary' : 'text-on-surface-variant'}`}>
                {event.icon}
              </span>
            )}
            <div className="flex-1">
              {event.isAI && event.aiLabel && (
                <p className="font-label-sm text-secondary mb-xs tracking-wider uppercase">{event.aiLabel}</p>
              )}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`${isCurrent && event.isAI ? 'font-headline-md text-[20px]' : 'font-label-md'} text-on-surface ${isCompleted ? 'line-through' : ''}`}>
                    {event.title}
                  </h3>
                  <p className={`font-body-md text-[14px] text-on-surface-variant mt-xs ${isCompleted ? 'line-through' : ''} ${isCurrent && event.isAI ? 'mb-md' : ''}`}>
                    {event.subtitle}
                  </p>
                </div>
                {isCompleted && (
                  <span className="material-symbols-outlined text-secondary ml-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                )}
              </div>
              {isCurrent && event.isAI && (
                <button className="bg-primary-container text-on-primary-container font-label-md px-md py-sm rounded-DEFAULT hover:opacity-80 transition-opacity">
                  Start Session
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
