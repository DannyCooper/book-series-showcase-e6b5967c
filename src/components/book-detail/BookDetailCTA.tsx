import { useState } from "react";
import { toast } from "sonner";
import type { Book } from "@/data/books";

interface BookDetailCTAProps {
  book: Book;
}

const BookDetailCTA = ({ book }: BookDetailCTAProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("You're in!", {
        description:
          "You'll be the first to know about new Nunchucks! releases.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="cta"
      className="relative py-24 md:py-32 px-6 grain-overlay"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(28_80%_52%_/_0.04)_0%,_transparent_50%)]" />

      <div className="relative z-10 container mx-auto max-w-5xl">
        {/* Newsletter only */}
        <div className="max-w-xl mx-auto text-center lg:text-left space-y-6">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
            <div className="w-8 divider-embossed" />
            <span className="text-flame font-display text-base uppercase tracking-wider">
              ✝
            </span>
            <div className="w-8 divider-embossed" />
          </div>
          <h3 className="text-2xl font-display font-bold uppercase">
            Stay in the Fight
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Get exclusive updates, behind-the-scenes content, and early access
            to new releases.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-secondary border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 shadow-inner shadow-black/20"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-xs uppercase tracking-wider rounded hover:bg-flame-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap shadow-lg shadow-primary/25"
            >
              {isSubmitting ? "Joining..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookDetailCTA;
