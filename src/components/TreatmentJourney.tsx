import { ClipboardList, HeartPulse, Home } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

const icons = [ClipboardList, HeartPulse, Home];

export function TreatmentJourney() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="eth-section-compact">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="eth-section-header eth-fade-up max-w-3xl">
          <p className="section-eyebrow">{copy.journey.eyebrow}</p>
          <h2 id="journey-heading" className="mt-3">
            {copy.journey.headline}
          </h2>
          <p className="text-lead mt-4">{copy.journey.body}</p>
        </div>

        <ol className="eth-fade-up relative mt-14 grid gap-6 lg:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-eth-blue/30 to-transparent lg:block"
            aria-hidden
          />
          {copy.journey.phases.map((phase, index) => {
            const Icon = icons[index] ?? ClipboardList;
            return (
              <li
                key={phase.title}
                className="eth-surface-hover relative p-6 text-center sm:p-8 lg:text-left"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="eth-icon-badge mx-auto lg:mx-0">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-eth-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 !normal-case !tracking-normal">{phase.title}</h3>
                <p className="mt-3 text-eth-slate">{phase.text}</p>
              </li>
            );
          })}
        </ol>

        <div className="eth-fade-up mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button href={site.routes.inquiry}>{copy.ctas.inquire}</Button>
          <Button href={site.phoneHref} variant="secondary">
            {copy.ctas.call} {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
