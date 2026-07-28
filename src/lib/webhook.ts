export interface RegistrationPayload {
  nombre: string;
  telefono: string;
  perfil: string;
  equipo: string;
  asistencia: string;
  utm_source?: string;
  utm_campaign?: string;
}

export async function sendRegistrationWebhook(payload: RegistrationPayload) {
  const webhookUrl = process.env.REGISTRATION_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn(
      "REGISTRATION_WEBHOOK_URL no configurada, se omite el envío al webhook."
    );
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`El webhook respondió con status ${response.status}`);
  }
}
