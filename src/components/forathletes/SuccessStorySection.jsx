// Success Story Section - From bench warmer to starting midfielder
const SuccessStorySection = () => {
  return (
    <section className="athletes-success-section">
      <div className="athletes-success-inner">
        <h2 className="athletes-success-title">
          From bench warmer to starting midfielder
        </h2>

        <div className="athletes-success-content">
          {/* Left - Athlete Image */}
          <div className="athletes-success-image">
            <img
              src="/assets/athlete-success.png"
              alt="Athlete success story"
            />
          </div>

          {/* Right - Timeline Content */}
          <div className="athletes-success-timeline">
            {/* Before */}
            <div className="timeline-block">
              <h3 className="timeline-title">BEFORE:</h3>
              <div className="timeline-content">
                <p>AQ Score: 52/100</p>
                <p>Started: 3 of 10 matches</p>
                <p>"I'd freeze in big moments"</p>
              </div>
              <div className="timeline-divider"></div>
            </div>

            {/* With AthleteQ */}
            <div className="timeline-block">
              <h3 className="timeline-title">WITH ATHLETEQ</h3>
              <div className="timeline-content">
                <p>Daily AI Coach prep (5 min)</p>
                <p>Mental Reps training (60 sec)</p>
                <p>Tracked progress weekly</p>
              </div>
              <div className="timeline-divider"></div>
            </div>

            {/* After */}
            <div className="timeline-block">
              <h3 className="timeline-title">AFTER (Week 8):</h3>
              <div className="timeline-content">
                <p>AQ Score: 74/100 (+22)</p>
                <p>Started: 7 of 10 matches</p>
                <p>Scored 3 pressure goals</p>
              </div>
              <div className="timeline-divider"></div>
            </div>

            {/* CTA Button */}
            <button className="btn-primary">Start Your Transformation →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;
