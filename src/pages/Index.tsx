import HeroSection from "@/components/HeroSection";
import BookSeriesSection from "@/components/BookSeriesSection";
import BoxsetSection from "@/components/BoxsetSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BookSeriesSection />
      <BoxsetSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
