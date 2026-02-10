import { Link } from "react-router-dom";

const BookDetailNav = () => {

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-6xl px-6 py-3 sm:py-0 h-auto sm:h-14 flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0">
        <Link
          to="/"
          className="font-display text-lg font-bold uppercase tracking-wider text-foreground hover:text-flame transition-colors duration-300"
        >
          Nunchucks!
        </Link>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <a
            href="#series"
            className="inline-flex text-muted-foreground font-body uppercase tracking-wider hover:text-foreground transition-colors duration-300"
          >
            Series
          </a>
          <a
            href="#boxset"
            className="inline-flex text-muted-foreground font-body uppercase tracking-wider hover:text-foreground transition-colors duration-300"
          >
            Boxset
          </a>
          <a
            href="#newsletter"
            className="inline-flex text-muted-foreground font-body uppercase tracking-wider hover:text-foreground transition-colors duration-300"
          >
            Newsletter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default BookDetailNav;
