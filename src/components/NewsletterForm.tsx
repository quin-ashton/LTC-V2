"use client";

import { useState } from "react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-ltc-green/10 px-6 py-8 text-center">
        <p className="text-lg font-semibold text-ltc-black">You&apos;re subscribed!</p>
        <p className="mt-2 text-sm text-ltc-gray">
          Thank you for joining our community. Impact updates coming soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "flex flex-col sm:flex-row gap-3" : "max-w-md mx-auto space-y-4"}>
      <div className={compact ? "flex-1" : ""}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ltc-accent/50"
        />
        {status === "error" && (
          <p className="mt-1 text-xs text-red-600">Please enter a valid email.</p>
        )}
      </div>
      <button
        type="submit"
        className={`rounded-full bg-ltc-accent px-6 py-3 text-sm font-medium text-white hover:bg-ltc-accent/90 transition-colors ${compact ? "shrink-0" : "w-full"}`}
      >
        Subscribe
      </button>
    </form>
  );
}
