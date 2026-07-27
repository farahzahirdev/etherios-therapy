import Image from "next/image";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

export function WhatIsSpravato() {
  return (
    <section id="spravato" aria-labelledby="what-is-heading" className="eth-section">
      <div className="mx-auto grid max-w-content items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="eth-fade-up relative mx-auto w-full max-w-md lg:sticky lg:top-28 lg:col-span-5 lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-eth-mist shadow-lift">
            <Image
              src="/images/spravato-admin.png"
              alt="Person administering Spravato® esketamine nasal spray"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-4 -right-2 hidden max-w-[14rem] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-card backdrop-blur sm:block lg:-right-6">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-eth-blue">
              Rapid relief
            </p>
            <p className="mt-1 text-sm text-eth-ink-soft">
              Many patients notice improvement within hours — not weeks.
            </p>
          </div>
        </div>

        <div
          className="eth-fade-up mx-auto max-w-xl space-y-6 text-center lg:col-span-7 lg:mx-0 lg:max-w-none lg:pl-4 lg:text-left"
          style={{ animationDelay: "80ms" }}
        >
          <p className="section-eyebrow">{copy.whatIs.eyebrow}</p>
          <h2 id="what-is-heading">{copy.whatIs.headline}</h2>
          <p className="text-lead mx-auto max-w-2xl lg:mx-0">{copy.whatIs.body}</p>

          <ul className="grid gap-4 pt-2 text-left sm:grid-cols-1">
            {copy.whatIs.points.map((point, index) => (
              <li
                key={point.title}
                className="eth-surface-hover flex gap-4 p-5"
                style={{ animationDelay: `${100 + index * 60}ms` }}
              >
                <span className="font-heading text-2xl font-semibold text-eth-blue/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="!normal-case !tracking-normal text-lg">{point.title}</h3>
                  <p className="mt-1.5 text-eth-slate">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
            <Button href={site.routes.inquiry}>{copy.ctas.inquire}</Button>
            <Button href={site.phoneHref} variant="secondary">
              {copy.ctas.call} {site.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
