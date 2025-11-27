// For Athletes Page - Main Component
import Navigation from '../homepage2/Navigation'
import HeroSection from './HeroSection'
import SoundFamiliarSection from './SoundFamiliarSection'
import SolutionSection from './SolutionSection'
import SuccessStorySection from './SuccessStorySection'
import FAQSection from './FAQSection'
import Footer from '../homepage2/Footer'
import '../../styles/forathletes.css'

const ForAthletesPage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <SoundFamiliarSection />
      <SolutionSection />
      <SuccessStorySection />
      <FAQSection />
      {/* More sections will be added here */}
      <Footer />
    </>
  );
};

export default ForAthletesPage;
