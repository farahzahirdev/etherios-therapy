import { Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { GhlCalendarEmbed } from "./GhlCalendarEmbed";

export function BookConsult() {
  return (
    <section
      id="book-consult"
      className="eth-section eth-section-alt"
      aria-labelledby="book-heading"
    >
      <div className="mx-auto grid max-w-content items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="eth-fade-up space-y-5 text-center lg:sticky lg:top-28 lg:text-left">
          <p className="section-eyebrow">{copy.book.eyebrow}</p>
          <h2 id="book-heading">{copy.book.headline}</h2>
          <p className="text-lead mx-auto max-w-xl lg:mx-0">{copy.book.body}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start">
            <Button href={site.phoneHref} variant="secondary">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                {copy.ctas.call} {site.phone}
              </span>
            </Button>
            <Button href={site.routes.inquiry} variant="primary">
              {copy.ctas.inquire}
            </Button>
          </div>
        </div>

        <div className="eth-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="overflow-hidden rounded-card border border-[rgba(28,35,40,0.08)] bg-white p-2 shadow-lift sm:p-3">
            <GhlCalendarEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
