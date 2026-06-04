type PageHeroProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ltc-black text-balance">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-ltc-gray leading-relaxed text-balance">
          {subtitle}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
