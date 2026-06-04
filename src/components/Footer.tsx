import Link from "next/link";

const footerLinks = {
  Shop: [
    { href: "/retailers", label: "All Retailers" },
    { href: "/charities", label: "Our Charities" },
    { href: "/extension", label: "Browser Extension" },
  ],
  Learn: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/impact", label: "Our Impact" },
    { href: "/newsletter", label: "Newsletter" },
  ],
  Company: [
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ltc-light border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-semibold text-ltc-black">
              Link to Charity
            </Link>
            <p className="mt-4 text-sm text-ltc-gray leading-relaxed max-w-xs">
              Redirecting affiliate commissions from your everyday shopping to
              charitable causes. You pay nothing extra.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ltc-gray mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ltc-black/80 hover:text-ltc-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ltc-gray">
            © {new Date().getFullYear()} Link to Charity. All rights reserved.
          </p>
          <p className="text-xs text-ltc-gray text-center sm:text-right max-w-md">
            Affiliate commissions fund donations. Retailers and shoppers pay
            nothing extra.
          </p>
        </div>
      </div>
    </footer>
  );
}
