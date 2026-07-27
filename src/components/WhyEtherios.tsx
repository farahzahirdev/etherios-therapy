import Image from "next/image";
import { Leaf, HeartHandshake, Layers } from "lucide-react";
import { copy } from "@/content/copy";

const icons = [Leaf, HeartHandshake, Layers];

export function WhyEtherios() {
  return (
    <section aria-labelledby="why-heading" className="eth-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="eth-fade-up mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="section-eyebrow">{copy.why.eyebrow}</p>
            <h2 id="why-heading" className="mt-3">
              {copy.why.headline}
            </h2>
            <p className="text-lead mx-auto mt-4 lg:mx-0">{copy.why.body}</p>

            <div className="relative mx-auto mt-8 aspect-[5/4] max-w-md overflow-hidden rounded-[1.75rem] shadow-lift lg:mx-0 lg:max-w-none">
              <Image
                src="/images/office-lobby.webp"
                alt="Etherios Therapy clinic lobby in Orem, Utah"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <ul className="eth-fade-up space-y-4" style={{ animationDelay: "100ms" }}>
            {copy.why.pillars.map((pillar, index) => {
              const Icon = icons[index] ?? Leaf;
              return (
                <li
                  key={pillar.title}
                className="eth-surface-hover flex gap-4 p-5 text-left sm:gap-5 sm:p-6"
                >
                  <span className="eth-icon-badge h-fit shrink-0">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="!normal-case !tracking-normal">{pillar.title}</h3>
                    <p className="mt-2 text-eth-slate">{pillar.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
