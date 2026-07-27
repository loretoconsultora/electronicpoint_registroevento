"use client";

import type { ReactNode } from "react";
import { useRegistrationModal } from "./RegistrationModalProvider";

export default function OpenRegistrationButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { open } = useRegistrationModal();

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
