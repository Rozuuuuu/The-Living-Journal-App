/**
 * n8n Service Layer
 * Sends Brain Dump text to the local n8n webhook for AI-powered task structuring.
 * Includes the current ISO timestamp in the payload to anchor AI date reasoning.
 */

const WEBHOOK_STORAGE_KEY = 'n8n_webhook_url';

/**
 * Retrieves the n8n webhook URL from localStorage.
 * @returns {string|null} The stored webhook URL or null if not configured.
 */
export function getWebhookUrl() {
  return localStorage.getItem(WEBHOOK_STORAGE_KEY);
}

/**
 * Checks whether the n8n webhook URL has been configured.
 * @returns {boolean}
 */
export function isWebhookConfigured() {
  const url = getWebhookUrl();
  return Boolean(url && url.trim());
}

/**
 * Sends unstructured Brain Dump text to the n8n webhook for processing.
 * 
 * @param {string} text - The raw brain dump text from the user.
 * @returns {Promise<{task: string, category: string, priority: string, rationale: string}>}
 *   Structured task data returned by the n8n workflow.
 * @throws {Error} If the webhook URL is not configured or the request fails.
 */
export async function processBrainDump(text) {
  const webhookUrl = getWebhookUrl();

  if (!webhookUrl || !webhookUrl.trim()) {
    throw new Error('n8n webhook URL is not configured. Set it in Settings → System Connectors.');
  }

  const payload = {
    text: text.trim(),
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(webhookUrl.trim(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`n8n returned status ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
