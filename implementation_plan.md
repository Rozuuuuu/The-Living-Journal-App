# Agentic Connectivity Layer — n8n Integration

Wire the Brain Dump input to a live n8n webhook so the AI can parse unstructured thoughts into structured tasks with rationale, displayed as Decision Receipts in Mission Control.

## Proposed Changes

### Task 1 — n8n Service Layer

#### [NEW] [n8nService.js](file:///c:/Users/Lloyd/OneDrive/Desktop/Todoapp/src/services/n8nService.js)

Create `src/services/n8nService.js` with a single async export:

```js
export async function processBrainDump(text)
```

- Reads `n8n_webhook_url` from `localStorage` (set in Settings).
- `POST`s JSON `{ text, timestamp: new Date().toISOString() }` to the webhook.
- Returns the parsed JSON response from n8n (expected shape below).
- Throws a descriptive error if the URL is missing or the request fails.

**Expected n8n response shape** (the n8n workflow you build should return this):

```json
{
  "task": "Pick up dry cleaning",
  "category": "Errands",
  "priority": "medium",
  "rationale": "Time-sensitive — store closes at 6 PM today."
}
```

---

### Task 2 — Global State & Agent Pulse

#### [MODIFY] [useJournal.jsx](file:///c:/Users/Lloyd/OneDrive/Desktop/Todoapp/src/hooks/useJournal.jsx)

- Add `isAgentActive` / `setIsAgentActive` state (`useState(false)`).
- Change `agentPulseActive` derivation to: `isAgentActive || agents.some(a => a.status === 'active')` — so it also fires when the n8n call is in flight.
- Add a `decisionReceipts` / `setDecisionReceipts` state (initialised from `localStorage` key `decision_receipts`, defaulting to `[]`).
- Add helper `addDecisionReceipt(receipt)` that prepends to the list and persists to `localStorage`.
- Expose `isAgentActive`, `setIsAgentActive`, `decisionReceipts`, `addDecisionReceipt` in the context value.

#### [MODIFY] [Sidebar.jsx](file:///c:/Users/Lloyd/OneDrive/Desktop/Todoapp/src/components/Sidebar.jsx)

No code changes needed — Sidebar already reads `agentPulseActive` and renders the pulse dot. Because `agentPulseActive` will now also reflect `isAgentActive`, the pulse will automatically fire during n8n calls.

---

### Task 3 — Brain Dump Interaction

#### [MODIFY] [BrainDump.jsx](file:///c:/Users/Lloyd/OneDrive/Desktop/Todoapp/src/components/BrainDump.jsx)

Update `handleCapture` to:

1. Set `isAgentActive(true)` → triggers Sidebar pulse.
2. Call `processBrainDump(inputText)`.
3. On success: save the task (including `rationale`) via `captureTask`, call `addDecisionReceipt`, clear input.
4. On failure: show a subtle inline error message below the textarea (sage-red tint, no jarring alerts).
5. Finally: set `isAgentActive(false)`.
6. Add a "thinking" state indicator on the Capture button (spinner icon replaces text while waiting).
7. **Graceful fallback**: if no webhook URL is configured, fall back to the existing local-only `captureTask` behaviour so the app remains usable without n8n.

#### [MODIFY] [useJournal.jsx](file:///c:/Users/Lloyd/OneDrive/Desktop/Todoapp/src/hooks/useJournal.jsx)

Update `captureTask` to accept an optional second argument `meta` (`{ category, priority, rationale }`) and merge it into the new task object.

---

### Task 4 — Mission Control Decision Receipts

#### [MODIFY] [ActiveAgents.jsx](file:///c:/Users/Lloyd/OneDrive/Desktop/Todoapp/src/pages/ActiveAgents.jsx)

Add a new **"Decision Receipts"** section below the existing bento grid:

- Section header with `receipt_long` Material Symbol icon, label "Decision Receipts", and "Recent AI rationale for tasks created from your Brain Dump."
- Renders `decisionReceipts` from `useJournal()`.
- Each receipt card shows:
  - Task text (headline)
  - Category pill + priority indicator
  - Rationale text (body, slightly muted)
  - Timestamp (relative, e.g. "2 min ago")
- Empty state: a calm message "No decisions yet — dump a thought to get started."
- Uses Editorial Calm styling: `surface-container-lowest` cards, `shadow-ambient-1`, `rounded-xl`, sage accents.

---

### Task 5 — Settings Webhook URL Input

#### [MODIFY] [Settings.jsx](file:///c:/Users/Lloyd/OneDrive/Desktop/Todoapp/src/pages/Settings.jsx)

Add a text input field beneath the n8n Workflows connector card for the user to paste and save their n8n webhook URL to `localStorage` key `n8n_webhook_url`. Uses the `input-editorial` class already defined in `index.css`.

---

## Open Questions

> [!IMPORTANT]
> **n8n Workflow**: This implementation assumes you have (or will build) an n8n workflow with a **Webhook** trigger node that accepts the POST payload and returns the structured JSON above. Do you already have this workflow set up, or would you like guidance on building it?

> [!NOTE]
> **Inbox.jsx vs BrainDump.jsx**: Your request mentions wiring the Enter key in `Inbox.jsx`, but the actual Brain Dump text input lives in `BrainDump.jsx`. The `Inbox.jsx` component is a static display list. I'll wire the n8n call into `BrainDump.jsx` (where the Enter key handler already exists). Let me know if you intended something different.

## Verification Plan

### Manual Verification
1. Open Settings → paste an n8n webhook URL → verify it persists on refresh.
2. Type a thought in Brain Dump → press Enter → confirm the sage pulse animates in Sidebar/MobileNav, the Capture button shows a spinner, and the task appears in the Inbox after the n8n response.
3. Navigate to Mission Control → confirm the Decision Receipt with rationale is visible.
4. Test fallback: remove the webhook URL → dump a thought → confirm it captures locally without errors.
5. Test error: set an invalid URL → dump a thought → confirm an inline error appears and the pulse stops.
