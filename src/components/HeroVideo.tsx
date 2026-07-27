"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

type HeroVideoProps = {
  src: string;
  poster: string;
};

/**
 * Streams the original Etherios Squarespace background video via HLS.
 * Falls back to the poster image if HLS isn't supported.
 */
export function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        maxBufferLength: 20,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        void video.play().catch(() => {
          /* autoplay can be blocked; poster remains visible */
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      void video.play().catch(() => undefined);
    }

    return () => {
      hls?.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden
    />
  );
}
