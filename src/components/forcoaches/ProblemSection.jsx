// Problem Section - "Every Week, You Make Critical Decisions With half of the Information"
const ProblemSection = () => {
  return (
    <section className="coaches-problem-section">
      <div className="coaches-problem-inner">
        {/* Left side - Image with stats */}
        <div className="problem-image-container">
          <div className="problem-image-wrapper">
            <img
              src="/assets/coaches-problem-bg.png"
              alt="Coach analyzing tactics"
              className="problem-image"
            />
            <div className="problem-image-overlay"></div>
          </div>

          {/* Stats bar */}
          <div className="problem-stats">
            <div className="problem-stat">
              <span className="stat-label">Player quits:</span>
              <span className="stat-value">€80k value lost</span>
              <div className="stat-divider"></div>
            </div>
            <div className="problem-stat">
              <span className="stat-label">Wrong call:</span>
              <span className="stat-value">1 match lost</span>
              <div className="stat-divider"></div>
            </div>
            <div className="problem-stat">
              <span className="stat-label">Check-ins:</span>
              <span className="stat-value">520h/year wasted</span>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="problem-content">
          <h2 className="problem-title">
            Every Week, You Make Critical Decisions With half of the Information
          </h2>

          <p className="problem-description">
            You invest millions tracking every physical metric but nothing on mental readiness—costing you €50-200k per preventable crisis, lost matches from wrong lineup calls, and 520 wasted hours yearly.
          </p>

          <div className="industry-truth-box">
            <h3 className="industry-truth-title">Industry truth</h3>
            <p className="industry-truth-quote">
              <strong>76% of coaches</strong> say lack of mental insight is their #1 challenge
            </p>
            <p className="industry-truth-source">— UEFA Coaching Study, 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
