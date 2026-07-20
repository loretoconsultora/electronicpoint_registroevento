"use client";

import { useCountdown } from "./useCountdown";
import { EVENT_DATE_ISO, REGISTER_SECTION_ID } from "@/lib/event";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function NavBar() {
  const countdown = useCountdown(EVENT_DATE_ISO);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="text-[15px] font-semibold tracking-tight sm:text-base">
            Electronic Point
          </span>
        </a>

        <div className="hidden items-center gap-2 rounded-full bg-ep-blue-light px-4 py-1.5 text-xs font-medium text-ep-blue-deep sm:flex">
          <span className="ep-live-dot h-1.5 w-1.5 rounded-full bg-ep-blue-deep" />
          {countdown === null ? (
            <span>Cargando cuenta regresiva…</span>
          ) : countdown.isPast ? (
            <span>¡El evento ya está en marcha!</span>
          ) : (
            <span>
              Faltan {countdown.days}d {pad(countdown.hours)}h{" "}
              {pad(countdown.minutes)}m {pad(countdown.seconds)}s
            </span>
          )}
        </div>

        <a
          href={`#${REGISTER_SECTION_ID}`}
          className="ep-electric-btn shrink-0 rounded-full px-4 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm"
        >
          Registrarme
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-black/5 bg-ep-blue-light px-4 py-1.5 text-[11px] font-medium text-ep-blue-deep sm:hidden">
        <span className="ep-live-dot h-1.5 w-1.5 rounded-full bg-ep-blue-deep" />
        {countdown === null ? (
          <span>Cargando cuenta regresiva…</span>
        ) : countdown.isPast ? (
          <span>¡El evento ya está en marcha!</span>
        ) : (
          <span>
            Faltan {countdown.days}d {pad(countdown.hours)}h{" "}
            {pad(countdown.minutes)}m {pad(countdown.seconds)}s
          </span>
        )}
      </div>
    </header>
  );
}
