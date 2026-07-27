import Image from "next/image";
import { copy } from "@/content/copy";

export function Providers() {
  return (
    <section
      id="providers"
      aria-labelledby="providers-heading"
      className="eth-section-compact eth-section-alt !pb-10 sm:!pb-12 lg:!pb-14"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="eth-section-header eth-fade-up max-w-3xl">
          <p className="section-eyebrow">{copy.providers.eyebrow}</p>
          <h2 id="providers-heading" className="mt-3">
            {copy.providers.headline}
          </h2>
          <p className="text-lead mt-4">{copy.providers.body}</p>
        </div>

        <ul className="mt-10 space-y-8 lg:mt-12 lg:space-y-10">
          {copy.providers.items.map((provider, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <li
                key={provider.name}
                className={`eth-fade-up flex flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:gap-10 ${
                  imageFirst ? "" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[4/5] w-full max-w-[220px] shrink-0 overflow-hidden rounded-[1.5rem] bg-white shadow-soft ring-1 ring-[rgba(28,35,40,0.05)] sm:max-w-[240px]">
                  <Image
                    src={provider.image}
                    alt={provider.alt}
                    fill
                    className="object-cover object-top"
                    sizes="240px"
                  />
                </div>

                <div
                  className={`max-w-xl flex-1 space-y-3 text-center sm:space-y-4 ${
                    imageFirst ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <h3 className="!normal-case !tracking-normal text-2xl sm:text-[1.75rem]">
                    {provider.name}
                  </h3>
                  <p className="text-sm font-semibold tracking-wide text-eth-purple sm:text-base">
                    {provider.role}
                  </p>
                  <p className="text-eth-slate leading-relaxed sm:text-[1.0625rem]">
                    {provider.bio}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
