import { useState } from "react";
import type { Book } from "@/data/books";

interface BookDetailExcerptProps {
  book: Book;
}

const BookDetailExcerpt = ({ book }: BookDetailExcerptProps) => {
  const [expanded, setExpanded] = useState(false);

  if (!book.excerpt) return null;

  const paragraphs = book.excerpt.split("\n\n");
  const previewCount = 2;
  const showToggle = paragraphs.length > previewCount;
  const visibleParagraphs = expanded
    ? paragraphs
    : paragraphs.slice(0, previewCount);

  return (
    <section
      id="excerpt"
      className="relative py-24 md:py-32 px-6 grain-overlay"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(28_80%_52%_/_0.04)_0%,_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px divider-embossed" />

      <div className="relative z-10 container mx-auto max-w-2xl space-y-10">
        <div className="text-center space-y-4">
          <p className="text-flame font-body text-sm uppercase tracking-[0.3em] font-medium">
            Read Chapter One
          </p>
          <div className="w-16 divider-embossed mx-auto" />
        </div>

        <div className="bg-card/60 border border-border/50 rounded p-8 sm:p-10 inner-glow space-y-6 relative">
          {visibleParagraphs.map((p, i) => (
            <p
              key={i}
              className="text-foreground/75 font-serif text-base sm:text-lg leading-relaxed italic"
            >
              {p}
            </p>
          ))}

          {!expanded && showToggle && (
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card/90 to-transparent rounded-b pointer-events-none" />
          )}
        </div>

        {showToggle && (
          <div className="text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-flame font-body text-sm font-medium hover:text-flame-light transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5"
            >
              {expanded ? "Show Less" : "Continue Reading"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px divider-embossed" />
    </section>
  );
};

export default BookDetailExcerpt;
