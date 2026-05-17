"use client";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setStatus(res.ok ? "sent" : "error");
    if (res.ok) form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <SectionHeading >Contact</SectionHeading>
        {status === "sent" ? (
          <p className="text-center text-green-600 font-medium">
            Message sent! I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
              <input name="name" required
                className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
              <input name="email" type="email" required
                className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
              <textarea name="message" required rows={5}
                className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-zinc-900 font-bold py-3 rounded-full transition-colors"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-center text-red-600 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}