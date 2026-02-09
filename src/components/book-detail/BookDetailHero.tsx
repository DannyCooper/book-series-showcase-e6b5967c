import { useState } from "react";
import type { Book } from "@/data/books";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BookDetailHeroProps {
  book: Book;
}

const BookDetailHero = ({ book }: BookDetailHeroProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden px-6 py-20 grain-overlay">
      {/* Multi-layered background */}
      <div className="absolute inset-0 bg-parchment-vignette" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(28_12%_16%_/_0.5)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(28_80%_52%_/_0.06)_0%,_transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Book Cover */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="absolute -inset-8 bg-[radial-gradient(circle,_hsl(28_80%_52%_/_0.15)_0%,_transparent_70%)] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative w-full aspect-[2/3]">
              <img
                src={book.cover}
                alt={`${book.title} cover`}
                className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-book animate-scale-in transition-transform duration-500 group-hover:-translate-y-1"
              />
              <div className="absolute top-2 -left-1 bottom-2 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent rounded-l" />
            </div>

            <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-widest px-4 py-2 rounded shadow-lg shadow-black/40">
              {book.subtitle}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
          <p className="text-flame font-body text-sm uppercase tracking-[0.3em] font-medium opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            The Nunchucks! Series — {book.subtitle}
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.95] opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-flame-gradient">
              {book.title.split(" ").slice(0, -1).join(" ")}
            </span>
            <br />
            <span className="text-parchment-gradient">
              {book.title.split(" ").slice(-1)[0]}
            </span>
          </h1>
          <p className="text-foreground/70 font-body text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            {book.description}
          </p>
          <p className="text-muted-foreground font-body text-sm uppercase tracking-wider opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            By Dominicka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <button className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-flame-light transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                  Get This Book
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4 bg-surface-elevated border-border/60">
                <div className="space-y-3">
                  <p className="text-flame font-body text-xs uppercase tracking-wider font-medium mb-4">
                    Choose Your Retailer
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-secondary hover:bg-secondary/80 rounded transition-colors duration-200 group"
                    onClick={() => setPopoverOpen(false)}
                  >
                    <span className="font-body text-sm uppercase tracking-wider text-foreground group-hover:text-flame">
                      Amazon
                    </span>
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-flame transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-secondary hover:bg-secondary/80 rounded transition-colors duration-200 group"
                    onClick={() => setPopoverOpen(false)}
                  >
                    <span className="font-body text-sm uppercase tracking-wider text-foreground group-hover:text-flame">
                      Kobo
                    </span>
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-flame transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-secondary hover:bg-secondary/80 rounded transition-colors duration-200 group"
                    onClick={() => setPopoverOpen(false)}
                  >
                    <span className="font-body text-sm uppercase tracking-wider text-foreground group-hover:text-flame">
                      Curios
                    </span>
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-flame transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </PopoverContent>
            </Popover>
            
              <a
                href="#boxset"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-flame-subtle text-foreground font-body font-medium text-sm uppercase tracking-wider rounded hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Get the FullBoxset
              </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailHero;
