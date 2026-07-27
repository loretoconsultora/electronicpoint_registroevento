import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/event";

const PLACEHOLDER_COUNT = 4;

export default function PhotoGallery() {
  return (
    <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="ep-metallic-text mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Electronic Point tus Aliados GEEKS
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {GALLERY_IMAGES.length > 0
            ? GALLERY_IMAGES.map((src) => (
                <div
                  key={src}
                  className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-black/5 sm:h-56 sm:w-56"
                >
                  <Image
                    src={src}
                    alt="Local de Electronic Point en Palermo"
                    fill
                    className="object-cover"
                  />
                </div>
              ))
            : Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-40 w-40 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-black/15 bg-ep-blue-light/40 text-black/30 sm:h-56 sm:w-56"
                >
                  <span className="text-2xl">📷</span>
                  <span className="text-xs font-medium">Foto próximamente</span>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
