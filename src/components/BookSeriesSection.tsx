import book1 from "@/assets/1 NMD Digital HR.jpg";
import book2 from "@/assets/2 NTH Digital HR.jpg";
import book3 from "@/assets/3 NTW Digital HR.jpg";
import book4 from "@/assets/4 NYB Digital HR.jpg";
import book5 from "@/assets/5 NSP Digital HR.jpg";
import book6 from "@/assets/6 NI Digital HR.jpg";
import book7 from "@/assets/7 NBB Digital HR.jpg";
import book8 from "@/assets/8 NTA Digital HR.jpg";
import book9 from "@/assets/9 STN Digital HR.jpg";
import book10 from "@/assets/10 NBL Digital HR.jpg";
import book11 from "@/assets/11 NBS Digital HR.jpg";
import book12 from "@/assets/12 NDD Digital HR.jpg";

const books = [
  { title: "Nun More Deadly", subtitle: "Book 1", cover: book1, description: "Forgiveness is overrated. Venice's canals run red.", available: true },
  { title: "Nun Too Holy", subtitle: "Book 2", cover: book2, description: "Deadlier. Holier. Silentier. The mountains hold secrets.", available: true },
  { title: "Nun the Wiser", subtitle: "Book 3", cover: book3, description: "The action is baked in. Wisdom takes a back seat to explosives.", available: true },
  { title: "Nun of Your Business", subtitle: "Book 4", cover: book4, description: "Sisterhood is complicated. So is the Vatican.", available: true },
  { title: "Nun Shall Pass", subtitle: "Book 5", cover: book5, description: "Believing is tough. So is surviving this chapter.", available: true },
  { title: "Nun, Interrupted", subtitle: "Book 6", cover: book6, description: "#PrayForTheYouth. One nun, one phone, zero patience.", available: true },
  { title: "Nun But the Brave", subtitle: "Book 7", cover: book7, description: "Sometimes running is the answer. Sometimes it's just the start.", available: true },
  { title: "Nun of the Above", subtitle: "Book 8", cover: book8, description: "He's going to all his old haunts. The ghosts are waiting.", available: true },
  { title: "Second to Nun", subtitle: "Book 9", cover: book9, description: "When you got it, you got it. And she's got backup.", available: true },
  { title: "Nun Believable", subtitle: "Book 10", cover: book10, description: "First contact. Last nerve. The truth is out there.", available: true },
  { title: "Nun But the Script", subtitle: "Book 11", cover: book11, description: "Lights. Camera. Existential crisis. Hollywood has no idea.", available: true },
  { title: "Nun, Done and Dusted", subtitle: "Book 12", cover: book12, description: "Smite the system. The final chapter.", available: true },
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
            Twelve Books. Zero Mercy.
          </h2>
          <div className="w-16 divider-embossed mx-auto mt-6" />
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
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
                    className="w-48 sm:w-56 rounded-sm shadow-book transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_12px_30px_-6px_hsl(0_0%_0%_/_0.6),0_25px_60px_-12px_hsl(0_0%_0%_/_0.45),0_0_50px_-5px_hsl(28_80%_52%_/_0.2)]"
                  />
                  {/* Spine edge */}
                  <div className="absolute top-1 -left-0.5 bottom-1 w-0.5 bg-gradient-to-b from-transparent via-primary/15 to-transparent rounded-l" />
                </div>

                {!book.available && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] rounded-sm flex items-center justify-center">
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
                <p className="text-muted-foreground font-body text-base leading-relaxed max-w-xs mx-auto">
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
