import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("You're in!", {
        description: "You'll be the first to know about new Nunchucks! releases.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="relative container mx-auto max-w-2xl text-center space-y-8">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary/40" />
          <span className="text-flame font-display text-lg uppercase tracking-wider">✝</span>
          <div className="w-12 h-px bg-primary/40" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase">
          Stay in the Fight
        </h2>
        <p className="text-muted-foreground font-serif text-lg leading-relaxed max-w-lg mx-auto italic">
          Get exclusive updates, behind-the-scenes content, and early access to new releases. No spam — just righteous fury delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 bg-secondary border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-flame-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 whitespace-nowrap"
          >
            {isSubmitting ? "Joining..." : "Subscribe"}
          </button>
        </form>

        <p className="text-muted-foreground/60 font-body text-xs">
          Unsubscribe anytime. Your email is safe with us.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
