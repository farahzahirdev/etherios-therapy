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
              quality={92}
              className="object-cover object-[center_58%]"
              sizes="100vw"
            />
          </div>
          <div className="eth-hero-tint" aria-hidden />
          <div className="eth-hero-scrim" aria-hidden />

          <div className="eth-hero-inner">
            <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:gap-12">
                <div className="eth-fade-up mx-auto max-w-[40rem] space-y-5 text-center text-white sm:space-y-6 xl:mx-0 xl:text-left">
                  <p className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl xl:text-[2.25rem]">
                    {copy.hero.brand}
                  </p>
                  <div
                    className="mx-auto h-px w-14 origin-center bg-eth-spark animate-draw-line xl:mx-0 xl:origin-left"
                    aria-hidden
                  />
                  <h1 id="hero-heading" className="!text-white">
                    {copy.hero.headline}
                  </h1>
                  <p className="mx-auto max-w-[34rem] text-base leading-relaxed text-white/90 sm:text-lg sm:leading-[1.7] xl:mx-0">
                    {copy.hero.subheadline}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-1 xl:justify-start">
                    <Button
                      href={site.routes.bookConsult}
                      variant="primary"
                      className="!rounded-full"
                    >
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
                    className="flex flex-wrap items-center justify-center gap-2 pt-1 xl:justify-start"
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

                <div
                  className="eth-fade-up eth-hero-panel mx-auto w-full max-w-md sm:max-w-lg xl:mx-0 xl:ml-auto xl:max-w-none"
                  style={{ animationDelay: "120ms" }}
                >
                  <div className="flex w-full flex-col items-center justify-center gap-5 text-center xl:flex-row xl:items-center xl:gap-8 xl:text-left">
                    <div className="relative mx-auto h-48 w-28 shrink-0 sm:h-56 sm:w-32 xl:mx-0 xl:h-64 xl:w-40">
                      <Image
                        src={site.heroSprayImage}
                        alt={copy.hero.sprayCard.alt}
                        fill
                        priority
                        className="object-contain drop-shadow-[0_12px_24px_rgba(28,35,40,0.18)]"
                        sizes="160px"
                      />
                    </div>

                    <div className="flex w-full min-w-0 flex-col items-center space-y-4 xl:flex-1 xl:items-start">
                      <div className="space-y-2">
                        <p className="font-heading text-xl font-semibold tracking-tight text-eth-ink sm:text-2xl xl:text-[1.65rem]">
                          {copy.hero.sprayCard.title}
                        </p>
                        <p className="mx-auto max-w-xs text-base font-medium leading-snug text-eth-blue sm:text-lg xl:mx-0 xl:max-w-none">
                          {copy.hero.sprayCard.subtitle}
                        </p>
                      </div>
                      <Button
                        href={site.routes.bookConsult}
                        variant="primary"
                        className="!rounded-full !whitespace-nowrap !px-5 sm:!px-6"
                      >
                        {copy.hero.primaryCta}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
