// Hero Section Component for For Clubs page
const HeroSection = () => {
  return (
    <section className="clubs-hero-section">
      {/* Hero Background */}
      <div className="clubs-hero-background">
        <img
          src="/assets/clubs-hero-bg.png"
          alt=""
          className="clubs-hero-bg-img"
        />
        <div className="clubs-hero-overlay"></div>
      </div>

      <div className="clubs-hero-inner">
        <div className="clubs-hero-content">
          <h1 className="clubs-hero-title">
            The 50% of Performance You're Not Tracking
          </h1>

          <p className="clubs-hero-description">
            You've mastered physical data. Mental performance is still invisible. AthleteQ changes that.
          </p>

          <div className="clubs-hero-buttons">
            <button className="btn-primary">Request Demo</button>
            <button className="btn-outline">Calculate Your ROI</button>
          </div>

          <div className="clubs-badge">
            <span className="clubs-badge-text">
              ✓ 50+ clubs across Europe • 2000+ athletes monitored
            </span>
          </div>
        </div>
      </div>

      {/* Partner Logos Strip */}
      <div className="clubs-partner-logos">
        <img
          src="/assets/clubs-partner-logos.png"
          alt="Partner logos"
          className="clubs-partner-logos-img"
        />
      </div>
    </section>
  );
};

export default HeroSection;
