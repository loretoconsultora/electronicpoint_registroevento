"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface ModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

const AUTO_OPEN_DELAY_MS = 3000;

export function RegistrationModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasAutoOpened = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasAutoOpened.current) {
        hasAutoOpened.current = true;
        setIsOpen(true);
      }
    }, AUTO_OPEN_DELAY_MS);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useRegistrationModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error(
      "useRegistrationModal debe usarse dentro de RegistrationModalProvider"
    );
  }
  return ctx;
}
