// Hero Section for Experts - "Scale Your Sports Psychology Practice"

const HeroSection = () => {
  return (
    <section className="experts-hero-section">
      {/* Background Image */}
      <div className="experts-hero-background">
        <img
          src="/assets/experts-hero-bg.png"
          alt=""
          className="experts-hero-bg-img"
        />
        {/* Bottom gradient fade */}
        <img
          src="/assets/experts-hero-gradient.png"
          alt=""
          className="experts-hero-gradient"
        />
      </div>

      {/* Content */}
      <div className="experts-hero-inner">
        {/* Eyebrow */}
        <p className="experts-hero-eyebrow">
          For Sports Psychologists & Mental Performance Consultants
        </p>

        {/* Title */}
        <h1 className="experts-hero-title">
          Scale Your Sports Psychology Practice to 40+ Clients Without Burning Out
        </h1>

        {/* Subtitle */}
        <p className="experts-hero-subtitle">
          AthleteQ's Expert Marketplace connects you with pre-qualified athletes from 50+ European clubs. AI provides 24/7 support between sessions—you deliver the expert interventions that transform careers.
        </p>

        {/* Buttons */}
        <div className="experts-hero-buttons">
          <button className="experts-hero-btn-primary">
            Apply to Join Marketplace
          </button>
          <button className="experts-hero-btn-secondary">
            See How It Works
          </button>
        </div>

        {/* Badges */}
        <div className="experts-hero-badges">
          <span className="experts-hero-badge">100+ Vetted Experts</span>
          <span className="experts-hero-badge">€120 Avg Session Rate</span>
          <span className="experts-hero-badge">15% Acceptance Rate</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
