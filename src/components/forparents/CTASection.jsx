// CTA Section for Parents - "Stop Worrying. Start Knowing."

const CTASection = () => {
  return (
    <section className="parents-cta-section">
      {/* Background Image */}
      <div className="parents-cta-background">
        <img
          src="/assets/parents-cta-bg.png"
          alt=""
          className="parents-cta-bg-img"
        />
      </div>

      {/* Content */}
      <div className="parents-cta-inner">
        <h2 className="parents-cta-title">
          Stop Worrying. Start Knowing.
        </h2>
        <p className="parents-cta-subtitle">
          If your club uses AthleteQ, parent access is included.
          <br />
          If not, let them know you want it.
        </p>
        <button className="parents-cta-button">
          Request for Your Club
        </button>
      </div>
    </section>
  );
};

export default CTASection;
