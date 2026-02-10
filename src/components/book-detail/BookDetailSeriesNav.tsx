import { Link } from "react-router-dom";
import { books } from "@/data/books";
import type { Book } from "@/data/books";

interface BookDetailSeriesNavProps {
  currentBook: Book;
}

const BookDetailSeriesNav = ({ currentBook }: BookDetailSeriesNavProps) => {
  return (
    <section id="series" className="relative py-24 md:py-32 px-6 grain-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(28_12%_14%)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px divider-embossed" />

      <div className="relative z-10 container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <p className="text-flame font-body text-sm uppercase tracking-[0.3em] font-medium">
            More in the Series
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase drop-shadow-[0_2px_8px_hsl(0_0%_0%_/_0.5)]">
            Twelve Books. Zero Mercy.
          </h2>
          <div className="w-16 divider-embossed mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 px-2">
          {books.map((book) => {
            const isCurrent = book.slug === currentBook.slug;
            return (
              <Link
                key={book.slug}
                to={`/book/${book.slug}`}
                className={`group text-center space-y-3 transition-all duration-300 ${
                  isCurrent ? "scale-105" : "hover:scale-105"
                }`}
              >
                <div className="relative w-full aspect-[2/3]">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className={`w-full h-full object-cover rounded-sm transition-all duration-300 ${
                      isCurrent
                        ? "shadow-book ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : "shadow-md opacity-70 group-hover:opacity-100 group-hover:shadow-book"
                    }`}
                  />
                </div>
                <p
                  className={`font-body text-xs uppercase tracking-wider ${
                    isCurrent
                      ? "text-flame font-semibold"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {book.subtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px divider-embossed" />
    </section>
  );
};

export default BookDetailSeriesNav;
