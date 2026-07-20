import { EVENT_DATE_LABEL, EVENT_TIME_LABEL, REGISTER_SECTION_ID } from "@/lib/event";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
      <div className="ep-glow pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 sm:w-[620px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-medium text-black/60 shadow-sm">
          Se está armando algo, en modo silencioso 🤫
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Taller de{" "}
          <span className="ep-gradient-text">creación de contenido</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-black/60 sm:text-xl">
          Pensado para creadores como vos, que buscan realmente conectar y
          crecer. Nada de equipos profesionales carísimos: creamos con lo que
          ya tenés a mano, tu teléfono.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`#${REGISTER_SECTION_ID}`}
            className="ep-electric-btn w-full rounded-full px-7 py-3.5 text-base font-semibold text-white sm:w-auto"
          >
            Quiero mi lugar
          </a>
          <a
            href="#detalles"
            className="w-full rounded-full border border-black/10 px-7 py-3.5 text-base font-semibold text-black/80 transition-colors hover:bg-black/[0.03] sm:w-auto"
          >
            Ver detalles
          </a>
        </div>

        <p className="mt-6 text-sm font-medium text-black/50">
          {EVENT_DATE_LABEL} · {EVENT_TIME_LABEL} · Local de Electronic Point
          en Palermo
        </p>
      </div>
    </section>
  );
}
