import { YOUTUBE_VIDEO_ID } from "@/lib/event";

export default function VideoSection() {
  return (
    <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Mirá de qué se trata
        </h2>
        <p className="mx-auto mt-3 max-w-md text-black/60">
          Un adelanto de lo que te espera en el taller.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
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
            <div className="ep-glow pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
          )}

          {!YOUTUBE_VIDEO_ID && (
            <div className="relative flex h-full flex-col items-center justify-center gap-3 text-white/60">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
              </span>
              <p className="text-sm font-medium">Video próximamente</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
