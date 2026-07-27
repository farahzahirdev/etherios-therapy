import { copy } from "@/content/copy";
import { site } from "@/content/site";

export function SpravatoVideo() {
  return (
    <section aria-labelledby="video-heading" className="eth-section eth-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="eth-section-header eth-fade-up max-w-3xl">
          <p className="section-eyebrow">{copy.video.eyebrow}</p>
          <h2 id="video-heading" className="mt-3">
            {copy.video.headline}
          </h2>
          <p className="text-lead mt-4">{copy.video.body}</p>
        </div>

        <div className="eth-fade-up mx-auto mt-10 max-w-4xl overflow-hidden rounded-image shadow-card">
          <div className="relative aspect-video bg-eth-ink">
            <iframe
              src={site.spravatoVideoEmbedUrl}
              title={site.spravatoVideoTitle}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
