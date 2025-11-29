// Practice Section for Experts - "Your Practice, Redesigned" & "60 Days of Context"

const PracticeSection = () => {
  return (
    <section className="experts-practice-section">
      {/* Ellipse Glow */}
      <div className="experts-practice-glow" />

      <div className="experts-practice-inner">
        {/* First Block - Your Practice Redesigned */}
        <div className="experts-practice-block">
          <div className="experts-practice-content">
            <h2 className="experts-practice-title">
              Your Practice,
              <br />
              <span className="green">Redesigned</span>
            </h2>

            {/* Stats Row */}
            <div className="experts-practice-stats">
              <div className="experts-practice-stat">
                <span className="experts-practice-stat-value">40<span className="green">+</span></span>
                <span className="experts-practice-stat-label">CLIENTS</span>
              </div>
              <div className="experts-practice-stat">
                <span className="experts-practice-stat-value">€0</span>
                <span className="experts-practice-stat-label">MARKETING</span>
              </div>
              <div className="experts-practice-stat">
                <span className="experts-practice-stat-value">60<span className="green">d</span></span>
                <span className="experts-practice-stat-label">CONTEX</span>
              </div>
            </div>

            <p className="experts-practice-description">
              AI handles the daily check-ins, the between-session support, the 11pm anxiety messages. You focus on what only a qualified expert can deliver: the breakthrough interventions that transform careers.
            </p>
          </div>

          <div className="experts-practice-image">
            <img
              src="/assets/experts-practice-bg.png"
              alt="Sports psychologist"
              className="experts-practice-img"
            />
          </div>
        </div>

        {/* Second Block - 60 Days of Context */}
        <div className="experts-context-block">
          <div className="experts-context-image">
            <img
              src="/assets/experts-dashboard.png"
              alt="Pre-Session Brief Dashboard"
              className="experts-context-img"
            />
          </div>

          <div className="experts-context-content">
            <h2 className="experts-context-title">
              60 Days of Context.
              <br />
              Before Session One.
            </h2>

            <p className="experts-context-description">
              Every athlete arrives with a complete picture: AI conversation summaries, readiness trends, Mental Reps performance, and flagged concerns. No more wasted time on context gathering.
            </p>

            {/* Features List */}
            <div className="experts-context-features">
              <div className="experts-context-feature">
                <div className="experts-context-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c7f043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M7 15h4" />
                    <path d="M15 15h2" />
                    <path d="M7 11h2" />
                    <path d="M13 11h4" />
                  </svg>
                </div>
                <p className="experts-context-feature-text">
                  <span className="white">AI conversation insights</span> — what they're worried about
                </p>
              </div>

              <div className="experts-context-feature">
                <div className="experts-context-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c7f043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <p className="experts-context-feature-text">
                  <span className="white">Readiness trends</span> — stress, sleep, performance patterns
                </p>
              </div>

              <div className="experts-context-feature">
                <div className="experts-context-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c7f043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <p className="experts-context-feature-text">
                  <span className="white">Flagged concerns</span> — priority issues to address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
