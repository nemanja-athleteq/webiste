// CTA Section - "Join 2000+ Athletes..."
const CTASection = () => {
  return (
    <section className="coaches-cta-section">
      {/* Decorative blob background */}
      <img
        src="/assets/decoration-blob.svg"
        alt=""
        className="cta-blob-decoration"
        aria-hidden="true"
      />

      <div className="coaches-cta-inner">
        {/* Header */}
        <div className="cta-header">
          <h2 className="cta-title">
            Join 2000+ Athletes, 50+ Clubs, 100+ Experts in the AthleteQ Ecosystem
          </h2>
          <p className="cta-subtitle">
            Don't let your competition get ahead. Start measuring and improving mental performance today.
          </p>
        </div>

        {/* CTA Button */}
        <div className="cta-button-wrapper">
          <a href="#demo" className="cta-button">
            Request a Demo
          </a>
          <p className="cta-button-note">For clubs and organizations</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
