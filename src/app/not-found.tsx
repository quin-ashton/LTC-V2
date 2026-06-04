import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-sm font-medium text-ltc-accent mb-4">404</p>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ltc-black">
        Page not found
      </h1>
      <p className="mt-4 text-ltc-gray max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. But your next
        purchase can still support charity.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="rounded-full bg-ltc-accent px-6 py-3 text-sm font-medium text-white hover:bg-ltc-accent/90 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/retailers"
          className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-ltc-black hover:bg-ltc-light transition-colors"
        >
          Browse Retailers
        </Link>
      </div>
    </section>
  );
}
