// Main App Component with Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Homepage components
import Navigation from './components/homepage2/Navigation'
import HeroSection from './components/homepage2/HeroSection'
import AICoachSection from './components/homepage2/AICoachSection'
import SliderSection from './components/homepage2/SliderSection'
import PerspectivesSection from './components/homepage2/PerspectivesSection'
import TestimonialsSection from './components/homepage2/TestimonialsSection'
import CTASection from './components/homepage2/CTASection'
import Footer from './components/homepage2/Footer'
import useHomepage2Effects from './hooks/useHomepage2Effects'

// For Coaches page
import ForCoachesPage from './components/forcoaches/ForCoachesPage'

// For Athletes page
import ForAthletesPage from './components/forathletes/ForAthletesPage'

// For Clubs page
import ForClubsPage from './components/forclubs/ForClubsPage'

// Homepage Component
function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-coaches" element={<ForCoachesPage />} />
        <Route path="/for-athletes" element={<ForAthletesPage />} />
        <Route path="/for-clubs" element={<ForClubsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
