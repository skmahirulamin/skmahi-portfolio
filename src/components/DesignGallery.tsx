import { ArrowRight } from 'lucide-react';

const designs = [
  { title: 'Neon Geometry', url: 'https://images.pexels.com/photos/13312401/pexels-photo-13312401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', span: 'row-span-2' },
  { title: 'Chromatic Waves', url: 'https://images.pexels.com/photos/13312402/pexels-photo-13312402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Vivid Shapes', url: 'https://images.pexels.com/photos/13312399/pexels-photo-13312399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Color Flow', url: 'https://images.pexels.com/photos/13312400/pexels-photo-13312400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', span: 'col-span-2' },
  { title: 'Bold Strokes', url: 'https://images.pexels.com/photos/12808831/pexels-photo-12808831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Fluid Motion', url: 'https://images.pexels.com/photos/10022926/pexels-photo-10022926.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Expression', url: 'https://images.pexels.com/photos/8725223/pexels-photo-8725223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Textured Art', url: 'https://images.pexels.com/photos/4793492/pexels-photo-4793492.png?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export default function DesignGallery() {
  return (
    <section id="designs" className="relative section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="reveal mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
              Design Gallery
            </p>
            <h2 className="reveal text-4xl font-bold leading-tight md:text-5xl" data-reveal-delay="60">
              Graphic design that pops.
            </h2>
          </div>
          <a
            href="#contact"
            className="reveal group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            data-reveal-delay="120"
          >
            View All Designs
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4 md:gap-5">
          {designs.map((d, i) => (
            <figure
              key={d.title}
              className={`reveal group relative overflow-hidden rounded-2xl border border-white/10 ${d.span ?? ''}`}
              data-reveal-delay={i * 60}
            >
              <img
                src={d.url}
                alt={d.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-lg font-semibold text-white">{d.title}</p>
                <p className="text-xs text-white/60">Graphic Design</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
