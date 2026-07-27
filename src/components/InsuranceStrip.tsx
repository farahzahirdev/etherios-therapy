import Image from "next/image";

const insurers = [
  { src: "/images/insurance/selecthealth.webp", alt: "SelectHealth" },
  { src: "/images/insurance/aetna.webp", alt: "Aetna" },
  { src: "/images/insurance/united.webp", alt: "UnitedHealthcare" },
  { src: "/images/insurance/regence.webp", alt: "Regence" },
  { src: "/images/insurance/pehp.webp", alt: "PEHP" },
  { src: "/images/insurance/dmba.webp", alt: "DMBA" },
  { src: "/images/insurance/emi.webp", alt: "EMI Health" },
  { src: "/images/insurance/umr.webp", alt: "UMR" },
];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-14 px-6 sm:gap-20 sm:px-8"
      aria-hidden={ariaHidden || undefined}
    >
      {insurers.map((logo) => (
        <li key={`${ariaHidden ? "dup-" : ""}${logo.alt}`} className="shrink-0">
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={200}
            height={80}
            className={`w-auto max-w-none object-contain brightness-0 ${
              logo.alt === "Aetna"
                ? "h-6 sm:h-8"
                : "h-16 sm:h-[4.5rem]"
            }`}
          />
        </li>
      ))}
    </ul>
  );
}

export function InsuranceStrip() {
  return (
    <section
      aria-label="Insurance accepted"
      className="border-y border-[rgba(28,35,40,0.08)] bg-eth-mist py-12 sm:py-14"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <p className="text-center font-heading text-lg font-semibold tracking-tight text-eth-ink sm:text-xl lg:text-2xl">
          Insurance accepted
        </p>

        <div className="relative mt-8 overflow-hidden sm:mt-10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-eth-mist to-transparent sm:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-eth-mist to-transparent sm:w-16"
            aria-hidden
          />

          <div className="eth-marquee-track">
            <LogoTrack />
            <LogoTrack ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
