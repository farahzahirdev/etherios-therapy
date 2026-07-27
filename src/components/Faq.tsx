"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { copy } from "@/content/copy";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[rgba(28,35,40,0.06)] bg-white transition-shadow duration-300 ${
        open ? "shadow-card" : "shadow-soft"
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-eth-ink transition hover:text-eth-blue sm:px-6 sm:text-lg"
          onClick={onToggle}
        >
          <span className="!normal-case !tracking-normal">{question}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-eth-blue transition-transform duration-300 ease-out motion-reduce:transition-none ${
              open ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={`px-5 pb-5 pr-10 text-eth-slate transition-[opacity,transform,margin] duration-300 ease-out motion-reduce:transition-none sm:px-6 ${
              open
                ? "mt-0 translate-y-0 opacity-100"
                : "-mt-1 -translate-y-1 opacity-0"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const items = copy.faq.items;

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="eth-section eth-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="eth-section-header eth-fade-up">
          <p className="section-eyebrow">{copy.faq.eyebrow}</p>
          <h2 id="faq-heading" className="mt-3">
            {copy.faq.headline}
          </h2>
        </div>

        {/* Mobile: single column */}
        <div className="eth-fade-up mx-auto mt-12 max-w-3xl space-y-3 lg:hidden">
          {items.map((item, index) => (
            <FaqItem
              key={item.q}
              question={item.q}
              answer={item.a}
              open={open.has(index)}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

        {/* Desktop: two independent stacks so row heights don't couple */}
        <div className="eth-fade-up mx-auto mt-12 hidden max-w-6xl grid-cols-2 gap-4 lg:grid">
          <div className="space-y-3">
            {items.map((item, index) => {
              if (index % 2 !== 0) return null;
              return (
                <FaqItem
                  key={item.q}
                  question={item.q}
                  answer={item.a}
                  open={open.has(index)}
                  onToggle={() => toggle(index)}
                />
              );
            })}
          </div>
          <div className="space-y-3">
            {items.map((item, index) => {
              if (index % 2 === 0) return null;
              return (
                <FaqItem
                  key={item.q}
                  question={item.q}
                  answer={item.a}
                  open={open.has(index)}
                  onToggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
