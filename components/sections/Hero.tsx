import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/hero.jfif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Dwight Mobley
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-amber-400">
          Full-Stack Developer
        </h2>
        <p className="text-lg text-zinc-300 max-w-xl mx-auto">
          Crafting beautiful and functional digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="#projects"
            className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-bold rounded-full transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-white hover:bg-white hover:text-zinc-900 font-bold rounded-full transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}