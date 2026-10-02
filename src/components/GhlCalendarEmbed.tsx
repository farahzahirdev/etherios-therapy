import { site } from "@/content/site";

const calendar = site.ghl.calendar;
const CALENDAR_HEIGHT = 720;

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

  /*
    Static iframe in markup so the browser starts fetching the widget on first
    paint. form_embed.js is loaded once in layout.tsx with afterInteractive so
    the resize listener is ready before the widget posts its height — lazyOnload
    often loses that race on mobile and leaves a blank calendar until refresh.
  */
  return (
    <div className="w-full overflow-hidden rounded-[20px] bg-white">
      <iframe
        src={calendar.src}
        id={calendar.iframeId}
        title={calendar.title}
        allow="payment"
        scrolling="no"
        className="block w-full border-0 bg-transparent"
        style={{
          width: "100%",
          height: CALENDAR_HEIGHT,
          minHeight: CALENDAR_HEIGHT,
          overflow: "hidden",
        }}
      />
    </div>
  );
}
