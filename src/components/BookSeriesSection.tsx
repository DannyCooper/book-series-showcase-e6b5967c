import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";

const books = [
  {
    title: "The Obsidian Chronicle",
    subtitle: "Book One",
    cover: bookCover1,
    description: "Where it all begins. A thief with a stolen rune discovers the truth can shatter empires.",
    available: true,
  },
  {
    title: "Ashes of the Veil",
    subtitle: "Book Two",
    cover: bookCover2,
    description: "The veil between worlds thins. Allies become enemies, and the dead refuse to stay buried.",
    available: true,
  },
  {
    title: "The Last Ember",
    subtitle: "Book Three",
    cover: bookCover3,
    description: "The final battle approaches. Only one ember remains to ignite the flame of hope.",
    available: false,
  },
];

const BookSeriesSection = () => {
  return (
    <section id="series" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(220_18%_12%)_0%,_transparent_60%)]" />

      <div className="relative container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] font-medium">
            The Complete Saga
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Three Books. One Epic Journey.
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
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
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="w-48 sm:w-56 rounded shadow-xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                />
                {!book.available && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] rounded flex items-center justify-center">
                    <span className="text-gold font-body text-xs uppercase tracking-[0.2em] font-semibold bg-background/80 px-4 py-2 rounded">
                      Coming 2026
                    </span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-gold font-body text-xs uppercase tracking-[0.2em] font-medium">
                  {book.subtitle}
                </p>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {book.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mx-auto">
                  {book.description}
                </p>
              </div>
              {book.available && (
                <button className="inline-flex items-center gap-2 text-gold font-body text-sm font-medium hover:text-gold-light transition-colors duration-300 uppercase tracking-wider">
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
    </section>
  );
};

export default BookSeriesSection;
