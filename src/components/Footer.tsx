import { EVENT_ADDRESS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "@/lib/event";
import { InstagramIcon, MapPinIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <p className="text-base font-semibold tracking-tight text-white">
          Electronic Point
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <MapPinIcon className="h-4 w-4 shrink-0" />
            {EVENT_ADDRESS}
          </a>
        </div>

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Electronic Point. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
