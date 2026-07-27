import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import TransformationSection from "@/components/TransformationSection";
import ProgramSection from "@/components/ProgramSection";
import AboutSection from "@/components/AboutSection";
import InstructorSection from "@/components/InstructorSection";
import PhotoGallery from "@/components/PhotoGallery";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { REGISTER_SECTION_ID } from "@/lib/event";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TransformationSection />
        <ProgramSection />
        <AboutSection />
        <InstructorSection />
        <PhotoGallery />
        <section
          id={REGISTER_SECTION_ID}
          className="border-t border-black/5 bg-black px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Registrate al taller
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/60">
              Completá tus datos y te confirmamos tu lugar por WhatsApp.
            </p>
          </div>
          <div className="mt-10">
            <RegistrationForm variant="dark" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
