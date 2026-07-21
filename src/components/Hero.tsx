import BigCountdown from "./BigCountdown";
import {
  CUPOS_TOTAL,
  EVENT_DATE_LABEL,
  EVENT_TIME_LABEL,
  REGISTER_SECTION_ID,
} from "@/lib/event";

export default function Hero() {
  return (
    <section id="top" className="bg-white px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-black px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-14 sm:py-20">
          <div className="ep-glow pointer-events-none absolute left-1/2 top-[-25%] h-[480px] w-[480px] -translate-x-1/2 opacity-70" />

          <div className="relative">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
              Creá contenido que{" "}
              <span className="ep-gradient-text">conecta de verdad.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Un taller práctico e íntimo para aprender a grabar, editar y
              contar historias con el teléfono que ya tenés en el bolsillo.
              Nada de cámaras profesionales, nada de excusas.
            </p>

            <p className="mt-4 text-sm font-medium text-white/40">
              {EVENT_DATE_LABEL} · {EVENT_TIME_LABEL} · Local de Electronic
              Point en Palermo
            </p>

            <div className="mx-auto mt-10 max-w-md">
              <BigCountdown />
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`#${REGISTER_SECTION_ID}`}
                className="ep-electric-btn w-full rounded-full px-7 py-3.5 text-base font-semibold text-white sm:w-auto"
              >
                Quiero mi lugar
              </a>
              <a
                href="#detalles"
                className="w-full rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Ver detalles
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/40">
              <span className="ep-live-dot h-1.5 w-1.5 rounded-full bg-ep-blue" />
              Solo {CUPOS_TOTAL} cupos — no te quedes afuera
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
