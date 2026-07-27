import { MapPin, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { GhlInquiryForm } from "./GhlInquiryForm";

export function Inquiry() {
  return (
    <section id="inquiry" aria-labelledby="inquiry-heading" className="eth-section">
      <div className="mx-auto grid max-w-content items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="eth-fade-up mx-auto max-w-xl space-y-6 text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="section-eyebrow">{copy.inquiry.eyebrow}</p>
          <h2 id="inquiry-heading">{copy.inquiry.headline}</h2>
          <p className="text-lead mx-auto lg:mx-0">{copy.inquiry.body}</p>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-soft ring-1 ring-[rgba(28,35,40,0.05)]">
            <iframe
              title="Etherios Therapy on Google Maps"
              src={site.mapsEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="space-y-3 text-sm text-eth-slate">
            <p className="font-semibold text-eth-ink">{site.name}</p>
            <p className="inline-flex items-start justify-center gap-2 lg:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-eth-blue" aria-hidden />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-eth-blue hover:underline"
              >
                {site.address}
              </a>
            </p>
            <p className="flex justify-center lg:justify-start">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 font-semibold text-eth-blue hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="eth-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="overflow-hidden rounded-card border border-[rgba(28,35,40,0.08)] bg-white shadow-lift">
            <div className="border-b border-[rgba(28,35,40,0.08)] bg-eth-blue-soft/60 px-6 py-5 sm:px-7">
              <p className="font-heading text-lg font-semibold text-eth-ink">
                Spravato® inquiry
              </p>
              <p className="mt-1 text-sm text-eth-slate">
                Share a few details and we’ll follow up about eligibility, insurance, and next
                steps.
              </p>
            </div>
            <div className="bg-white p-0">
              <GhlInquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
