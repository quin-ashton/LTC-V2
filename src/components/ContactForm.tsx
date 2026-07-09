"use client";

import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "success" | "submitting" | "error"
  >("idle");
  const [honeypot, setHoneypot] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/linktocharity@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            subject: form.subject.trim() || "Website contact",
            message: form.message.trim(),
            _captcha: "false",
            _template: "table",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Unable to send your message right now.");
      }

      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now. Please try again later.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-ltc-green/10 px-8 py-12 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ltc-green text-white mb-4">
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-ltc-black">Message sent</h3>
        <p className="mt-2 text-sm text-ltc-gray">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-ltc-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-ltc-black mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ltc-accent/50"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-ltc-black mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ltc-accent/50"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-ltc-black mb-1.5"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ltc-accent/50"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ltc-black mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ltc-accent/50 resize-y"
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto rounded-full bg-ltc-black px-8 py-3 text-sm font-medium text-white hover:bg-ltc-black/80 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
