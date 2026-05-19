/**
 * src/services/agentService.js
 * Standard Dependencies: None (Uses native fetch API)
 */

export const triggerAgentGoal = async (userInput) => {
  // Local endpoint for the OpenClaw autonomous agent
  const OPENCLAW_ENDPOINT = 'http://localhost:8000/execute';

  try {
    const response = await fetch(OPENCLAW_ENDPOINT, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Agent-Protocol': 'AG-UI/1.0' // 2026 standard for agentic UI communication
      },
      body: JSON.stringify({
        goal: userInput,
        context: {
          platform: 'Sage-Flow-Journal',
          timestamp: new Date().toISOString(),
          capabilities: ['task-parsing', 'priority-reasoning', 'autonomous-planning']
        }
      }),
    });

    if (!response.ok) throw new Error('AGENT_OFFLINE');

    const data = await response.json();

    // Map OpenClaw's dynamic reasoning output to the Sage Flow Task Schema
    return {
      success: true,
      task: {
        title: data.final_result?.title || userInput,
        dueDate: data.final_result?.dueDate || null,
        priority: data.final_result?.priority || 4,
        rationale: data.execution_summary || 'Goal captured autonomously.'
      },
      logs: data.logs || [`Action completed at ${new Date().toLocaleTimeString()}`]
    };
  } catch (error) {
    console.error("OpenClaw Execution Failed:", error);
    return { 
      success: false, 
      task: { title: userInput, priority: 4 },
      logs: ['Error: Local agent is unreachable. Check if OpenClaw is running on port 8000.']
    };
  }
};
