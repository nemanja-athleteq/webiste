// CTA Section for Clubs - "Ready to See the Other 50%?"

const CTASection = () => {
  return (
    <section className="clubs-cta-section">
      <div className="clubs-cta-inner">
        {/* Header */}
        <div className="clubs-cta-header">
          <h2 className="clubs-cta-title">Ready to See the Other 50%?</h2>
          <p className="clubs-cta-subtitle">
            See what complete visibility looks like. 15-minute demo. No commitment.
          </p>
        </div>

        {/* Tablet Image */}
        <div className="clubs-cta-image">
          <div className="clubs-cta-ipad-device">
            <div className="clubs-cta-ipad-screen-wrapper">
              <img
                src="/assets/ipad-screen-content.png"
                alt="AthleteQ Dashboard"
                className="clubs-cta-ipad-screen"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="clubs-cta-buttons">
          <button className="btn-primary">Request Demo</button>
          <button className="btn-outline">Calculate Your ROI</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
