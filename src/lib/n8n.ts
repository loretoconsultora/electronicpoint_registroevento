import type { RegistrationPayload } from "./mailer";

export async function sendRegistrationToN8n(payload: RegistrationPayload) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("N8N_WEBHOOK_URL no configurada, se omite el envío a n8n.");
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`n8n respondió con status ${response.status}`);
  }
}
