"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

function PatientVideoCard({
  video,
  index,
}: {
  video: (typeof site.patientVideos)[number];
  index: number;
}) {
  const [playing, setPlaying] = useState(false);

  const embedSrc = `${video.src}${video.src.includes("?") ? "&" : "?"}autoplay=true`;

  return (
    <li
      className="overflow-hidden rounded-[1.5rem] bg-eth-ink shadow-card ring-1 ring-[rgba(28,35,40,0.06)]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-video bg-eth-ink">
        {/* HD poster always sits underneath so Brightcove never flashes its 160px thumb */}
        <Image
          src={video.poster}
          alt=""
          fill
          unoptimized
          priority={index < 2}
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 560px"
        />

        {playing ? (
          <iframe
            src={embedSrc}
            title={video.title}
            className="absolute inset-0 z-[1] h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 z-[2] block w-full cursor-pointer text-left"
            aria-label={`Play ${video.title}`}
          >
            <span className="absolute inset-0 bg-gradient-to-t from-eth-ink/60 via-eth-ink/15 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-eth-blue shadow-lift transition duration-300 group-hover:scale-105 group-hover:bg-white sm:h-16 sm:w-16">
                <Play className="h-6 w-6 fill-current sm:h-7 sm:w-7" aria-hidden />
              </span>
            </span>
            <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <span className="block font-heading text-sm font-semibold text-white drop-shadow-sm sm:text-base">
                {video.title}
              </span>
            </span>
          </button>
        )}
      </div>
    </li>
  );
}

export function PatientVideos() {
  return (
    <section
      id="patient-videos"
      aria-labelledby="patient-videos-heading"
      className="eth-section"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="eth-section-header eth-fade-up max-w-3xl">
          <p className="section-eyebrow">{copy.patientVideos.eyebrow}</p>
          <h2 id="patient-videos-heading" className="mt-3">
            {copy.patientVideos.headline}
          </h2>
          <p className="text-lead mt-4">{copy.patientVideos.body}</p>
        </div>

        <ul className="eth-fade-up mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {site.patientVideos.map((video, index) => (
            <PatientVideoCard key={video.id} video={video} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
