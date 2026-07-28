"use client";

import { useEffect } from "react";
import { useRegistrationModal } from "./RegistrationModalProvider";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationModal() {
  const { isOpen, close } = useRegistrationModal();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-8 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/40 bg-white/75 p-6 shadow-2xl backdrop-blur-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-black/50 transition-colors hover:bg-black/10"
        >
          ✕
        </button>

        <div className="text-center">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Reservá tu lugar
          </h3>
          <p className="mt-2 text-sm text-black/60">
            Completá tus datos y te confirmamos por WhatsApp.
          </p>
        </div>

        <div className="mt-6">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
