// Hero Section for Parents - "Know They're OK, Even When They Say I'm Fine"

const HeroSection = () => {
  return (
    <section className="parents-hero-section">
      {/* Background Image */}
      <div className="parents-hero-background">
        <img
          src="/assets/parents-hero-bg.png"
          alt=""
          className="parents-hero-bg-img"
        />
        <div className="parents-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="parents-hero-inner">
        <div className="parents-hero-content">
          <h1 className="parents-hero-title">
            Know They're OK, Even When They Say 'I'm Fine
          </h1>
          <p className="parents-hero-description">
            Without AthleteQ, you ask 'how was practice?' and get 'fine.' You sense
            something's wrong but can't see it. With AthleteQ, you get weekly updates
            on their mental readiness, early alerts if they're struggling, and peace
            of mind that professionals are watching over them — even when you're not
            there.
          </p>
          <div className="parents-hero-buttons">
            <button className="btn-primary">See How It Works</button>
            <button className="btn-outline">Request for Your Club</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
