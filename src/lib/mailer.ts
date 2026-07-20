import { Resend } from "resend";

export interface RegistrationPayload {
  nombre: string;
  telefono: string;
  perfil: string;
  equipo: string;
  asistencia: string;
}

export async function sendRegistrationEmail(payload: RegistrationPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY no configurada, se omite el envío de email.");
    return;
  }

  const resend = new Resend(apiKey);
  const to = process.env.RESEND_TO_EMAIL || "loretoconsultora@gmail.com";

  await resend.emails.send({
    from: "Electronic Point <onboarding@resend.dev>",
    to,
    subject: `Nueva inscripción al taller: ${payload.nombre}`,
    html: `
      <h2>Nueva inscripción — Taller de Creación de Contenido</h2>
      <p><strong>Nombre:</strong> ${payload.nombre}</p>
      <p><strong>Teléfono:</strong> ${payload.telefono}</p>
      <p><strong>Perfil:</strong> ${payload.perfil}</p>
      <p><strong>Equipo actual:</strong> ${payload.equipo}</p>
      <p><strong>Confirma asistencia:</strong> ${payload.asistencia}</p>
    `,
  });
}
