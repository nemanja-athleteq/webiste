// Final CTA Section - Join 500+ Athletes
const CTASection = () => {
  return (
    <section className="athletes-cta-section">
      <div className="athletes-cta-content">
        {/* Left - Athlete Image */}
        <div className="athletes-cta-image">
          <img
            src="/assets/athlete-cta.png"
            alt="Athlete training"
          />
        </div>

        {/* Right - Content */}
        <div className="athletes-cta-text">
          <div className="cta-header">
            <h2 className="cta-title">
              Join 500+ Athletes Who Train Their Minds Daily
            </h2>
            <p className="cta-description">
              From grassroots clubs to Premier League academies, athletes using AthleteQ see results in their first week.
            </p>
          </div>

          <div className="cta-checkmarks">
            <p>✓ Free with your club's subscription</p>
            <p>✓ Start in under 2 minutes</p>
            <p>✓ No credit card needed</p>
          </div>

          <div className="cta-buttons">
            <button className="btn-primary">Start Training Free</button>
            <button className="btn-primary">See How It Works</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
