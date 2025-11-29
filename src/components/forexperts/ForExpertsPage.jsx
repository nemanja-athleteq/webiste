// For Experts Page - Main Component
import Navigation from "../homepage2/Navigation";
import Footer from "../homepage2/Footer";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import PracticeSection from "./PracticeSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import "../../styles/forexperts.css";

const ForExpertsPage = () => {
  return (
    <div className="for-experts-page">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <PracticeSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ForExpertsPage;
