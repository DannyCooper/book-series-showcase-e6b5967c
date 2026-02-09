import { Link } from "react-router-dom";

const BookDetailNav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg font-bold uppercase tracking-wider text-foreground hover:text-flame transition-colors duration-300"
        >
          Nunchucks!
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/#series"
            className="hidden sm:inline-flex text-muted-foreground font-body text-sm uppercase tracking-wider hover:text-foreground transition-colors duration-300"
          >
            Series
          </Link>
          <Link
            to="/#boxset"
            className="hidden sm:inline-flex text-muted-foreground font-body text-sm uppercase tracking-wider hover:text-foreground transition-colors duration-300"
          >
            Boxset
          </Link>
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-5 py-2 bg-primary text-primary-foreground font-display font-semibold text-xs uppercase tracking-wider rounded hover:bg-flame-light transition-all duration-300 shadow-md shadow-primary/20"
          >
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default BookDetailNav;
