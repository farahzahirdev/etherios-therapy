import Image from "next/image";
import { copy } from "@/content/copy";

export function TreatmentRooms() {
  return (
    <section id="rooms" aria-labelledby="rooms-heading" className="eth-section-compact eth-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="eth-section-header eth-fade-up max-w-3xl">
          <p className="section-eyebrow">{copy.rooms.eyebrow}</p>
          <h2 id="rooms-heading" className="mt-3">
            {copy.rooms.headline}
          </h2>
          <p className="text-lead mt-4">{copy.rooms.body}</p>
        </div>

        <ul className="eth-fade-up mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.rooms.items.map((room, index) => (
            <li
              key={room.name}
              className="group"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <figure className="overflow-hidden rounded-[1.5rem] bg-white shadow-soft ring-1 ring-[rgba(28,35,40,0.05)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-card">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={`${room.name} Spravato treatment suite`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-eth-ink/75 via-eth-ink/25 to-transparent p-4 pt-16">
                    <figcaption className="font-heading text-lg font-semibold text-white">
                      {room.name}
                    </figcaption>
                  </div>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
