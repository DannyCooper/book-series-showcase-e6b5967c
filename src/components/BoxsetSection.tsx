import nunchucksBoxset from "@/assets/nunchucks-boxset.png";

const BoxsetSection = () => {
  return (
    <section id="boxset" className="relative py-24 md:py-32 px-6 grain-overlay">
      {/* Layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(28_12%_16%_/_0.5)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(28_80%_52%_/_0.05)_0%,_transparent_50%)]" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px divider-embossed" />

      <div className="relative z-10 container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Boxset Cover */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Ambient glow */}
            <div className="absolute " />

            <div className="relative">
              <img
                src={nunchucksBoxset}
                alt="Nunchucks! The Whole Shooting Match — Complete Boxset"
                className="relative w-full h-auto rounded-sm  transition-transform duration-500 group-hover:-translate-y-1"
              />
            </div>

           
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <p className="text-flame font-body text-sm uppercase tracking-[0.3em] font-medium">
            All Twelve Books — One Package
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase leading-[0.95]">
            <span className="text-flame-gradient">The Whole</span>
            <br />
            <span className="text-parchment-gradient">Shooting Match</span>
          </h2>
          <p className="text-foreground/70 font-body text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Every prayer. Every punch. Every penance. Get the entire Nunchucks! trilogy in one 
            righteous collection — from the canals of Venice to the catacombs beneath Rome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-flame-light transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Get the Boxset
            </a>
            <a
              href="#series"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-flame-subtle text-foreground font-body font-medium text-sm uppercase tracking-wider rounded hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              View Individual Books
            </a>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px divider-embossed" />
    </section>
  );
};

export default BoxsetSection;
