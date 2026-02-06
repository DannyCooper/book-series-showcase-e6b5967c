const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12 px-6">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px divider-embossed" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-[radial-gradient(ellipse,_hsl(42_85%_55%_/_0.07)_0%,_transparent_70%)]" />
      
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
