import { EVENT_DURATION_LABEL } from "@/lib/event";

interface CurriculumPoint {
  heading?: string;
  text: string;
  subpoints?: string[];
}

interface CurriculumBlock {
  number: string;
  title: string;
  duration: string;
  points: CurriculumPoint[];
  dinamica?: string;
}

const BLOCKS: CurriculumBlock[] = [
  {
    number: "01",
    title: "Preproducción: el método creativo",
    duration: "10 min",
    points: [
      {
        heading: "De la idea al guion express",
        text: "Cómo estructurar cualquier video en 3 pasos —gancho, desarrollo y llamado a la acción— para dejar de improvisar frente a la cámara.",
      },
      {
        heading: "Tu búnker de ideas",
        text: "Cómo usar Notas o Freeform (nativas de Apple, en iPad, Mac o iPhone) para armar moodboards visuales del contenido del mes en minutos.",
      },
    ],
    dinamica:
      "Desglose real en pantalla de un guion de 15 segundos que Angela usó con un cliente.",
  },
  {
    number: "02",
    title: "Producción: exprimí la cámara del iPhone",
    duration: "15 min",
    points: [
      {
        heading: "Configuración \"secreta\" para redes",
        text: "El checklist técnico antes de tocar rec:",
        subpoints: [
          "4K/60fps vs. 1080p: por qué y cuándo usar cada uno.",
          "Desactivar el HDR de video para que las redes no \"quemen\" los colores al subirlo.",
          "Limpieza de lente: el error #1 que arruina el contenido.",
        ],
      },
      {
        heading: "Estética \"filmmaker\" con luz natural",
        text: "Cómo bloquear foco y exposición (AE/AF) en el iPhone para lograr un look profesional y clean, sin gastar en luces caras.",
      },
    ],
    dinamica:
      "Angela graba en vivo en el escenario —a un objeto o a alguien del público— mostrando el antes y el después de configurar bien la cámara, en 5 segundos.",
  },
  {
    number: "03",
    title: "Postproducción: edición y diseño express",
    duration: "15 min",
    points: [
      {
        heading: "CapCut (iPhone / Mac)",
        text: "Ritmo y cortes: el arte de eliminar los silencios y aplicar transiciones invisibles para retener la atención. Cómo pasar a la versión Mac para proyectos más pesados compartiendo archivos por AirDrop.",
      },
      {
        heading: "Canva y GoDaddy Studio (iPad / iPhone)",
        text: "Identidad visual al instante: plantillas minimalistas, tipografías con estética premium, y el truco nativo de iOS \"mantener presionado para recortar sujeto\" para arrastrar fotos sin fondo directo a tus diseños.",
      },
    ],
    dinamica:
      "Edición express en pantalla de los 5 segundos grabados en el bloque anterior.",
  },
  {
    number: "04",
    title: "Cierre y preguntas",
    duration: "5 min",
    points: [
      {
        text: "Espacio abierto para resolver todas tus dudas sobre configuraciones, apps, o la experiencia de Angela liderando marcas en Buenos Aires.",
      },
    ],
  },
];

export default function CurriculumSection() {
  return (
    <section
      id="programa"
      className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ep-blue-light px-4 py-1.5 text-xs font-semibold text-ep-blue-deep">
            {EVENT_DURATION_LABEL}
          </span>
          <h2 className="mx-auto mt-5 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            El programa, minuto a minuto
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-black/60">
            Cuatro bloques 100% prácticos: preproducción, producción,
            postproducción y cierre. Cada uno con una dinámica en vivo sobre
            el escenario.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {BLOCKS.map((block) => (
            <div
              key={block.number}
              className="rounded-3xl border border-black/10 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="ep-gradient-text text-2xl font-bold">
                  {block.number}
                </span>
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {block.title}
                </h3>
                <span className="ml-auto rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold text-black/50">
                  {block.duration}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {block.points.map((point) => (
                  <div key={point.heading ?? point.text}>
                    {point.heading && (
                      <p className="text-sm font-semibold text-black">
                        {point.heading}
                      </p>
                    )}
                    <p className="mt-1 text-sm leading-relaxed text-black/60 sm:text-base">
                      {point.text}
                    </p>
                    {point.subpoints && (
                      <ul className="mt-2 space-y-1.5 pl-1">
                        {point.subpoints.map((sub) => (
                          <li
                            key={sub}
                            className="flex items-start gap-2 text-sm text-black/55"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ep-blue-deep" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {block.dinamica && (
                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-ep-blue-light/60 px-4 py-3.5">
                  <span className="mt-0.5 shrink-0 text-lg">🎬</span>
                  <p className="text-sm text-ep-blue-deep">
                    <span className="font-semibold">Dinámica en vivo: </span>
                    {block.dinamica}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
