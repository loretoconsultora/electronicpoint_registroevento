const BEFORE = [
  "Grabás sin un plan y terminás improvisando frente a la cámara.",
  "Tu contenido se ve casero: colores quemados, fuera de foco, luz plana.",
  "Editás a los ponchazos y perdés horas por cinco segundos de video.",
  "No tenés un sistema: cada semana arrancás de cero buscando qué publicar.",
];

const AFTER = [
  "Estructurás cualquier idea en 3 pasos —gancho, desarrollo y llamado a la acción— antes de tocar rec.",
  "Grabás con tu iPhone en la configuración óptima para redes: nitidez, foco y color con estética profesional.",
  "Editás en CapCut con ritmo real: cortes limpios, sin silencios muertos, transiciones invisibles.",
  "Tenés tu propio banco de ideas y una identidad visual lista para replicar cada semana.",
];

export default function TransformationSection() {
  return (
    <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ep-blue-light px-4 py-1.5 text-xs font-semibold text-ep-blue-deep">
            La transformación
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Entrás improvisando con el celular.{" "}
            <span className="ep-gradient-text">
              Salís grabando y editando como un creador profesional.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-black/60">
            No es una charla teórica: es un método completo —de la idea al
            posteo— que vas a poder aplicar desde el mismo día del taller.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-black/40">
              Antes del taller
            </p>
            <ul className="mt-4 space-y-3.5">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-black/60 sm:text-base">
                  <span className="mt-0.5 shrink-0 text-black/30">✕</span>
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
                  <span className="mt-0.5 shrink-0 text-ep-blue-deep">✓</span>
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
