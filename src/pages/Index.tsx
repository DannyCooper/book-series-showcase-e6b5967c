import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookDetailNav from "@/components/book-detail/BookDetailNav";
import HeroSection from "@/components/HeroSection";
import BookSeriesSection from "@/components/BookSeriesSection";
import BoxsetSection from "@/components/BoxsetSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for the page to render, then scroll to the hash
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-background">
      <BookDetailNav />
      <HeroSection />
      <BoxsetSection />
      <BookSeriesSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
