import nunMoreDeadlyCover from "@/assets/nun-more-deadly-cover.jpg";
import nunTooHolyCover from "@/assets/nun-too-holy-cover.jpg";
import nunTheWiserCover from "@/assets/nun-the-wiser-cover.jpg";

const books = [
  {
    title: "Nun More Deadly",
    subtitle: "Book One",
    cover: nunMoreDeadlyCover,
    description: "A nun with a grudge and a rosary full of fury takes on Venice's most dangerous criminals.",
    available: true,
  },
  {
    title: "Nun Too Holy",
    subtitle: "Book Two",
    cover: nunTooHolyCover,
    description: "Deadlier. Holier. Silentier. The mountains hold secrets — and she's armed to confess them all.",
    available: true,
  },
  {
    title: "Nun the Wiser",
    subtitle: "Book Three",
    cover: nunTheWiserCover,
    description: "The action is baked in. When the catacombs call, wisdom takes a back seat to explosives.",
    available: false,
  },
];

const BookSeriesSection = () => {
  return (
    <section id="series" className="relative py-24 md:py-32 px-6 grain-overlay">
      {/* Layered background for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(28_12%_14%)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(30_15%_7%)_0%,_transparent_40%)]" />

      {/* Ambient gold light from top */}
      <div className="absolute top-0 left-0 right-0 h-px divider-embossed" />

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <p className="text-flame font-body text-sm uppercase tracking-[0.3em] font-medium">
            The Nunchucks! Series
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase drop-shadow-[0_2px_8px_hsl(0_0%_0%_/_0.5)]">
            Three Books. Zero Mercy.
          </h2>
          <div className="w-16 divider-embossed mx-auto mt-6" />
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {books.map((book, index) => (
            <div
              key={book.title}
              className="group text-center space-y-5"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative inline-block mx-auto">
                {/* Ambient glow behind each book */}
                <div className="absolute -inset-6 bg-[radial-gradient(circle,_hsl(28_80%_52%_/_0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="w-48 sm:w-56 rounded shadow-book transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[4px_4px_0px_0px_hsl(30_12%_6%),8px_8px_0px_0px_hsl(30_12%_4%),0_30px_60px_-12px_hsl(0_0%_0%_/_0.7),0_0_50px_-5px_hsl(28_80%_52%_/_0.25)]"
                  />
                  {/* Spine edge */}
                  <div className="absolute top-1 -left-0.5 bottom-1 w-0.5 bg-gradient-to-b from-transparent via-primary/15 to-transparent rounded-l" />
                </div>

                {!book.available && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] rounded flex items-center justify-center">
                    <span className="text-flame font-body text-xs uppercase tracking-[0.2em] font-semibold bg-background/80 px-4 py-2 rounded border border-primary/20 shadow-lg">
                      Coming 2026
                    </span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-flame font-body text-xs uppercase tracking-[0.2em] font-medium">
                  {book.subtitle}
                </p>
                <h3 className="text-xl font-display font-semibold text-foreground uppercase drop-shadow-[0_1px_3px_hsl(0_0%_0%_/_0.4)]">
                  {book.title}
                </h3>
                <p className="text-muted-foreground font-serif text-sm leading-relaxed max-w-xs mx-auto italic">
                  {book.description}
                </p>
              </div>
              {book.available && (
                <button className="inline-flex items-center gap-2 text-flame font-body text-sm font-medium hover:text-flame-light transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5">
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px divider-embossed" />
    </section>
  );
};

export default BookSeriesSection;
