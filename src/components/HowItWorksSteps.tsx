const steps = [
  {
    number: "1",
    title: "Search Store",
    description:
      "Find your favorite retailer from our database of 1,000+ stores.",
  },
  {
    number: "2",
    title: "Shop Normally",
    description:
      "Click through to shop as you always would. You pay absolutely nothing extra.",
  },
  {
    number: "3",
    title: "Commission Generated",
    description:
      "The retailer pays an affiliate commission that already exists — not a markup on your purchase.",
  },
  {
    number: "4",
    title: "Donation Made",
    description:
      "Link to Charity receives the commission and donates it to our charity partners.",
  },
];

export function HowItWorksSteps({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          : "grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      }
    >
      {steps.map((step, i) => (
        <div key={step.number} className="relative">
          {!compact && i < steps.length - 1 && (
            <div
              className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-ltc-accent/40 to-transparent"
              aria-hidden
            />
          )}
          <div className="text-center lg:text-left">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ltc-accent text-white text-lg font-semibold mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-ltc-black">{step.title}</h3>
            <p className="mt-2 text-sm text-ltc-gray leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
