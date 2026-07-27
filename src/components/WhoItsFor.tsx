import Image from "next/image";
import { Check } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

export function WhoItsFor() {
  return (
    <section aria-labelledby="who-heading" className="eth-section eth-section-alt">
      <div className="mx-auto grid max-w-content items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="eth-fade-up order-2 mx-auto max-w-xl space-y-6 text-center lg:order-1 lg:mx-0 lg:max-w-none lg:text-left">
          <p className="section-eyebrow">{copy.who.eyebrow}</p>
          <h2 id="who-heading">{copy.who.headline}</h2>
          <p className="text-lead mx-auto lg:mx-0">{copy.who.body}</p>

          <div className="rounded-[1.5rem] border border-[rgba(28,35,40,0.06)] bg-white p-6 text-left shadow-soft sm:p-7">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.08em] text-eth-purple">
              {copy.who.qualifyLabel}
            </p>
            <ul className="mt-4 space-y-3.5">
              {copy.who.criteria.map((item) => (
                <li key={item} className="flex gap-3 text-eth-ink-soft">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-eth-blue-soft text-eth-blue">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-small mx-auto max-w-md lg:mx-0">{copy.who.note}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button href={site.routes.inquiry}>{copy.ctas.inquire}</Button>
            <Button href={site.phoneHref} variant="secondary">
              {copy.ctas.call} {site.phone}
            </Button>
          </div>
        </div>

        <div className="eth-fade-up relative order-1 mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem] shadow-lift sm:aspect-[5/6] lg:order-2 lg:mx-0 lg:aspect-[4/5] lg:max-w-none">
          <Image
            src="/images/office-interior.webp"
            alt="Calm treatment space at Etherios Therapy in Orem"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
