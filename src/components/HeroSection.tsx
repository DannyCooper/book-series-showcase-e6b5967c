import bookCover1 from "@/assets/book-cover-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(40_70%_55%_/_0.04)_0%,_transparent_70%)]" />

      <div className="relative z-10 container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Book Cover */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-gold-dark/10 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={bookCover1}
              alt="The Obsidian Chronicle - Book One"
              className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded shadow-2xl shadow-black/60 glow-gold animate-scale-in"
            />
            <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-widest px-4 py-2 rounded">
              Book One
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] font-medium opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A Dark Fantasy Saga
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-gold-gradient">The Obsidian</span>
            <br />
            Chronicle
          </h1>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            In a world where shadows breathe and ancient runes hold the key to salvation, one reluctant hero must unravel the secrets buried beneath an empire of lies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="#series"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold-light transition-colors duration-300"
            >
              Explore the Series
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gold-subtle text-foreground font-body font-medium text-sm uppercase tracking-wider rounded hover:bg-secondary transition-colors duration-300"
            >
              Join the Circle
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
