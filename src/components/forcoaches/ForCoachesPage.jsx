// For Coaches Page - Main Component
import Navigation from '../homepage2/Navigation'
import HeroSection from './HeroSection'
import ProblemSection from './ProblemSection'
import SolutionSection from './SolutionSection'
import SuccessStorySection from './SuccessStorySection'
import FAQSection from './FAQSection'
import Footer from '../homepage2/Footer'
import '../../styles/forcoaches.css'

const ForCoachesPage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SuccessStorySection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default ForCoachesPage;
