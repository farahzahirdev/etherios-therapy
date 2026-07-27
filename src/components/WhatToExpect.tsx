import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

export function WhatToExpect() {
  return (
    <section id="expect" aria-labelledby="expect-heading" className="eth-section-compact">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="eth-section-header eth-fade-up">
          <p className="section-eyebrow">{copy.expect.eyebrow}</p>
          <h2 id="expect-heading" className="mt-3">
            {copy.expect.headline}
          </h2>
        </div>

        <ol className="eth-fade-up mt-14 grid gap-6 sm:grid-cols-3">
          {copy.expect.steps.map((step, index) => (
            <li
              key={step.title}
              className="eth-surface-hover relative overflow-hidden p-6 text-center sm:p-7 sm:text-left"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="font-heading text-5xl font-semibold text-eth-blue/[0.12] sm:text-6xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 !normal-case !tracking-normal">{step.title}</h3>
              <p className="mt-2 text-eth-slate">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="eth-fade-up mt-10 flex flex-col items-center gap-5 rounded-[1.5rem] bg-gradient-to-r from-eth-blue-soft to-eth-purple-soft/60 px-6 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
          <p className="max-w-xl text-eth-ink-soft">{copy.expect.sessionNote}</p>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3 sm:justify-end">
            <Button href={site.routes.bookConsult}>{copy.ctas.book}</Button>
            <Button href={site.routes.inquiry} variant="secondary">
              {copy.ctas.inquire}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
