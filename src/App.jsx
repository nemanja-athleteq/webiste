// Main App Component - Combines all homepage2 sections
import Navigation from './components/homepage2/Navigation'
import HeroSection from './components/homepage2/HeroSection'
import AICoachSection from './components/homepage2/AICoachSection'
import SliderSection from './components/homepage2/SliderSection'
import PerspectivesSection from './components/homepage2/PerspectivesSection'
import TestimonialsSection from './components/homepage2/TestimonialsSection'
import CTASection from './components/homepage2/CTASection'
import Footer from './components/homepage2/Footer'
import useHomepage2Effects from './hooks/useHomepage2Effects'

function App() {
  // Apply all JavaScript effects from original homepage2.js
  useHomepage2Effects();

  return (
    <>
      <Navigation />
      <HeroSection />
      <AICoachSection />
      <SliderSection />
      <PerspectivesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
