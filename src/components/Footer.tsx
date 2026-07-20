import { EVENT_ADDRESS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "@/lib/event";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <p className="text-base font-semibold tracking-tight">
          Electronic Point
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/[0.03]"
          >
            Instagram @electronicpoint.ar
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/[0.03]"
          >
            WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/[0.03]"
          >
            {EVENT_ADDRESS}
          </a>
        </div>

        <p className="text-xs text-black/40">
          © {new Date().getFullYear()} Electronic Point. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
