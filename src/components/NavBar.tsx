import Image from "next/image";
import { LOGO_ICON_SRC, REGISTER_SECTION_ID } from "@/lib/event";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <Image
            src={LOGO_ICON_SRC}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 object-contain"
          />
          <span className="text-[15px] font-semibold tracking-tight sm:text-base">
            Electronic Point
          </span>
        </a>

        <a
          href={`#${REGISTER_SECTION_ID}`}
          className="ep-electric-btn shrink-0 rounded-full px-4 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm"
        >
          Registrarme
        </a>
      </div>
    </header>
  );
}
