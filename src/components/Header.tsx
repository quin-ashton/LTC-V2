"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/retailers", label: "Retailers" },
  { href: "/charities", label: "Charities" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/logo.png"
              alt="Link to Charity"
              width={160}
              height={36}
              className="h-8 w-auto [filter:drop-shadow(0_0_0.02px_#808080)_drop-shadow(0_0_0.02px_#808080)_drop-shadow(0_0_0.02px_#808080)]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-ltc-black font-medium"
                    : "text-ltc-gray hover:text-ltc-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/retailers"
              className="rounded-full bg-ltc-accent px-4 py-1.5 text-sm font-medium text-white hover:bg-ltc-accent/90 transition-colors"
            >
              Start Shopping
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-ltc-black"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-black/5 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-3 py-2.5 text-base ${
                pathname === link.href
                  ? "bg-ltc-light font-medium text-ltc-black"
                  : "text-ltc-gray hover:bg-ltc-light"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/retailers"
            className="block rounded-full bg-ltc-accent px-4 py-3 text-center text-base font-medium text-white mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Start Shopping
          </Link>
        </nav>
      )}
    </header>
  );
}
