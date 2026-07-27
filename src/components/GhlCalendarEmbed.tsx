"use client";

import Script from "next/script";
import { site } from "@/content/site";

const calendar = site.ghl.calendar;

export function GhlCalendarEmbed() {
  const ready = Boolean(calendar.id && calendar.src);

  if (!ready) {
    return (
      <div className="eth-surface flex min-h-[22rem] flex-col items-center justify-center gap-3 p-8 text-center">
        <p className="font-heading text-lg font-semibold text-eth-ink">
          Calendar coming soon
        </p>
        <p className="max-w-sm text-sm text-eth-slate">
          The free 10-minute consultation calendar will appear here once the GHL booking
          widget is connected.
        </p>
        <a href={site.phoneHref} className="btn-primary mt-2">
          Call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-[20px] bg-white">
      <iframe
        src={calendar.src}
        id={calendar.iframeId}
        title={calendar.title}
        allow="payment"
        scrolling="no"
        className="block w-full border-0"
        style={{ width: "100%", minHeight: 720, overflow: "hidden" }}
      />
      <Script src={calendar.scriptSrc} strategy="lazyOnload" />
    </div>
  );
}
