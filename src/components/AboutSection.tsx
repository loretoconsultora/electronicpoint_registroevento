const AUDIENCE = [
  "Creador de Contenido",
  "Emprendedor",
  "Dueño de Negocio",
  "Área de Marketing",
  "Alguien creativo",
];

const MARQUEE_ITEMS = [...AUDIENCE, ...AUDIENCE];

export default function AboutSection() {
  return (
    <section className="border-t border-black/5 bg-gradient-to-br from-ep-blue-deep via-[#274c8f] to-ep-blue-deep py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Es para vos si sos
        </h2>
      </div>

      <div className="ep-marquee-fade relative mt-6 overflow-hidden">
        <div className="ep-marquee flex w-max items-center gap-4">
          {MARQUEE_ITEMS.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="ep-metallic-silver-text shrink-0 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-bold sm:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
