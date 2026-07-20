import { CUPOS_TOTAL, REGISTER_SECTION_ID } from "@/lib/event";

export default function CuposSection() {
  return (
    <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-ep-blue-light px-4 py-1.5 text-xs font-semibold text-ep-blue-deep">
          Experiencia íntima, no un evento masivo
        </span>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Solo <span className="ep-gradient-text">{CUPOS_TOTAL} lugares</span>{" "}
          disponibles
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-black/60">
          Los cupos son limitados a propósito: queremos que sea algo cercano,
          con espacio real para conversar, mostrar y aprender de cada
          creador presente. Una vez que se completan los {CUPOS_TOTAL}{" "}
          lugares, se cierra la inscripción.
        </p>

        <a
          href={`#${REGISTER_SECTION_ID}`}
          className="ep-electric-btn mt-8 inline-block rounded-full px-8 py-3.5 text-base font-semibold text-white"
        >
          Asegurar mi lugar
        </a>
      </div>
    </section>
  );
}
