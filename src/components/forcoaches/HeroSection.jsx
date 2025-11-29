// Hero Section Component for For Coaches page
const HeroSection = () => {
  return (
    <section className="coaches-hero-section">
      {/* Hero Background */}
      <div className="coaches-hero-background">
        <img
          src="/assets/coaches-hero-bg.png"
          alt=""
          className="coaches-hero-bg-img"
        />
      </div>

      <div className="coaches-hero-inner">
        <div className="coaches-hero-content">
          <h1 className="coaches-hero-title">
            Stop Guessing Who's Mentally Ready. Start Making Data-Driven
            Decisions.
          </h1>

          <p className="coaches-hero-description">
            Like GPS revolutionized physical tracking, AthleteQ revolutionizes
            mental training. An entire ecosystem connecting athletes, coaches,
            clubs and experts to build mentally unbreakable champions.
          </p>

          <div className="coaches-hero-buttons">
            <div className="coaches-button-group">
              <button className="btn-primary">See Live Demo</button>
              <span className="button-subtext">Book 15-min walkthrough</span>
            </div>
            <div className="coaches-button-group">
              <button className="btn-primary">See Coach Dashboard</button>
              <span className="button-subtext">
                Interactive demo - no signup required
              </span>
            </div>
          </div>

          <div className="coaches-trusted-section">
            <p className="coaches-trusted-text">
              Trusted by 200+ coaches across 50 European clubs
            </p>
            <div className="club-logos">
              <img
                src="/assets/Club Logo - Didsbury Northern HC.png"
                alt="Didsbury Northern HC"
              />
              <img
                src="/assets/Club Logo - Brooklands HC.png"
                alt="Brooklands HC"
              />
              <img
                src="/assets/Club Logo - Milton Keynes HC.png"
                alt="Milton Keynes HC"
              />
              <img
                src="/assets/Logo - Soutgate HC hover.svg"
                alt="Southgate HC"
                className="club-logo-svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
