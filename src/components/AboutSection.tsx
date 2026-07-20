const AUDIENCE = [
  "Creador de contenido",
  "Emprendedor",
  "Marketing",
  "Uso personal",
];

export default function AboutSection() {
  return (
    <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              ¿De qué se trata?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-black/60 sm:text-lg">
              <p>
                Lo estamos preparando en el equipo, en modo silencioso, pero
                ahora ya lo sabés vos también: un taller de creación de
                contenido, armado acá mismo, en nuestro hogar.
              </p>
              <p>
                Nada de equipos profesionales carísimos. Vamos a crear con lo
                que ya tenemos a mano: iPhone, iPad, celular. Va a ser algo
                íntimo, con cafecito y buena onda humana.
              </p>
              <p className="font-medium text-black">
                Si te copa crear contenido y querés venir en persona, te
                esperamos.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/40">
              Es para vos si sos
            </h3>
            <ul className="mt-4 space-y-3">
              {AUDIENCE.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-ep-blue-light/50 px-4 py-3 text-sm font-medium sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ep-blue-deep text-[11px] font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
