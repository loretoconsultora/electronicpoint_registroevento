import { NextRequest, NextResponse } from "next/server";
import { sendRegistrationWebhook } from "@/lib/webhook";
import { sendGoHighLevelLead } from "@/lib/gohighlevel";

const PERFIL_OPTIONS = [
  "Creador de Contenido",
  "Emprendedor",
  "Marketing",
  "Uso personal",
];

const EQUIPO_OPTIONS = [
  "Cámara profesional",
  "Teléfono y me gusta cómo queda",
  "Teléfono y creo que podría quedar mejor",
];

const ASISTENCIA_OPTIONS = ["Sí, claro", "No estoy segur@"];

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const website = typeof body.website === "string" ? body.website : "";
  if (website.trim().length > 0) {
    // Honeypot field filled in by a bot: pretend success without doing anything.
    return NextResponse.json({ ok: true });
  }

  const nombre = typeof body.nombre === "string" ? body.nombre.trim() : "";
  const telefono = typeof body.telefono === "string" ? body.telefono.trim() : "";
  const perfil = typeof body.perfil === "string" ? body.perfil : "";
  const equipo = typeof body.equipo === "string" ? body.equipo : "";
  const asistencia = typeof body.asistencia === "string" ? body.asistencia : "";

  if (nombre.length < 2 || telefono.length < 6) {
    return NextResponse.json(
      { error: "Completá tu nombre y teléfono." },
      { status: 400 }
    );
  }

  if (!PERFIL_OPTIONS.includes(perfil)) {
    return NextResponse.json({ error: "Perfil inválido." }, { status: 400 });
  }

  if (!EQUIPO_OPTIONS.includes(equipo)) {
    return NextResponse.json({ error: "Equipo inválido." }, { status: 400 });
  }

  if (!ASISTENCIA_OPTIONS.includes(asistencia)) {
    return NextResponse.json(
      { error: "Confirmación de asistencia inválida." },
      { status: 400 }
    );
  }

  const utm_source =
    typeof body.utm_source === "string" ? body.utm_source : undefined;
  const utm_campaign =
    typeof body.utm_campaign === "string" ? body.utm_campaign : undefined;

  const payload = {
    nombre,
    telefono,
    perfil,
    equipo,
    asistencia,
    utm_source,
    utm_campaign,
  };

  const results = await Promise.allSettled([
    sendRegistrationWebhook(payload),
    sendGoHighLevelLead(payload),
  ]);
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("Error al registrar inscripción:", result.reason);
    }
  }

  return NextResponse.json({ ok: true });
}
