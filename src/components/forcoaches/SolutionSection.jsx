// Solution Section - "How AthleteQ Solves Each Problem. Step by Step"
const SolutionSection = () => {
  return (
    <section className="coaches-solution-section">
      <div className="coaches-solution-inner">
        {/* Header */}
        <div className="solution-header">
          <h2 className="solution-title">
            How AthleteQ Solves Each Problem. Step by Step
          </h2>
          <p className="solution-subtitle">
            Not vague promises. Concrete workflows you'll use tomorrow.
          </p>
        </div>

        {/* Content */}
        <div className="solution-content">
          {/* Left side - Text */}
          <div className="solution-text">
            <h3 className="solution-feature-title">Complete Performance Picture</h3>

            <div className="solution-block">
              <span className="solution-label">The Gap:</span>
              <p className="solution-description">
                GPS tracks every sprint. Mental state? Black box. You're coaching with 50% of the information.
              </p>
            </div>

            <div className="solution-block">
              <span className="solution-label">The Solution:</span>
              <p className="solution-description">
                AthleteQ integrates with your GPS systems. See physical + mental data side-by-side. Understand why physical performance drops—mental fatigue, poor sleep, or stress.
              </p>
            </div>

            <div className="solution-block">
              <span className="solution-label">The Result:</span>
              <p className="solution-description">
                Coach the whole athlete. 100% of performance data = better decisions, fewer injuries, optimized training loads.
              </p>
            </div>
          </div>

          {/* Right side - iPad Mockup */}
          <div className="solution-mockup">
            <div className="ipad-device">
              <div className="ipad-screen-wrapper">
                <img
                  src="/assets/ipad-screen-content.png"
                  alt="AthleteQ Dashboard"
                  className="ipad-screen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
