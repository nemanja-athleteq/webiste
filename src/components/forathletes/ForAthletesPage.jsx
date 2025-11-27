// For Athletes Page - Main Component
import Navigation from '../homepage2/Navigation'
import HeroSection from './HeroSection'
import SoundFamiliarSection from './SoundFamiliarSection'
import Footer from '../homepage2/Footer'
import '../../styles/forathletes.css'

const ForAthletesPage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <SoundFamiliarSection />
      {/* More sections will be added here */}
      <Footer />
    </>
  );
};

export default ForAthletesPage;
