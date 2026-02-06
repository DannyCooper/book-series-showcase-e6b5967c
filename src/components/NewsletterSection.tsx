import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast.success("Welcome to the Circle!", {
        description: "You'll receive updates about new releases and exclusive content.",
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
          <div className="w-12 h-px bg-gold/40" />
          <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div className="w-12 h-px bg-gold/40" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          Join the Inner Circle
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-lg mx-auto">
          Be the first to know about new releases, behind-the-scenes content, and exclusive chapter previews. No spam — only stories.
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
            className="px-8 py-3.5 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 whitespace-nowrap"
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
