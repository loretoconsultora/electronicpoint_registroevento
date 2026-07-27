import CurriculumAccordion from "./CurriculumAccordion";
import { EVENT_DURATION_LABEL, YOUTUBE_VIDEO_ID } from "@/lib/event";

export default function ProgramSection() {
  return (
    <section
      id="programa"
      className="border-t border-black/5 bg-gradient-to-br from-ep-blue-deep via-[#274c8f] to-ep-blue-deep px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            {EVENT_DURATION_LABEL}
          </span>
          <h2 className="mx-auto mt-5 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Mirá de qué se trata
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            El programa completo, minuto a minuto, y un adelanto en video de
            lo que te espera.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:items-start sm:gap-10">
          <div className="order-2 sm:order-1">
            <CurriculumAccordion />
          </div>

          <div className="order-1 sm:sticky sm:top-24 sm:order-2">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/15 bg-black">
              {YOUTUBE_VIDEO_ID ? (
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Video del taller de Electronic Point"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-white/60">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                    <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
                  </span>
                  <p className="text-sm font-medium">Video próximamente</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
