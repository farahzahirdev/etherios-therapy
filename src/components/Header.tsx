"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

const navLinks = [
  { href: "/#spravato", label: copy.header.nav.spravato },
  { href: "/#expect", label: copy.header.nav.expect },
  { href: "/#journey", label: copy.header.nav.journey },
  { href: "/#insurance", label: copy.header.nav.insurance },
  { href: "/#faq", label: copy.header.nav.faq },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const scrollY = window.scrollY;
    const { style } = document.body;
    const prev = {
      overflow: style.overflow,
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
    };
    style.overflow = "hidden";
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      style.overflow = prev.overflow;
      style.position = prev.position;
      style.top = prev.top;
      style.left = prev.left;
      style.right = prev.right;
      style.width = prev.width;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div
        className={`eth-nav-wrap ${open ? "z-[70]" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <nav
          className={`eth-nav-bar ${scrolled ? "is-scrolled" : ""}`}
          aria-label="Main"
        >
          <a
            href="/"
            className="relative z-10 flex shrink-0 items-center"
            aria-label={`${site.name} home`}
          >
            <Image
              src={site.logo}
              alt={site.name}
              width={286}
              height={100}
              className="h-[2.75rem] w-auto sm:h-[3.1rem]"
              priority
            />
          </a>

          <div className="eth-nav-pill">
            <div className="flex items-center gap-0.5 px-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link rounded-full px-3 py-2">
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={site.routes.bookConsult}
              className="inline-flex items-center rounded-full bg-eth-blue px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-eth-blue-dark"
            >
              {copy.header.bookCta}
            </a>
            <a
              href={site.routes.inquiry}
              className="inline-flex items-center rounded-full border border-[rgba(28,35,40,0.12)] bg-transparent px-4 py-2.5 text-sm font-semibold text-eth-ink transition hover:bg-eth-mist hover:text-eth-blue"
            >
              {copy.header.inquiryCta}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(28,35,40,0.12)] py-1.5 pl-3.5 pr-1.5 text-sm font-semibold text-eth-ink transition hover:bg-eth-mist"
              aria-label={`Call ${site.phone}`}
            >
              <span className="hidden xl:inline">{copy.ctas.call}</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-eth-blue text-white">
                <Phone className="h-3.5 w-3.5" aria-hidden />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="relative z-[80] inline-flex h-11 w-11 items-center justify-center rounded-full bg-eth-mist text-eth-ink lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div
            id="mobile-nav"
            className="absolute left-[clamp(1rem,3vw,1.75rem)] right-[clamp(1rem,3vw,1.75rem)] top-full z-[70] mt-2 flex flex-col gap-1 rounded-3xl border border-[rgba(28,35,40,0.1)] bg-white px-4 py-4 shadow-lift lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-xl px-3 py-3 text-base font-semibold text-eth-ink hover:bg-eth-mist"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.routes.bookConsult}
              onClick={close}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-eth-blue px-5 py-3 text-sm font-semibold text-white"
            >
              {copy.header.bookCta}
            </a>
            <a
              href={site.routes.inquiry}
              onClick={close}
              className="inline-flex items-center justify-center rounded-full border-2 border-[rgba(28,35,40,0.12)] px-5 py-3 text-sm font-semibold text-eth-ink"
            >
              {copy.header.inquiryCta}
            </a>
            <a
              href={site.phoneHref}
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[rgba(28,35,40,0.12)] px-5 py-3 text-sm font-semibold text-eth-ink"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {copy.ctas.call} {site.phone}
            </a>
          </div>
        )}
      </div>
    </>
  );
}
