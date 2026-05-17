import { About, Contact, Experiences, Hero, Projects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <>
      <main>
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
