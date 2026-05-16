import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="shrink-0">
            <Image src="/profile.jpg" alt="Dwight Mobley" width={240} height={240} className="rounded-full object-cover shadow-lg" />
          </div>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <h3 className="text-2xl font-semibold text-zinc-900">Hello, I'm Dwight</h3>
            <p>I'm a passionate full-stack developer focused on creating elegant, efficient, and user-friendly web applications. With expertise in modern web technologies including HTML, CSS, JavaScript, React, Node.js, and more, I build solutions that solve real business problems.</p>
            <p>My development philosophy centres around writing clean, maintainable code while delivering exceptional user experiences. I'm constantly expanding my knowledge through continuous learning.</p>
            <p>When I'm not coding, I enjoy exploring new technologies and helping local businesses establish their digital presence.</p>
            <div className="flex gap-4 pt-2 items-center">
              <a href="https://github.com/dmobley0608" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                <div className="flex gap-3">
                  GitHub
                  <Image src={"./github.svg"} alt="github" width={25} height={25} />
                </div>

              </a>
              |
              <a href="https://linkedin.com/in/dwight-mobley-13825b296" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <div className="flex gap-3">
                  LinkedIn
                  <Image src={"./linkedIn.svg"} alt="github" width={25} height={25} />
                </div>
              </a>
              |
              <a href="mailto:dwightscode@gmail.com" className="text-zinc-600 hover:text-zinc-900 transition-colors">
               <div className="flex gap-3">
                  Email
                  <Image src={"./envelope.svg"} alt="github" width={25} height={25} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
