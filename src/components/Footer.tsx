const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 py-12 px-6">
      {/* Very subtle top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="container mx-auto max-w-6xl text-center">
        <p className="font-display text-lg font-semibold text-foreground uppercase tracking-wider drop-shadow-[0_1px_3px_hsl(0_0%_0%_/_0.4)]">
          Nunchucks!
        </p>
        <p className="text-muted-foreground font-body text-sm mt-1">
          © 2026 Dominicka. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
