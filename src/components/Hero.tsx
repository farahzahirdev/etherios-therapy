import Image from "next/image";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="eth-hero eth-hero--static">
      <div className="eth-hero-shell">
        <div className="eth-hero-card">
          <div className="eth-hero-media" aria-hidden>
            <Image
              src={site.heroImage}
              alt=""
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="eth-hero-scrim" aria-hidden />

          <div className="eth-hero-inner">
            <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
              <div className="eth-fade-up mx-auto max-w-[40rem] space-y-5 text-center text-white sm:space-y-6 lg:mx-0 lg:text-left">
                <p className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.25rem]">
                  {copy.hero.brand}
                </p>
                <div
                  className="mx-auto h-px w-14 origin-center bg-eth-spark animate-draw-line lg:mx-0 lg:origin-left"
                  aria-hidden
                />
                <h1 id="hero-heading" className="!text-white">
                  {copy.hero.headline}
                </h1>
                <p className="mx-auto max-w-[34rem] text-base leading-relaxed text-white/90 sm:text-lg sm:leading-[1.7] lg:mx-0">
                  {copy.hero.subheadline}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start">
                  <Button href={site.routes.bookConsult} variant="primary" className="!rounded-full">
                    {copy.hero.primaryCta}
                  </Button>
                  <Button
                    href={site.routes.inquiry}
                    variant="secondary"
                    className="!rounded-full !border-white/45 !bg-white/10 !text-white backdrop-blur-sm hover:!border-white/70 hover:!bg-white/18"
                  >
                    {copy.hero.secondaryCta}
                  </Button>
                  <Button
                    href={site.phoneHref}
                    variant="secondary"
                    className="!rounded-full !border-white/45 !bg-white/10 !text-white backdrop-blur-sm hover:!border-white/70 hover:!bg-white/18"
                  >
                    {copy.ctas.call} {site.phone}
                  </Button>
                </div>

                <ul
                  className="flex flex-wrap items-center justify-center gap-2 pt-1 lg:justify-start"
                  aria-label="Treatment highlights"
                >
                  {copy.hero.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
