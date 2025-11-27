// Solution Section - How AthleteQ Solves This (For Athletes)
import AnimatedPhoneMockup from '../homepage2/AnimatedPhoneMockup';

const SolutionSection = () => {
  return (
    <section className="athletes-solution-section">
      <div className="athletes-solution-inner">
        <h2 className="athletes-solution-title">How AthleteQ Solves This</h2>

        <div className="athletes-solution-content">
          {/* Left - Animated Phone Mockup */}
          <div className="athletes-solution-phone">
            <AnimatedPhoneMockup />
          </div>

          {/* Right - Content */}
          <div className="athletes-solution-text">
            <div className="solution-feature">
              <h3 className="solution-feature-title">AI COACH</h3>

              <div className="solution-feature-content">
                <p className="solution-highlight">82% Less Stressed in 1 Week</p>
                <p className="solution-description">
                  Psychologists cost €200/hour. AI Coach: instant advice, 24/7.
                </p>

                <div className="solution-block">
                  <p className="solution-label">How It Works:</p>
                  <p className="solution-description">
                    Open → Chat (2 min) → Advice (&lt;2 min) → Track Daily
                  </p>
                </div>

                <div className="solution-block">
                  <p className="solution-label">Proven Results:</p>
                  <p className="solution-description">82% feel less stressed</p>
                  <p className="solution-description">500+ athletes, 15,000+ chats</p>
                </div>
              </div>
            </div>

            <div className="solution-footer">
              <div className="solution-checkmarks">
                <p className="solution-check">✓ Private &amp; secure</p>
                <p className="solution-check">✓ Coach sees AQ, not chats</p>
              </div>

              <button className="btn-primary">Try AI Coach Free →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
