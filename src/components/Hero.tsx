import BigCountdown from "./BigCountdown";
import OpenRegistrationButton from "./OpenRegistrationButton";
import {
  CUPOS_TOTAL,
  EVENT_ADDRESS_SHORT,
  EVENT_DATE_LABEL,
  EVENT_TIME_LABEL,
  HERO_VIDEO_SRC,
} from "@/lib/event";

export default function Hero() {
  return (
    <section id="top" className="bg-white px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative rounded-t-[2.5rem] rounded-b-lg bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-300 p-2.5 pt-4 shadow-2xl sm:p-4 sm:pt-5">
          <div className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-zinc-500 sm:top-2" />

          <div className="relative overflow-hidden rounded-[1.75rem] bg-black px-6 py-14 text-center sm:rounded-[2rem] sm:px-14 sm:py-20">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-40"
              src={HERO_VIDEO_SRC}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
            <div className="ep-glow pointer-events-none absolute left-1/2 top-[-25%] h-[480px] w-[480px] -translate-x-1/2 opacity-50" />

            <div className="relative">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ep-blue">
                Geeks Talks
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                Taller de Creación de Contenido:{" "}
                <span className="ep-metallic-text">De la Idea a tu perfil</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl">
                <span className="block text-lg font-semibold text-white sm:text-xl">
                  Aprendé el Método: Guionización, Producción y Edición
                </span>
                <span className="mt-1.5 block text-base text-white/60 sm:text-lg">
                  Todo con tu celular que ya tenés en el bolsillo.
                </span>
              </p>

              <div className="mx-auto mt-7 space-y-1.5 text-lg font-semibold text-white sm:text-xl">
                <p>📅 {EVENT_DATE_LABEL}</p>
                <p>
                  🕕 {EVENT_TIME_LABEL} 📍 {EVENT_ADDRESS_SHORT}
                </p>
              </div>

              <div className="mx-auto mt-10 max-w-md">
                <BigCountdown />
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <OpenRegistrationButton className="ep-electric-btn w-full rounded-full px-7 py-3.5 text-base font-semibold text-white sm:w-auto">
                  Quiero mi lugar
                </OpenRegistrationButton>
                <a
                  href="#programa"
                  className="w-full rounded-full bg-gradient-to-r from-ep-blue-deep via-ep-blue to-ep-blue-deep p-[1.5px] transition-opacity hover:opacity-90 sm:w-auto"
                >
                  <span className="flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white">
                    Ver el programa
                  </span>
                </a>
              </div>

              <p className="mt-6 text-lg font-semibold italic text-white">
                Solo {CUPOS_TOTAL} cupos — no te quedes afuera
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-3 w-full rounded-b-2xl bg-gradient-to-b from-zinc-300 to-zinc-400 shadow-lg sm:h-4">
          <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-md bg-zinc-500/40 sm:w-24" />
        </div>
      </div>
    </section>
  );
}
