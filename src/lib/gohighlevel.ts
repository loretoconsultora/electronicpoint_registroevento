import type { RegistrationPayload } from "./webhook";

function splitName(nombre: string) {
  const [firstName, ...rest] = nombre.trim().split(/\s+/);
  return { firstName: firstName ?? "", lastName: rest.join(" ") };
}

export async function sendGoHighLevelLead(payload: RegistrationPayload) {
  const webhookUrl = process.env.GOHIGHLEVEL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn(
      "GOHIGHLEVEL_WEBHOOK_URL no configurada, se omite el envío a GoHighLevel."
    );
    return;
  }

  const { firstName, lastName } = splitName(payload.nombre);

  const body = {
    firstName,
    lastName,
    phone: payload.telefono,
    tags: ["Lead", "TallerContenido"],
    source: "Landing Taller",
    perfil: payload.perfil,
    equipoActual: payload.equipo,
    confirmaAsistencia: payload.asistencia,
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`GoHighLevel respondió con status ${response.status}`);
  }
}
