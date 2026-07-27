import Image from "next/image";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

export function InlineCta() {
  return (
    <section aria-label="Ready to take the next step" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-[2rem] shadow-lift">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/office-lobby.webp"
            alt=""
            fill
            className="object-cover object-[center_45%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-eth-ink/55 via-eth-ink/65 to-eth-ink/75" />
        </div>

        <div className="relative px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-eth-spark drop-shadow-sm">
            Take the next step
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl !text-white drop-shadow-sm">
            Hope is closer than it feels
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base !text-white drop-shadow-sm sm:text-lg">
            If depression treatments haven’t given you the relief you need, Spravato® at
            Etherios may be the next step — with a team ready to walk with you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={site.routes.bookConsult} className="!rounded-full">
              {copy.ctas.book}
            </Button>
            <Button
              href={site.routes.inquiry}
              variant="secondary"
              className="!rounded-full !border-white/40 !bg-white/10 !text-white hover:!bg-white/18"
            >
              {copy.ctas.inquire}
            </Button>
            <Button
              href={site.phoneHref}
              variant="secondary"
              className="!rounded-full !border-white/40 !bg-white/10 !text-white hover:!bg-white/18"
            >
              {copy.ctas.call} {site.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
