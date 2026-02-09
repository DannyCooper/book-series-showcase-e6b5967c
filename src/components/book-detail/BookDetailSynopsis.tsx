import type { Book } from "@/data/books";

interface BookDetailSynopsisProps {
  book: Book;
}

const BookDetailSynopsis = ({ book }: BookDetailSynopsisProps) => {
  if (!book.synopsis?.length) return null;

  const midIndex = Math.ceil(book.synopsis.length / 2);
  const firstHalf = book.synopsis.slice(0, midIndex);
  const secondHalf = book.synopsis.slice(midIndex);

  return (
    <section className="relative py-24 md:py-32 px-6 grain-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(28_80%_52%_/_0.03)_0%,_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px divider-embossed" />

      <div className="relative z-10 container mx-auto max-w-2xl space-y-10">
        <div className="text-center space-y-4">
          <p className="text-flame font-body text-sm uppercase tracking-[0.3em] font-medium">
            About This Book
          </p>
          <div className="w-16 divider-embossed mx-auto" />
        </div>

        <div className="space-y-6">
          {firstHalf.map((paragraph, i) => (
            <p
              key={i}
              className="text-foreground/80 font-serif text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {book.pullQuote && (
          <blockquote className="relative py-8 px-6 my-12">
            <div className="absolute top-0 left-0 right-0 h-px divider-embossed" />
            <div className="absolute bottom-0 left-0 right-0 h-px divider-embossed" />
            <p className="text-flame-gradient text-2xl sm:text-3xl font-display font-bold uppercase text-center leading-snug">
              ❝ {book.pullQuote} ❞
            </p>
          </blockquote>
        )}

        {secondHalf.length > 0 && (
          <div className="space-y-6">
            {secondHalf.map((paragraph, i) => (
              <p
                key={i}
                className="text-foreground/80 font-serif text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px divider-embossed" />
    </section>
  );
};

export default BookDetailSynopsis;
