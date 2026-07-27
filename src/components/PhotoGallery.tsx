import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/event";

const PLACEHOLDER_COUNT = 4;

export default function PhotoGallery() {
  return (
    <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Así es nuestro local en Palermo
          </h2>
          <p className="mx-auto mt-3 max-w-md text-black/60">
            El lugar donde va a pasar todo. Muy pronto vas a poder ver fotos
            del espacio.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {GALLERY_IMAGES.length > 0
            ? GALLERY_IMAGES.map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-2xl bg-black/5"
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
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-black/15 bg-ep-blue-light/40 text-black/30"
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
