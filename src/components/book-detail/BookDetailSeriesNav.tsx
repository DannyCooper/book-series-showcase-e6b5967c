import { Link } from "react-router-dom";
import { books } from "@/data/books";
import type { Book } from "@/data/books";

interface BookDetailSeriesNavProps {
  currentBook: Book;
}

const BookDetailSeriesNav = ({ currentBook }: BookDetailSeriesNavProps) => {
  const currentIndex = books.findIndex((b) => b.slug === currentBook.slug);

  return (
    <section className="relative py-24 md:py-32 px-6 grain-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(28_12%_14%)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px divider-embossed" />

      <div className="relative z-10 container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <p className="text-flame font-body text-sm uppercase tracking-[0.3em] font-medium">
            More in the Series
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase">
            Twelve Books. Zero Mercy.
          </h2>
          <div className="w-16 divider-embossed mx-auto mt-4" />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-2">
          {books.map((book, index) => {
            const isCurrent = book.slug === currentBook.slug;
            return (
              <Link
                key={book.slug}
                to={`/book/${book.slug}`}
                className={`flex-shrink-0 snap-center group text-center space-y-3 transition-all duration-300 ${
                  isCurrent ? "scale-105" : "hover:scale-105"
                }`}
              >
                <div className="relative">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className={`w-28 sm:w-32 rounded-sm transition-all duration-300 ${
                      isCurrent
                        ? "shadow-book ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : "shadow-md opacity-70 group-hover:opacity-100 group-hover:shadow-book"
                    }`}
                  />
                  {isCurrent && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(28_80%_52%_/_0.6)]" />
                  )}
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

        {/* Prev / Next navigation */}
        <div className="flex items-center justify-center gap-6">
          {currentIndex > 0 ? (
            <Link
              to={`/book/${books[currentIndex - 1].slug}`}
              className="inline-flex items-center gap-2 text-flame font-body text-sm font-medium hover:text-flame-light transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              {books[currentIndex - 1].title}
            </Link>
          ) : (
            <span />
          )}

          {currentIndex < books.length - 1 ? (
            <Link
              to={`/book/${books[currentIndex + 1].slug}`}
              className="inline-flex items-center gap-2 text-flame font-body text-sm font-medium hover:text-flame-light transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5"
            >
              {books[currentIndex + 1].title}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px divider-embossed" />
    </section>
  );
};

export default BookDetailSeriesNav;
