import nunMoreDeadlyCover from "@/assets/nun-more-deadly-cover.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background vignette */}
      <div className="absolute inset-0 bg-parchment-vignette" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(240_8%_10%_/_0.5)_0%,_transparent_70%)]" />

      <div className="relative z-10 container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Book Cover */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-flame/20 via-transparent to-flame-dark/10 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={nunMoreDeadlyCover}
              alt="Nun More Deadly - Nunchucks! Book 1"
              className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded shadow-2xl shadow-black/60 glow-flame animate-scale-in"
            />
            <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-widest px-4 py-2 rounded">
              Book One
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
          <p className="text-flame font-body text-sm uppercase tracking-[0.3em] font-medium opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            The Nunchucks! Series
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.95] opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-flame-gradient">Nun More</span>
            <br />
            <span className="text-parchment-gradient">Deadly</span>
          </h1>
          <p className="text-foreground/70 font-serif text-lg md:text-xl italic max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            Forgiveness is overrated. In a world of corruption and chaos, one nun trades prayers for nunchucks — and the sinners won't see her coming.
          </p>
          <p className="text-muted-foreground font-body text-sm uppercase tracking-wider opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            By Dominicka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="#series"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-flame-light transition-colors duration-300"
            >
              Explore the Series
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-flame-subtle text-foreground font-body font-medium text-sm uppercase tracking-wider rounded hover:bg-secondary transition-colors duration-300"
            >
              Get Updates
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <span className="text-muted-foreground font-body text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
