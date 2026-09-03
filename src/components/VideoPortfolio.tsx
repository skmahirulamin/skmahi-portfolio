import { Play } from 'lucide-react';

const videos = [
  { title: 'Cinematic Story', category: 'Filmmaking', url: 'https://images.pexels.com/photos/5274483/pexels-photo-5274483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Editing Breakdown', category: 'Tutorial', url: 'https://images.pexels.com/photos/32774292/pexels-photo-32774292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Studio Session', category: 'Behind The Scenes', url: 'https://images.pexels.com/photos/5642754/pexels-photo-5642754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Timeline Craft', category: 'Video Edit', url: 'https://images.pexels.com/photos/29505140/pexels-photo-29505140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'On Location', category: 'Production', url: 'https://images.pexels.com/photos/3062554/pexels-photo-3062554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Light & Shadow', category: 'Creative', url: 'https://images.pexels.com/photos/5642757/pexels-photo-5642757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export default function VideoPortfolio() {
  return (
    <section id="videos" className="relative section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="reveal mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            Videos & Storytelling
          </p>
          <h2 className="reveal text-4xl font-bold leading-tight md:text-5xl" data-reveal-delay="60">
            Stories told through motion.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <article
              key={v.title}
              className="reveal group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e13]"
              data-reveal-delay={i * 70}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={v.url}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-white/60 group-hover:bg-white/20">
                    <span className="absolute inset-0 rounded-full bg-white/20" style={{ animation: 'pulse-ring 2.5s ease-out infinite' }} />
                    <Play className="h-6 w-6 fill-white text-white transition-transform duration-300 group-hover:scale-110" />
                  </span>
                </div>

                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                  {v.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-cyan-300">
                  {v.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
