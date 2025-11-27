// Hero Section Component for For Athletes page
const HeroSection = () => {
  return (
    <section className="athletes-hero-section">
      {/* Hero Background - grayscale, full coverage */}
      <div className="athletes-hero-background">
        <img
          src="/assets/athletes-hero-bg.png"
          alt=""
          className="athletes-hero-bg-img"
        />
        <div className="athletes-hero-overlay"></div>
      </div>

      <div className="athletes-hero-inner">
        <div className="athletes-hero-content">
          {/* Text Group - gap 18px */}
          <div className="athletes-hero-text-group">
            {/* Badges - gap 10px */}
            <div className="athletes-hero-badges">
              <span className="athletes-badge">
                ✓ Used by 500+ athletes across Europe
              </span>
              <span className="athletes-badge">
                ✓ 5 minutes daily | Proven results in 7 days
              </span>
            </div>

            {/* Title + Description - gap 10px */}
            <div className="athletes-hero-title-wrapper">
              <h1 className="athletes-hero-title">
                Train Your Mind Like You Train Your Body. See Results on the Field.
              </h1>
              <p className="athletes-hero-description">
                Without AthleteQ: You practice 10 hours a week but your mind gets 0 training. With AthleteQ: Mental Reps, AI coaching, and tracking - just like your physical training.
              </p>
            </div>
          </div>

          {/* CTA Buttons - gap 10px */}
          <div className="athletes-hero-buttons">
            <button className="btn-primary">Start Free Training</button>
            <button className="btn-outline">Watch 60-Second Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
