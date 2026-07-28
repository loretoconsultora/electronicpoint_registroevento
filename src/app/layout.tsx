import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RegistrationModalProvider } from "@/components/RegistrationModalProvider";
import RegistrationModal from "@/components/RegistrationModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Taller de Creación de Contenido | Electronic Point";
const DESCRIPTION =
  "Registrate al taller de creación de contenido de Electronic Point. Miércoles 5 de agosto, 18 hs, en nuestro local de Palermo. Cupos limitados a 15 personas.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RegistrationModalProvider>
          {children}
          <RegistrationModal />
        </RegistrationModalProvider>
      </body>
    </html>
  );
}
