import { ShieldCheck } from "lucide-react";
import { copy } from "@/content/copy";

export function TrustBar() {
  return (
    <section
      aria-label="Why patients trust Etherios"
      className="relative z-[1] -mt-6 px-4 sm:-mt-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-content overflow-hidden rounded-card border border-[rgba(28,35,40,0.06)] bg-white/95 p-5 shadow-lift backdrop-blur sm:p-7">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {copy.trust.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-snug text-eth-ink-soft sm:text-[0.95rem]"
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-eth-blue-soft text-eth-blue">
                <ShieldCheck className="h-4 w-4" aria-hidden />
              </span>
              <span className="pt-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
