"use client";

import { useCountdown } from "./useCountdown";
import { EVENT_DATE_ISO } from "@/lib/event";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function BigCountdown() {
  const countdown = useCountdown(EVENT_DATE_ISO);

  const units = [
    { label: "Días", value: countdown ? countdown.days : 0 },
    { label: "Horas", value: countdown ? countdown.hours : 0 },
    { label: "Min", value: countdown ? countdown.minutes : 0 },
    { label: "Seg", value: countdown ? countdown.seconds : 0 },
  ];

  if (countdown?.isPast) {
    return (
      <p className="text-lg font-semibold text-white">
        ¡El evento ya está en marcha!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="rounded-2xl border border-white/10 bg-white/[0.06] px-2 py-3.5 backdrop-blur-sm sm:px-4 sm:py-6"
        >
          <p className="text-3xl font-bold tabular-nums text-white sm:text-5xl">
            {countdown === null ? "--" : pad(unit.value)}
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/40 sm:text-xs">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}
