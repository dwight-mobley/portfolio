export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-8 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Dwight Mobley. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}