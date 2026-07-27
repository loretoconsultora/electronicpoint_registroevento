export interface CurriculumPoint {
  heading?: string;
  text: string;
  subpoints?: string[];
}

export interface CurriculumBlock {
  number: string;
  title: string;
  duration: string;
  points: CurriculumPoint[];
  dinamica?: string;
}

export const CURRICULUM_BLOCKS: CurriculumBlock[] = [
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
