import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Link to Charity. Questions about affiliate donations, partnerships, or the platform.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in touch"
        subtitle="Questions about how affiliate commissions fund charity? Interested in partnering? We'd love to hear from you."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <ContactForm />
          <div className="mt-12 text-center text-sm text-ltc-gray space-y-2">
            <p>
              <strong className="text-ltc-black">General inquiries:</strong>{" "}
              <a
                href="mailto:linktocharity@gmail.com"
                className="text-ltc-accent transition-colors hover:underline"
              >
                linktocharity@gmail.com
              </a>
            </p>
            <p>
              Your message will be sent directly from this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
