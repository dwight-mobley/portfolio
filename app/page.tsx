import Navbar from "@/components/layout/Navbar";
import { About, Contact, Experiences, Hero, Projects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-15">
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
