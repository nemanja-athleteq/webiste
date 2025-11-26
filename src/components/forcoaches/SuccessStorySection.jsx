// Success Story Section - "6 More Wins"
const SuccessStorySection = () => {
  return (
    <section className="coaches-success-section">
      <div className="coaches-success-inner">
        {/* Left side - Coach Image */}
        <div className="success-image-container">
          <img
            src="/assets/success-story-coach.png"
            alt="Successful coach"
            className="success-coach-image"
          />
        </div>

        {/* Right side - Content */}
        <div className="success-content">
          <div className="success-header">
            <span className="success-label">Success Story:</span>
            <h2 className="success-title">6 More Wins</h2>
          </div>

          <div className="success-details">
            {/* Challenge */}
            <div className="success-block">
              <h3 className="success-block-label">CHALLENGE:</h3>
              <p className="success-block-text">
                Making <strong>€200k+ lineup decisions</strong> with GPS only—mental state was guesswork
              </p>
            </div>

            {/* Solution */}
            <div className="success-block">
              <h3 className="success-block-label">SOLUTION:</h3>
              <p className="success-block-text">
                AthleteQ <strong>Mental Readiness Dashboard</strong> + <strong>Early Crisis Detection</strong>
              </p>
            </div>

            {/* Results */}
            <div className="success-block">
              <h3 className="success-block-label">RESULTS (Season 1):</h3>
              <div className="success-badges">
                <span className="success-badge">
                  +6 wins
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
                <span className="success-badge">
                  +€150k saved
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <span className="success-badge">
                  10h weekly saved
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="success-quote-box">
            <p className="success-quote">
              "Dashboard showed my striker's stress 8/10 before a crucial match—even though he said "I'm ready." I rested him. Backup scored 2 goals, we won. That's happened 6 times this season."
            </p>
            <a href="#case-study" className="success-cta">
              Read Full Case Study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;
