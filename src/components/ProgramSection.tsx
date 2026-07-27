import CurriculumAccordion from "./CurriculumAccordion";
import OpenRegistrationButton from "./OpenRegistrationButton";
import { YOUTUBE_VIDEO_ID } from "@/lib/event";

export default function ProgramSection() {
  return (
    <section
      id="programa"
      className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="ep-metallic-text mx-auto max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Mirá de qué se trata
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:items-start sm:gap-10">
          <div className="order-2 sm:order-1">
            <CurriculumAccordion />
            <div className="mt-6 text-center">
              <OpenRegistrationButton className="ep-electric-btn w-full rounded-full px-7 py-3.5 text-base font-semibold text-white sm:w-auto">
                Quiero mi lugar
              </OpenRegistrationButton>
            </div>
          </div>

          <div className="order-1 sm:sticky sm:top-24 sm:order-2">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-black/10 bg-black">
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
