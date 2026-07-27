const BEFORE = [
  "Grabás sin un plan y terminás improvisando frente a la cámara.",
  "Tu contenido se ve casero: colores quemados, fuera de foco, luz plana.",
  "Perdés horas editando tu video",
  "No tenés un sistema, te quedas sin ideas de qué publicar",
];

const AFTER = [
  "Eres capaz de darle estructura y vida a cualquier idea",
  "Grabás con tu iPhone en la configuración óptima para redes: nitidez, foco y color con estética profesional.",
  "Editás en CapCut con ritmo real: cortes limpios, sin silencios muertos, transiciones invisibles.",
  "Tenés tu propio banco de ideas y una identidad visual lista para replicar cada semana.",
];

export default function TransformationSection() {
  return (
    <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="ep-metallic-text mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Graba y Edita como un creador profesional
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-black/40">
              Antes del taller
            </p>
            <ul className="mt-4 space-y-3.5">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-black/60 sm:text-base">
                  <span className="mt-0.5 shrink-0">❌</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-ep-blue/20 bg-ep-blue-light/60 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-ep-blue-deep">
              Después del taller
            </p>
            <ul className="mt-4 space-y-3.5">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-black sm:text-base">
                  <span className="mt-0.5 shrink-0">✅</span>
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
