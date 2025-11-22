// Hero Section Component - EXACT COPY from homepage2.html
const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Hero Background */}
      <div className="hero-background">
        <div className="hero-background-inner">
          <img src="http://localhost:3845/assets/b374c9c02b339586ed379284ed5faaa8419686cb.png" alt="" className="hero-background-img" />
        </div>
      </div>

      {/* Decoration Grid */}
      <div className="decoration-grid"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Mental Performance<br />
            <span className="highlight">Measured</span><br />
            Mental Champions<br />
            <span className="highlight">Created.</span>
          </h1>
          <p className="hero-description">
            Like GPS revolutionized physical tracking, AthleteQ revolutionizes mental training. An entire framework connecting athletes, and experts to build mentally unbreakable champions.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Request a Demo</button>
            <button className="btn-secondary">Explore the HUB ↓</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="http://localhost:3845/assets/b374c9c02b339586ed379284ed5faaa8419686cb.png" alt="Athlete" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
