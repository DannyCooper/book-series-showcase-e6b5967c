import HeroSection from "@/components/HeroSection";
import BookSeriesSection from "@/components/BookSeriesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BookSeriesSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
