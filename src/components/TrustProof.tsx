import { copy } from "@/content/copy";

export function TrustProof() {
  return (
    <section aria-labelledby="proof-heading" className="eth-section-alt">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="eth-section-header eth-fade-up max-w-3xl">
          <p className="section-eyebrow">{copy.proof.eyebrow}</p>
          <h2 id="proof-heading" className="mt-3">
            {copy.proof.headline}
          </h2>
        </div>

        <ul className="eth-fade-up mt-12 grid gap-5 sm:grid-cols-3">
          {copy.proof.items.map((item, index) => (
            <li
              key={item.title}
              className="eth-surface-hover p-6 text-center sm:p-7 sm:text-left"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-eth-blue">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 !normal-case !tracking-normal text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-eth-slate sm:text-[0.95rem]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
