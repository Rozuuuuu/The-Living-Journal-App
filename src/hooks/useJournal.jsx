import React, { createContext, useContext, useState, useCallback } from 'react';

const JournalContext = createContext(null);

const INITIAL_TASKS = [
  { id: 't1', text: 'Research cognitive mapping frameworks', status: 'active', createdAt: Date.now() - 3600000 },
  { id: 't2', text: 'Draft editorial strategy document', status: 'active', createdAt: Date.now() - 7200000 },
  { id: 't3', text: 'Review quarterly analytics report', status: 'completed', createdAt: Date.now() - 86400000 },
];

const INITIAL_AGENTS = [
  { id: 'a1', name: 'Primary Research Assistant', status: 'active', progress: 72, task: 'Editorial Strategy Review' },
  { id: 'a2', name: 'Schedule Optimizer', status: 'active', progress: 45, task: 'Reorganizing Thursday block' },
  { id: 'a3', name: 'Inbox Triage', status: 'idle', progress: 100, task: 'All caught up' },
  { id: 'a4', name: 'Ambient Monitor', status: 'active', progress: 88, task: 'Tracking focus patterns' },
];

const INITIAL_TIMELINE = [
  {
    id: 'e1',
    time: '9:00',
    period: 'AM',
    title: 'Team Meeting: Quarterly Review',
    subtitle: 'Conference Room B',
    status: 'completed',
    isAI: false,
    icon: 'groups',
  },
  {
    id: 'e2',
    time: '10:30',
    period: 'AM',
    title: 'Focus Session: Project Alpha',
    subtitle: 'Deep work block allocated based on your energy levels. Silence notifications.',
    status: 'current',
    isAI: true,
    aiLabel: 'AI Scheduled Focus',
    icon: 'smart_toy',
  },
  {
    id: 'e3',
    time: '1:00',
    period: 'PM',
    title: 'Lunch Break & Walk',
    subtitle: 'Disconnect and recharge.',
    status: 'upcoming',
    isAI: false,
    icon: 'restaurant',
  },
  {
    id: 'e4',
    time: '3:15',
    period: 'PM',
    title: 'Review Draft Proposals',
    subtitle: 'Estimated 45 mins. High priority for tomorrow\'s deadline.',
    status: 'upcoming',
    isAI: true,
    aiLabel: 'AI Suggested',
    icon: 'smart_toy',
  },
];

function arrayMove(arr, fromIndex, toIndex) {
  const result = [...arr];
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
}

export function JournalProvider({ children }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [agents] = useState(INITIAL_AGENTS);
  const [timelineEvents, setTimelineEvents] = useState(INITIAL_TIMELINE);
  const [isListening, setIsListening] = useState(false);
  const [lastCaptured, setLastCaptured] = useState(null);

  // Derive agentPulseActive from whether any agent is active
  const agentPulseActive = agents.some(a => a.status === 'active');

  const captureTask = useCallback((text) => {
    if (!text.trim()) return;
    const newTask = {
      id: `t${Date.now()}`,
      text: text.trim(),
      status: 'active',
      createdAt: Date.now(),
    };
    setTasks(prev => [newTask, ...prev]);
    setLastCaptured(newTask.id);
    // Auto-clear the "captured" feedback after 2s
    setTimeout(() => setLastCaptured(null), 2000);
  }, []);

  const reorderTimeline = useCallback((oldIndex, newIndex) => {
    setTimelineEvents(prev => arrayMove(prev, oldIndex, newIndex));
  }, []);

  const toggleListening = useCallback(() => {
    setIsListening(prev => !prev);
  }, []);

  const value = {
    tasks,
    agents,
    timelineEvents,
    isListening,
    agentPulseActive,
    lastCaptured,
    captureTask,
    reorderTimeline,
    toggleListening,
  };

  return (
    <JournalContext.Provider value={value}>
      {children}
    </JournalContext.Provider>
  );
}

export function useJournal() {
  const ctx = useContext(JournalContext);
  if (!ctx) throw new Error('useJournal must be used within a JournalProvider');
  return ctx;
}
