import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoFounderTeam from "@/components/CoFounderTeam";
import StartupJourney from "@/components/StartupJourney";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <section id="features">
          <CoFounderTeam />
        </section>
        <section id="journey">
          <StartupJourney />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
