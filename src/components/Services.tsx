import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="eth-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="eth-section-header eth-fade-up max-w-3xl">
          <p className="section-eyebrow">{copy.services.eyebrow}</p>
          <h2 id="services-heading" className="mt-3">
            {copy.services.headline}
          </h2>
          <p className="text-lead mt-4">{copy.services.body}</p>
        </div>

        <ul className="eth-fade-up mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.services.items.map((service, index) => (
            <li
              key={service.title}
              className="eth-surface-hover group p-6 text-center sm:text-left"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-eth-blue to-eth-purple transition-all duration-300 group-hover:w-14 sm:mx-0" />
              <h3 className="!normal-case !tracking-normal">{service.title}</h3>
              <p className="mt-2 text-eth-slate">{service.text}</p>
            </li>
          ))}
        </ul>

        <div className="eth-fade-up mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button href={site.routes.bookConsult}>{copy.ctas.book}</Button>
          <Button href={site.routes.inquiry} variant="secondary">
            {copy.ctas.inquire}
          </Button>
        </div>
      </div>
    </section>
  );
}
