import Image from "next/image";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(28,35,40,0.08)] bg-eth-mist">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 text-center sm:px-6 sm:text-left lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <Image
            src={site.logo}
            alt={site.name}
            width={286}
            height={100}
            className="mx-auto h-[3.75rem] w-auto sm:mx-0"
          />
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-eth-slate sm:mx-0">
            {copy.footer.tagline}
          </p>
        </div>

        <div className="space-y-2 text-sm text-eth-slate">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-eth-purple">
            Visit
          </p>
          {site.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="pt-2">
            <a href={site.phoneHref} className="font-semibold text-eth-blue hover:underline">
              {site.phone}
            </a>
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-eth-purple">
            Get started
          </p>
          <a
            href={site.routes.bookConsult}
            className="block text-eth-ink-soft transition hover:text-eth-blue"
          >
            {copy.ctas.book}
          </a>
          <a
            href={site.routes.inquiry}
            className="block text-eth-ink-soft transition hover:text-eth-blue"
          >
            {copy.ctas.inquire}
          </a>
          <a
            href={site.phoneHref}
            className="block text-eth-ink-soft transition hover:text-eth-blue"
          >
            {copy.ctas.call} {site.phone}
          </a>
          <a
            href={site.mapsUrl}
            className="block text-eth-ink-soft transition hover:text-eth-blue"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>
      </div>

      <div className="border-t border-[rgba(28,35,40,0.08)]">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-4 py-5 text-center text-xs text-eth-slate sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <p>
            © {year} {site.name}. {copy.footer.rights}
          </p>
          <p>Spravato® is a registered trademark of Janssen Pharmaceuticals, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
