"use client";

import { FormEvent, useState } from "react";
import {
  CUPOS_TOTAL,
  EVENT_DATE_LABEL,
  EVENT_TIME_LABEL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "@/lib/event";
import { getStoredUtmParams } from "@/lib/utm";

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

type Variant = "light" | "dark";

interface FormState {
  nombre: string;
  telefono: string;
  perfil: string;
  equipo: string;
  asistencia: string;
  website: string;
}

const INITIAL_STATE: FormState = {
  nombre: "",
  telefono: "",
  perfil: "",
  equipo: "",
  asistencia: "",
  website: "",
};

function PillGroup({
  name,
  value,
  options,
  onChange,
  nowrap = false,
  variant,
}: {
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  nowrap?: boolean;
  variant: Variant;
}) {
  return (
    <div
      className={
        nowrap
          ? "flex flex-wrap gap-2 sm:flex-nowrap sm:overflow-x-auto sm:pb-1"
          : "flex flex-wrap gap-2"
      }
    >
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={selected}
            className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
              nowrap ? "sm:shrink-0 sm:whitespace-nowrap sm:px-3 sm:py-2 sm:text-[13px]" : ""
            } ${
              selected
                ? "border-transparent bg-ep-blue-deep text-white"
                : variant === "dark"
                  ? "border-white/15 bg-white/5 text-white/70 hover:bg-white/10"
                  : "border-black/10 bg-white text-black/70 hover:bg-black/[0.03]"
            }`}
          >
            {option}
          </button>
        );
      })}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

export default function RegistrationForm({
  variant = "light",
}: {
  variant?: Variant;
}) {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const isDark = variant === "dark";

  const isComplete =
    form.nombre.trim().length > 1 &&
    form.telefono.trim().length > 5 &&
    form.perfil &&
    form.equipo &&
    form.asistencia;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isComplete || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...getStoredUtmParams() }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "No se pudo enviar tu registro.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se pudo enviar tu registro."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={`mx-auto max-w-xl rounded-3xl border p-8 text-center sm:p-12 ${
          isDark
            ? "border-white/10 bg-white/5"
            : "border-black/5 bg-ep-blue-light/60"
        }`}
      >
        <span className="text-4xl">🎉</span>
        <h3
          className={`mt-4 text-2xl font-semibold tracking-tight ${
            isDark ? "text-white" : ""
          }`}
        >
          ¡Listo, {form.nombre.split(" ")[0]}!
        </h3>
        <p className={`mt-3 ${isDark ? "text-white/60" : "text-black/60"}`}>
          Tu lugar quedó registrado para el {EVENT_DATE_LABEL} a las{" "}
          {EVENT_TIME_LABEL} en nuestro local de Palermo. Te vamos a
          contactar por WhatsApp para confirmar los últimos detalles.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="ep-electric-btn rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            Escribinos por WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${
              isDark
                ? "border-white/15 text-white/80 hover:bg-white/5"
                : "border-black/10 text-black/70 hover:bg-black/[0.03]"
            }`}
          >
            Seguinos en Instagram
          </a>
        </div>
      </div>
    );
  }

  const labelClass = `mb-2 block text-sm font-semibold ${
    isDark ? "text-white/80" : "text-black/80"
  }`;
  const inputClass = `w-full rounded-2xl border px-4 py-3 text-base outline-none transition-colors focus:border-ep-blue ${
    isDark
      ? "border-white/15 bg-white/5 text-white placeholder:text-white/30"
      : "border-black/10 bg-white text-black focus:border-ep-blue-deep"
  }`;

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-7">
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="nombre" className={labelClass}>
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
          placeholder="Tu nombre completo"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="telefono" className={labelClass}>
          Teléfono
        </label>
        <input
          id="telefono"
          type="tel"
          required
          value={form.telefono}
          onChange={(e) =>
            setForm((f) => ({ ...f, telefono: e.target.value }))
          }
          placeholder="11 1234 5678"
          className={inputClass}
        />
      </div>

      <div>
        <p className={labelClass}>¿Qué opción te describe mejor?</p>
        <PillGroup
          name="perfil"
          value={form.perfil}
          options={PERFIL_OPTIONS}
          onChange={(value) => setForm((f) => ({ ...f, perfil: value }))}
          nowrap
          variant={variant}
        />
      </div>

      <div>
        <p className={labelClass}>
          ¿Con qué equipo creás actualmente tu contenido?
        </p>
        <PillGroup
          name="equipo"
          value={form.equipo}
          options={EQUIPO_OPTIONS}
          onChange={(value) => setForm((f) => ({ ...f, equipo: value }))}
          variant={variant}
        />
      </div>

      <div>
        <p className={labelClass}>¿Confirmás tu asistencia al evento?</p>
        <PillGroup
          name="asistencia"
          value={form.asistencia}
          options={ASISTENCIA_OPTIONS}
          onChange={(value) => setForm((f) => ({ ...f, asistencia: value }))}
          variant={variant}
        />
      </div>

      {status === "error" && (
        <p
          className={`rounded-2xl px-4 py-3 text-sm font-medium ${
            isDark ? "bg-red-500/10 text-red-300" : "bg-red-50 text-red-600"
          }`}
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!isComplete || status === "loading"}
        className="ep-electric-btn w-full rounded-full px-6 py-3.5 text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "loading" ? "Enviando…" : "Confirmar mi lugar"}
      </button>

      <p
        className={`text-center text-xs ${
          isDark ? "text-white/40" : "text-black/40"
        }`}
      >
        Quedan pocos de los {CUPOS_TOTAL} lugares disponibles.
      </p>
    </form>
  );
}
