// CTA Section for Experts - "You became a psychologist to change lives."

const CTASection = () => {
  return (
    <section className="experts-cta-section">
      {/* Glow Effect */}
      <div className="experts-cta-glow" />

      {/* Content */}
      <div className="experts-cta-inner">
        <h2 className="experts-cta-title">
          You became a psychologist to change lives.
        </h2>
        <p className="experts-cta-subtitle">
          Not to chase clients.
        </p>
        <button className="experts-cta-button">
          Apply to Join →
        </button>

        {/* Badges */}
        <div className="experts-cta-badges">
          <span className="experts-cta-badge">100+ experts</span>
          <span className="experts-cta-badge">15% acceptance</span>
          <span className="experts-cta-badge">48h response</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
