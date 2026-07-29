"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { CheckCircle2, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

const calendar = site.ghl.calendar;
const STORAGE_KEY = `etherios-booked:${calendar.id}`;
const BOOKED_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

/** Height below this means the GHL widget collapsed after submit (the “white bar”). */
const COLLAPSED_HEIGHT_PX = 120;
/** Only treat a collapse as “booked” after the widget has fully rendered once. */
const RENDERED_HEIGHT_PX = 400;

function isTrustedGhlOrigin(origin: string): boolean {
  return (
    origin.includes("4tms.com") ||
    origin.includes("leadconnectorhq.com") ||
    origin.includes("msgsndr.com") ||
    origin.includes("gohighlevel.com")
  );
}

function isBookingCompleteMessage(data: unknown): boolean {
  const haystack = (() => {
    if (typeof data === "string") return data;
    if (Array.isArray(data)) return data.map(String).join(" ");
    if (data && typeof data === "object") {
      const record = data as Record<string, unknown>;
      return [record.type, record.event, record.name, record.action]
        .filter(Boolean)
        .map(String)
        .join(" ");
    }
    return "";
  })();

  const normalized = haystack.toLowerCase();
  return (
    normalized.includes("booking-complete") ||
    normalized.includes("booking_complete") ||
    normalized.includes("appointment_booked") ||
    normalized.includes("appointment-booked")
  );
}

/** Parse iframe-resizer style messages: `prefix:id:height:width:type`. */
function readResizerHeight(data: unknown): number | null {
  if (typeof data !== "string" || !data.includes(":")) return null;
  const parts = data.split(":");
  if (parts.length < 4) return null;
  const height = Number.parseFloat(parts[parts.length - 3] ?? "");
  return Number.isFinite(height) ? height : null;
}

function readStoredBooked(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { at?: number };
    if (!parsed.at || Date.now() - parsed.at > BOOKED_TTL_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function writeStoredBooked() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ at: Date.now() }));
  } catch {
    // ignore quota / private mode
  }
}

function clearStoredBooked() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

/** Prefer the height GHL’s resizer writes onto the iframe style. */
function readReportedHeight(iframe: HTMLIFrameElement): number | null {
  const styleHeight = Number.parseFloat(iframe.style.height || "");
  return Number.isFinite(styleHeight) ? styleHeight : null;
}

function BookingSuccess({ onBookAgain }: { onBookAgain: () => void }) {
  return (
    <div
      className="flex min-h-[22rem] flex-col items-center justify-center gap-4 px-6 py-12 text-center"
      role="status"
      aria-live="polite"
    >
      <span className="inline-flex rounded-full bg-eth-blue-soft p-3 text-eth-blue">
        <CheckCircle2 className="h-8 w-8" aria-hidden />
      </span>
      <div className="space-y-2">
        <p className="font-heading text-xl font-semibold text-eth-ink sm:text-2xl">
          {copy.book.successTitle}
        </p>
        <p className="mx-auto max-w-sm text-sm text-eth-slate sm:text-base">
          {copy.book.successBody}
        </p>
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <a
          href={site.phoneHref}
          className="btn-secondary inline-flex items-center gap-2"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call {site.phone}
        </a>
        <button type="button" className="btn-primary" onClick={onBookAgain}>
          Schedule another time
        </button>
      </div>
    </div>
  );
}

export function GhlCalendarEmbed() {
  const ready = Boolean(calendar.id && calendar.src);
  const [booked, setBooked] = useState(false);
  const [embedKey, setEmbedKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasRenderedRef = useRef(false);

  const markBooked = useCallback(() => {
    writeStoredBooked();
    setBooked(true);
  }, []);

  const bookAgain = useCallback(() => {
    clearStoredBooked();
    hasRenderedRef.current = false;
    setBooked(false);
    setEmbedKey((key) => key + 1);
  }, []);

  // Restore confirmation across refreshes (GHL thank-you view collapses to a white bar).
  useEffect(() => {
    if (!ready) return;
    if (readStoredBooked()) setBooked(true);
  }, [ready]);

  useEffect(() => {
    if (!ready || booked) return;

    const onMessage = (event: MessageEvent) => {
      if (!isTrustedGhlOrigin(event.origin)) return;

      if (isBookingCompleteMessage(event.data)) {
        markBooked();
        return;
      }

      const height = readResizerHeight(event.data);
      if (height === null) return;

      if (height >= RENDERED_HEIGHT_PX) {
        hasRenderedRef.current = true;
        return;
      }

      if (hasRenderedRef.current && height < COLLAPSED_HEIGHT_PX) {
        markBooked();
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [ready, booked, markBooked]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || booked) return;

    const checkCollapsed = () => {
      const height = readReportedHeight(iframe);
      if (height === null) return;

      if (height >= RENDERED_HEIGHT_PX) {
        hasRenderedRef.current = true;
        return;
      }

      if (hasRenderedRef.current && height < COLLAPSED_HEIGHT_PX) {
        markBooked();
      }
    };

    const mutations = new MutationObserver(checkCollapsed);
    mutations.observe(iframe, {
      attributes: true,
      attributeFilter: ["style", "height"],
    });

    const resize = new ResizeObserver(checkCollapsed);
    resize.observe(iframe);
    checkCollapsed();

    // Refresh after booking often reloads a tiny thank-you iframe and never
    // reaches full calendar height — swap that white bar for the success state.
    const collapseTimers: number[] = [];
    const onLoad = () => {
      collapseTimers.push(
        window.setTimeout(() => {
          if (hasRenderedRef.current) return;
          const height = readReportedHeight(iframe);
          if (height !== null && height < COLLAPSED_HEIGHT_PX) {
            markBooked();
          }
        }, 2500),
      );
    };
    iframe.addEventListener("load", onLoad);

    return () => {
      mutations.disconnect();
      resize.disconnect();
      iframe.removeEventListener("load", onLoad);
      collapseTimers.forEach((id) => window.clearTimeout(id));
    };
  }, [booked, ready, embedKey, markBooked]);

  if (!ready) {
    return (
      <div className="flex min-h-[22rem] flex-col items-center justify-center gap-3 p-8 text-center">
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

  if (booked) {
    return <BookingSuccess onBookAgain={bookAgain} />;
  }

  return (
    <div className="w-full min-h-[22rem] overflow-hidden rounded-[20px] bg-white">
      <iframe
        key={embedKey}
        ref={iframeRef}
        src={calendar.src}
        id={`${calendar.iframeId}-${embedKey}`}
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
