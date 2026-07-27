export default function InstructorSection() {
  return (
    <section className="border-t border-black/5 bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-black/10 bg-black/[0.02] p-8 text-center sm:flex-row sm:gap-8 sm:p-10 sm:text-left">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-ep-blue-deep text-3xl font-bold text-white">
          A
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ep-blue-deep">
            Tu instructora
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
            Angela
          </h3>
          <p className="mt-2 text-black/60">
            Lidera marcas en Buenos Aires y va a compartir, en vivo, el
            método que usa con sus clientes para crear contenido —desde el
            guion hasta la edición final— con nada más que un iPhone.
          </p>
        </div>
      </div>
    </section>
  );
}
