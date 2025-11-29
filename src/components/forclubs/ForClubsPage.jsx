// For Clubs Page - Main Component
import Navigation from "../homepage2/Navigation";
import Footer from "../homepage2/Footer";
import HeroSection from "./HeroSection";
import ProblemSolutionSection from "./ProblemSolutionSection";
import CapabilitiesSection from "./CapabilitiesSection";
import InvestmentSection from "./InvestmentSection";
import TimelineSection from "./TimelineSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import "../../styles/forclubs.css";

const ForClubsPage = () => {
  return (
    <div className="for-clubs-page">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <CapabilitiesSection />
        <InvestmentSection />
        <TimelineSection />
        <FAQSection />
        <CTASection />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default ForClubsPage;
