import { usePageLoadAnimation } from '../../hooks/usePageLoadAnimation';
import useHeroMagnifyEffect from '../../hooks/useHeroMagnifyEffect';
import useHeroSpotlightEffect from '../../hooks/useHeroSpotlightEffect';

// Hero Section Component with Page Load Animations
const HeroSection = () => {
  const {
    heroSectionRef,
    backgroundRef,
    gridRef,
    titleRef,
    highlightRef,
    descriptionRef,
    primaryBtnRef,
    secondaryBtnRef,
    heroImageRef,
  } = usePageLoadAnimation();

  // OPTION A: Apply magnify lupa effect to hero image (mask div stays fixed, image moves)
  useHeroMagnifyEffect(heroSectionRef, heroImageRef);

  // OPTION B: Apply spotlight effect to hero background (spotlight follows mouse)
  useHeroSpotlightEffect(heroSectionRef, backgroundRef);

  return (
    <section ref={heroSectionRef} className="hero-section">
      {/* Hero Background */}
      <div ref={backgroundRef} className="hero-background">
        <div className="hero-background-inner">
          <img src="/assets/hero background.png" alt="" className="hero-background-img" />
        </div>
      </div>

      {/* Decoration Grid */}
      <div ref={gridRef} className="decoration-grid"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1 ref={highlightRef} className="hero-title">
            <span className="normal-text">Mental Performance</span><br />
            <span className="highlight">Measured</span><br />
            <span className="normal-text">Mental Champions</span><br />
            <span className="highlight">Created.</span>
          </h1>
          <p ref={descriptionRef} className="hero-description">
            Like GPS revolutionized physical tracking, AthleteQ revolutionizes mental training. An entire framework connecting athletes, and experts to build mentally unbreakable champions.
          </p>
          <div className="hero-buttons">
            <button ref={primaryBtnRef} className="btn-primary">Request a Demo</button>
            <button ref={secondaryBtnRef} className="btn-secondary">Explore the HUB ↓</button>
          </div>
        </div>
        <div ref={heroImageRef} className="hero-image">
          <img src="/assets/hero background.png" alt="Athlete" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
