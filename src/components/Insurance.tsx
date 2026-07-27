"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

const AUTO_MS = 4500;

export function Insurance() {
  const highlights = copy.insurance.highlights;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % highlights.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, highlights.length]);

  const current = highlights[active];

  return (
    <section id="insurance" aria-labelledby="insurance-heading" className="eth-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="eth-fade-up mx-auto max-w-xl space-y-5 text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="section-eyebrow">{copy.insurance.eyebrow}</p>
            <h2 id="insurance-heading">{copy.insurance.headline}</h2>
            <p className="text-lead mx-auto lg:mx-0">{copy.insurance.body}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
              <Button href={site.routes.inquiry}>{copy.ctas.inquire}</Button>
              <Button href={site.routes.bookConsult} variant="secondary">
                {copy.ctas.book}
              </Button>
              <Button href={site.phoneHref} variant="secondary">
                {copy.ctas.call} {site.phone}
              </Button>
            </div>
          </div>

          <div
            className="eth-fade-up"
            style={{ animationDelay: "100ms" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false);
              }
            }}
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-[rgba(28,35,40,0.06)] bg-white shadow-lift">
              <div className="relative aspect-[4/3] overflow-hidden bg-eth-mist">
                {highlights.map((item, index) => (
                  <Image
                    key={item.image}
                    src={item.image}
                    alt={item.alt}
                    fill
                    className={`object-cover transition-opacity duration-700 ease-out ${
                      index === active ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                ))}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-eth-ink/55 to-transparent p-4 pt-16">
                  <p className="text-sm font-semibold text-white drop-shadow-sm">
                    {current.label}
                  </p>
                </div>
              </div>

              <div
                className="grid gap-1 p-2 sm:grid-cols-2"
                role="tablist"
                aria-label="Insurance benefits"
              >
                {highlights.map((item, index) => {
                  const isActive = index === active;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`rounded-xl px-3.5 py-3 text-left text-sm leading-snug transition duration-200 ${
                        isActive
                          ? "bg-eth-blue-soft font-semibold text-eth-ink ring-1 ring-eth-blue/25"
                          : "text-eth-slate hover:bg-eth-mist hover:text-eth-ink"
                      }`}
                      onClick={() => setActive(index)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
