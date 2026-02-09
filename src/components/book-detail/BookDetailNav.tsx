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
          <a
            href="#series"
            className="hidden sm:inline-flex text-muted-foreground font-body text-sm uppercase tracking-wider hover:text-foreground transition-colors duration-300"
          >
            Series
          </a>
          <a
            href="#boxset"
            className="hidden sm:inline-flex text-muted-foreground font-body text-sm uppercase tracking-wider hover:text-foreground transition-colors duration-300"
          >
            Boxset
          </a>
          <a
            href="#newsletter"
            className="hidden sm:inline-flex text-muted-foreground font-body text-sm uppercase tracking-wider hover:text-foreground transition-colors duration-300"
          >
            Newsletter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default BookDetailNav;
