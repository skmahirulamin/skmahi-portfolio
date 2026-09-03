import { ArrowRight, Sparkles, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#08080b]" />
        <div
          className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-cyan-500/20 blur-[120px] animate-float-slow"
          aria-hidden
        />
        <div
          className="absolute -right-32 top-40 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/15 blur-[120px] animate-float-slow-2"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-600/15 blur-[120px] animate-float-slow"
          aria-hidden
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          aria-hidden
        />

        {/* Floating orbs */}
        <div className="absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_20px_4px_rgba(110,231,231,0.5)] animate-float-slow" aria-hidden />
        <div className="absolute right-[18%] top-[24%] h-1.5 w-1.5 rounded-full bg-fuchsia-300/80 shadow-[0_0_16px_3px_rgba(240,171,252,0.5)] animate-float-slow-2" aria-hidden />
        <div className="absolute right-[28%] bottom-[20%] h-2.5 w-2.5 rounded-full bg-violet-300/70 shadow-[0_0_22px_4px_rgba(196,181,253,0.5)] animate-float-slow" aria-hidden />

        {/* Rotating ring */}
        <div className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden>
          <div className="h-72 w-72 animate-spin-slow rounded-full border border-white/10" style={{ borderStyle: 'dashed' }} />
        </div>
      </div>

      <div className="section-pad mx-auto w-full max-w-7xl pt-28 pb-20 md:pt-32">
        <div className="max-w-3xl">
          <div
            className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Digital Creator & Multimedia Freelancer
          </div>

          <p
            className="reveal mb-3 text-2xl font-medium text-white/70 md:text-3xl"
            data-reveal-delay="60"
          >
            Hi, I&apos;m Mahi.
          </p>

          <h1
            className="reveal text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
            data-reveal-delay="120"
          >
            I Create <span className="animated-gradient-text">Digital Experiences.</span>
          </h1>

          <p
            className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
            data-reveal-delay="200"
          >
            I design, build and create — from interactive web experiences and
            browser games to graphic design, video editing and AI-powered
            creative projects.
          </p>

          <div
            className="reveal mt-10 flex flex-col gap-4 sm:flex-row"
            data-reveal-delay="280"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
            >
              Explore My Work
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-white" />
              Let&apos;s Work Together
            </a>
          </div>

          <div
            className="reveal mt-16 flex items-center gap-8 text-white/50"
            data-reveal-delay="360"
          >
            <div>
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-sm">Disciplines</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="text-sm">Ideas</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-3xl font-bold text-white">1</p>
              <p className="text-sm">Mission</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70 md:flex"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 rounded-full bg-white/60" style={{ animation: 'float-slow 2s ease-in-out infinite' }} />
        </span>
      </a>
    </section>
  );
}
