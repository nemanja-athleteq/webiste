// For Parents Page - Main Component
import Navigation from "../homepage2/Navigation";
import Footer from "../homepage2/Footer";
import HeroSection from "./HeroSection";
import ConversationsSection from "./ConversationsSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import "../../styles/forparents.css";

const ForParentsPage = () => {
  return (
    <div className="for-parents-page">
      <Navigation />
      <main>
        <HeroSection />
        <ConversationsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default ForParentsPage;
