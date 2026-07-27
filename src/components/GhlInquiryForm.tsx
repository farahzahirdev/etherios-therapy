"use client";

import Script from "next/script";
import { site } from "@/content/site";

const form = site.ghl.inquiryForm;

/**
 * Matches Badlands / Rogue Valley GHL form sizing:
 * wrapper constrains width; card caps height so a tall iframe scrolls inside.
 */
export function GhlInquiryForm() {
  const ready = Boolean(form.id && form.src);

  if (!ready) {
    return (
      <div className="eth-surface flex min-h-[22rem] flex-col items-center justify-center gap-3 p-8 text-center">
        <p className="font-heading text-lg font-semibold text-eth-ink">
          Inquiry form coming soon
        </p>
        <p className="max-w-sm text-sm text-eth-slate">
          The Spravato® New Web Inquiry form will appear here once the GHL embed is connected.
          Meanwhile, call us or book a free consultation.
        </p>
        <a href={site.phoneHref} className="btn-primary mt-2">
          Call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="formWrapper w-full min-w-0 max-w-full sm:min-w-[400px]">
      <div className="formCard max-h-[1600px] overflow-y-auto overscroll-contain rounded-[20px] p-0 max-md:max-h-[900px] max-[480px]:max-h-[min(100dvh,900px)]">
        <iframe
          src={form.src}
          id={form.iframeId}
          title={form.title}
          data-layout={"{'id':'INLINE'}"}
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={form.name}
          data-height={String(form.height)}
          data-layout-iframe-id={form.iframeId}
          data-form-id={form.id}
          className="block w-full border-0"
          style={{ width: "100%", height: form.height }}
        />
        <Script src={form.scriptSrc} strategy="lazyOnload" />
      </div>
    </div>
  );
}
