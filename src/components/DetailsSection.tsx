import {
  EVENT_ADDRESS,
  EVENT_DATE_LABEL,
  EVENT_TIME_LABEL,
  EVENT_TIME_NOTE,
  MAPS_URL,
} from "@/lib/event";

const DETAILS = [
  {
    label: "Fecha",
    value: EVENT_DATE_LABEL,
    icon: "📅",
  },
  {
    label: "Hora",
    value: EVENT_TIME_LABEL,
    note: EVENT_TIME_NOTE,
    icon: "🕖",
  },
  {
    label: "Lugar",
    value: "Local de Electronic Point, Palermo",
    note: EVENT_ADDRESS,
    icon: "📍",
    href: MAPS_URL,
  },
];

export default function DetailsSection() {
  return (
    <section
      id="detalles"
      className="border-t border-black/5 bg-black px-5 py-20 text-white sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Los detalles
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {DETAILS.map((detail) => {
            const content = (
              <>
                <span className="text-2xl">{detail.icon}</span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-white/40">
                  {detail.label}
                </p>
                <p className="mt-1.5 text-lg font-semibold">{detail.value}</p>
                {detail.note && (
                  <p className="mt-1 text-sm text-white/50">{detail.note}</p>
                )}
              </>
            );

            const className =
              "rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors";

            return detail.href ? (
              <a
                key={detail.label}
                href={detail.href}
                target="_blank"
                rel="noreferrer"
                className={`${className} hover:border-ep-blue/40 hover:bg-white/[0.07]`}
              >
                {content}
                <span className="mt-3 inline-block text-sm font-medium text-ep-blue">
                  Ver en el mapa →
                </span>
              </a>
            ) : (
              <div key={detail.label} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
